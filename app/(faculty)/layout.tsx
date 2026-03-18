'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getUserFromCookie } from '../../lib/auth';
import { LayoutDashboard, FolderKanban, Users, FileCheck, Settings, CalendarDays } from 'lucide-react';
import { Sidebar } from '../../components/layout/Sidebar';
import { Header } from '../../components/layout/Header';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import { Logo } from '../../components/ui/Logo';

export default function FacultyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    useEffect(() => {
        const performAuthCheck = () => {
            const currentUser = getUserFromCookie();
            if (currentUser && currentUser.role === 'faculty') {
                setUser(currentUser);
                setLoading(false);
                return;
            }
            const timeoutId = setTimeout(() => {
                const retryUser = getUserFromCookie();
                if (retryUser && retryUser.role === 'faculty') {
                    setUser(retryUser);
                } else {
                    router.push('/login');
                }
                setLoading(false);
            }, 150);
            return () => clearTimeout(timeoutId);
        };
        return performAuthCheck();
    }, [router]);

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

    const sidebarItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <LayoutDashboard className="w-5 h-5" />,
            href: '/faculty/dashboard',
            active: pathname === '/faculty/dashboard',
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: <FolderKanban className="w-5 h-5" />,
            href: '/faculty/projects',
            active: pathname.startsWith('/faculty/projects'),
        },
        {
            id: 'students',
            label: 'Students',
            icon: <Users className="w-5 h-5" />,
            href: '/faculty/students',
            active: pathname.startsWith('/faculty/students'),
        },
        {
            id: 'calendar',
            label: 'Calendar',
            icon: <CalendarDays className="w-5 h-5" />,
            href: '/faculty/calendar',
            active: pathname === '/faculty/calendar',
        },
        {
            id: 'grading',
            label: 'Grading',
            icon: <FileCheck className="w-5 h-5" />,
            href: '/faculty/grading',
            active: pathname === '/faculty/grading',
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: <Settings className="w-5 h-5" />,
            href: '/faculty/settings',
            active: pathname === '/faculty/settings',
        },
    ];

    const logo = (
        <Logo size="sm" variant="default" showText={true} />
    );

    return (
        <div className="min-h-screen bg-slate-900 text-white flex">
            <Sidebar
                logo={logo}
                user={{
                    name: user?.name || 'Dr. Richards',
                    department: 'Comp. Sci. Dept.',
                    email: user?.email,
                }}
                items={sidebarItems}
                onSignOut={() => setShowLogoutDialog(true)}
            />

            <div className="flex-1 flex flex-col">
                <Header
                    title="Project Overview"
                    subtitle="Manage student submissions and track progress."
                    searchPlaceholder="Search projects, students..."
                    showNotifications
                    notificationCount={1}
                    user={{ name: user?.name || 'Dr. Richards' }}
                />

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

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
        </div>
    );
}
