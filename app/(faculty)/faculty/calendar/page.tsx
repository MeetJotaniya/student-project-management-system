'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { CalendarView, EventDetailModal } from '../../../../components/calendar/CalendarView';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, FileText, Users, Plus, Loader2 } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

interface ProjectGroup {
  id: number;
  name: string;
  title: string;
  memberCount: number;
}

export default function FacultyCalendarPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [groups, setGroups] = useState<ProjectGroup[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    projectgroupid: '',
    meetingdatetime: '',
    meetinglocation: '',
    meetingpurpose: '',
    meetingnotes: ''
  });

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'faculty') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadCalendarEvents();
    loadGroups();
  }, [router]);

  const loadCalendarEvents = async () => {
    try {
      const res = await fetch('/api/faculty/calendar');
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

  const loadGroups = async () => {
    try {
      const res = await fetch('/api/faculty/groups');
      if (res.ok) {
        const data = await res.json();
        setGroups(data);
      }
    } catch (error) {
      console.error('Error loading groups:', error);
    }
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleAddEvent = () => {
    setFormData({
      projectgroupid: '',
      meetingdatetime: '',
      meetinglocation: '',
      meetingpurpose: '',
      meetingnotes: ''
    });
    setShowScheduleModal(true);
  };

  const handleSubmitMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/faculty/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setShowScheduleModal(false);
        setSuccessMessage('Meeting scheduled successfully! Students have been notified.');
        setTimeout(() => setSuccessMessage(''), 4000);
        await loadCalendarEvents();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to schedule meeting');
      }
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('Failed to schedule meeting. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
        <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
        <p className="text-slate-400">
          Schedule and manage meetings with your project groups
        </p>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-2"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <CalendarView
        events={events}
        onAddEvent={handleAddEvent}
        onEventClick={handleEventClick}
      />

      <EventDetailModal
        event={selectedEvent}
        isOpen={showEventModal}
        onClose={() => setShowEventModal(false)}
      />

      {/* Schedule Meeting Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowScheduleModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                        <Plus className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Schedule Meeting</h3>
                        <p className="text-sm text-slate-400">Set up a meeting with a project group</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowScheduleModal(false)}
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmitMeeting} className="p-6 space-y-5">
                  {/* Project Group Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      Project Group
                    </label>
                    <select
                      value={formData.projectgroupid}
                      onChange={(e) => setFormData({ ...formData, projectgroupid: e.target.value })}
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a project group...</option>
                      {groups.map(group => (
                        <option key={group.id} value={group.id}>
                          {group.name} — {group.title} ({group.memberCount} members)
                        </option>
                      ))}
                    </select>
                    {groups.length === 0 && (
                      <p className="mt-1 text-xs text-amber-400">No assigned project groups found.</p>
                    )}
                  </div>

                  {/* Date & Time */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.meetingdatetime}
                      onChange={(e) => setFormData({ ...formData, meetingdatetime: e.target.value })}
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all [color-scheme:dark]"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.meetinglocation}
                      onChange={(e) => setFormData({ ...formData, meetinglocation: e.target.value })}
                      required
                      placeholder="e.g., C-203, Lab 101, Conference Room A"
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <FileText className="w-4 h-4 text-purple-400" />
                      Purpose
                    </label>
                    <input
                      type="text"
                      value={formData.meetingpurpose}
                      onChange={(e) => setFormData({ ...formData, meetingpurpose: e.target.value })}
                      required
                      placeholder="e.g., Progress Review, Milestone Check, Final Presentation"
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Notes (Optional) */}
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Notes <span className="text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      value={formData.meetingnotes}
                      onChange={(e) => setFormData({ ...formData, meetingnotes: e.target.value })}
                      placeholder="Any additional instructions or topics to discuss..."
                      rows={3}
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1"
                      disabled={submitting}
                      leftIcon={submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                    >
                      {submitting ? 'Scheduling...' : 'Schedule Meeting'}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setShowScheduleModal(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
