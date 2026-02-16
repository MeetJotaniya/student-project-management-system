'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getUserFromCookie } from '../../lib/auth';
import { MessageCircle, Plus, LogOut } from 'lucide-react';
import { TopNav } from '../../components/layout/TopNav';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import { Logo } from '../../components/ui/Logo';

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

    useEffect(() => {
        const currentUser = getUserFromCookie();
        if (!currentUser || currentUser.role !== 'student') {
            router.push('/login');
            return;
        }
        setUser(currentUser);
        setLoading(false);
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

    const logo = (
        <Logo size="md" variant="default" showText={true} />
    );

    const navItems = [
        { label: 'Dashboard', href: '/student/dashboard', active: pathname === '/student/dashboard' },
        { label: 'My Group', href: '/student/my-group', active: pathname === '/student/my-group' },
        { label: 'Create Group', href: '/student/create-group', active: pathname === '/student/create-group' },
        { label: 'Resources', href: '#' },
    ];

    const actions = (
        <>
            <Button
                variant="secondary"
                leftIcon={<MessageCircle className="w-4 h-4" />}
            >
                Contact Mentor
            </Button>
            <Button
                variant="primary"
                leftIcon={<Plus className="w-4 h-4" />}
            >
                New Deliverable
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
                searchPlaceholder="Search projects..."
                notificationCount={1}
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
        </div>
    );
}
