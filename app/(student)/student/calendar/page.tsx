'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { CalendarView, EventDetailModal } from '../../../../components/calendar/CalendarView';
import { CalendarDays, Info } from 'lucide-react';

export default function StudentCalendarPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState<any[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [showEventModal, setShowEventModal] = useState(false);

    useEffect(() => {
        const currentUser = getUserFromCookie();
        if (!currentUser || currentUser.role !== 'student') {
            router.push('/login');
            return;
        }
        setUser(currentUser);
        loadCalendarEvents();
    }, [router]);

    const loadCalendarEvents = async () => {
        try {
            const res = await fetch('/api/student/calendar');
            if (res.ok) {
                const data = await res.json();
                setEvents(data.map((e: any) => ({
                    ...e,
                    date: new Date(e.date)
                })));
            }
        } catch (error) {
            console.error('Error loading calendar events:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEventClick = (event: any) => {
        setSelectedEvent(event);
        setShowEventModal(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-slate-400">Loading calendar...</div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <CalendarDays className="w-8 h-8 text-blue-400" />
                    <h1 className="text-3xl font-bold text-white">Project Calendar</h1>
                </div>
                <p className="text-slate-400">
                    View your group&apos;s meeting schedule and project timeline
                </p>
            </div>

            {/* Info Banner */}
            {events.length === 0 && !loading && (
                <div className="mb-6 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-3 rounded-xl flex items-center gap-3">
                    <Info className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                        No meetings scheduled yet. Your faculty advisor will schedule meetings for your project group.
                    </p>
                </div>
            )}

            {events.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">{events.length}</div>
                        <div className="text-sm text-slate-400">Total Meetings</div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-400">
                            {events.filter(e => e.type === 'meeting').length}
                        </div>
                        <div className="text-sm text-slate-400">Upcoming</div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-400">
                            {events.filter(e => e.type === 'review').length}
                        </div>
                        <div className="text-sm text-slate-400">Completed</div>
                    </div>
                </div>
            )}

            <CalendarView
                events={events}
                onEventClick={handleEventClick}
            />

            <EventDetailModal
                event={selectedEvent}
                isOpen={showEventModal}
                onClose={() => setShowEventModal(false)}
            />
        </div>
    );
}
