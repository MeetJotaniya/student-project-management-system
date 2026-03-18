'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getUserFromCookie } from '../../lib/auth';
import { MessageCircle, LogOut, Bell } from 'lucide-react';
import { TopNav } from '../../components/layout/TopNav';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import { Logo } from '../../components/ui/Logo';
import { NotificationPanel } from '../../components/notifications/NotificationPanel';
import { ContactMentorModal } from '../../components/modals/ContactMentorModal';

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showContactMentor, setShowContactMentor] = useState(false);
    const [notifications, setNotifications] = useState<any[]>([]);
    const [mentorInfo, setMentorInfo] = useState<any>(null);

    useEffect(() => {
        const performAuthCheck = () => {
            const currentUser = getUserFromCookie();
            if (currentUser && currentUser.role === 'student') {
                setUser(currentUser);
                loadNotifications();
                loadMentorInfo();
                setLoading(false);
                return;
            }
            // Retry once after short delay (handles cookie availability on page refresh)
            const timeoutId = setTimeout(() => {
                const retryUser = getUserFromCookie();
                if (retryUser && retryUser.role === 'student') {
                    setUser(retryUser);
                    loadNotifications();
                    loadMentorInfo();
                } else {
                    router.push('/login');
                }
                setLoading(false);
            }, 150);
            return () => clearTimeout(timeoutId);
        };
        return performAuthCheck();
    }, [router]);

    const loadNotifications = async () => {
        try {
            const res = await fetch('/api/student/notifications');
            if (res.ok) {
                const data = await res.json();
                setNotifications(data);
            }
        } catch (error) {
            console.error('Error loading notifications:', error);
        }
    };

    const loadMentorInfo = async () => {
        try {
            const res = await fetch('/api/student/project');
            if (res.ok) {
                const project = await res.json();
                if (project?.convener) {
                    // Fetch full staff details
                    const staffRes = await fetch(`/api/student/mentor-info`);
                    if (staffRes.ok) {
                        const mentorData = await staffRes.json();
                        setMentorInfo(mentorData);
                    } else {
                        // Fallback to basic info from project
                        setMentorInfo({
                            name: project.convener,
                            email: `${project.convener.toLowerCase().replace(/\s+/g, '.')}@university.edu`,
                            phone: '+1 234 567 8900',
                            office: 'Room 304, CS Building',
                            officeHours: 'Mon-Fri, 2:00 PM - 4:00 PM',
                            role: 'Project Convener'
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error loading mentor info:', error);
        }
    };

    const handleClearNotifications = async () => {
        try {
            await fetch('/api/student/notifications', { method: 'DELETE' });
            setNotifications([]);
        } catch (error) {
            console.error('Error clearing notifications:', error);
        }
    };

    const handleMarkAsRead = async (id: string) => {
        try {
            await fetch('/api/student/notifications', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notificationId: id })
            });
            setNotifications(prev =>
                prev.filter(n => n.id !== id)
            );
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    const handleLogout = () => {
        document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    const logo = (
        <Logo size="md" variant="default" showText={true} />
    );

    const navItems = [
        { label: 'Dashboard', href: '/student/dashboard', active: pathname === '/student/dashboard' },
        { label: 'My Group', href: '/student/my-group', active: pathname === '/student/my-group' },
        { label: 'Calendar', href: '/student/calendar', active: pathname === '/student/calendar' },
        { label: 'Create Group', href: '/student/create-group', active: pathname === '/student/create-group' },
        { label: 'Resources', href: '/student/resources', active: pathname === '/student/resources' },
        { label: 'Settings', href: '/student/settings', active: pathname === '/student/settings' },
    ];

    const actions = (
        <>
            <button
                onClick={() => setShowNotifications(true)}
                className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
                <Bell className="w-5 h-5 text-slate-400" />
                {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
            </button>
            <Button
                variant="secondary"
                leftIcon={<MessageCircle className="w-4 h-4" />}
                onClick={() => setShowContactMentor(true)}
            >
                Contact Mentor
            </Button>
            <Button
                variant="secondary"
                leftIcon={<LogOut className="w-4 h-4" />}
                onClick={() => setShowLogoutDialog(true)}
            >
                Sign Out
            </Button>
        </>
    );

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <TopNav
                logo={logo}
                navItems={navItems}
                // searchPlaceholder="Search projects..."
                showNotificationBell={false}
                user={{ name: user?.name || 'Student' }}
                actions={actions}
            />

            <main className="p-6">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>

            {/* Logout Confirmation Dialog */}
            <ConfirmDialog
                isOpen={showLogoutDialog}
                onClose={() => setShowLogoutDialog(false)}
                onConfirm={handleLogout}
                title="Sign Out"
                message="Are you sure you want to sign out? You'll need to log in again to access your account."
                confirmText="Sign Out"
                cancelText="Stay Logged In"
                variant="warning"
            />

            {/* Notification Panel */}
            <NotificationPanel
                isOpen={showNotifications}
                onClose={() => setShowNotifications(false)}
                notifications={notifications}
                onClearAll={handleClearNotifications}
                onMarkAsRead={handleMarkAsRead}
            />

            {/* Contact Mentor Modal */}
            <ContactMentorModal
                isOpen={showContactMentor}
                onClose={() => setShowContactMentor(false)}
                mentor={mentorInfo}
            />
        </div>
    );
}
