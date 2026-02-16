'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { getUserFromCookie } from '../../lib/auth';
import {
    GraduationCap,
    Users,
    FolderKanban,
    LayoutDashboard,
    Settings,
    LogOut,
    Sparkles,
    Search,
} from 'lucide-react';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import { Logo } from '../../components/ui/Logo';

export default function AdminLayout({
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
        if (!currentUser || currentUser.role !== 'admin') {
            router.push('/login');
            return;
        }
        setUser(currentUser);
        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        // Implement logout logic here
        document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    const navItems = [
        { label: 'Overview', icon: <LayoutDashboard />, href: '/admin/dashboard' },
        { label: 'Group Requests', icon: <FolderKanban />, href: '/admin/group-requests' },
        { label: 'Project Groups', icon: <FolderKanban />, href: '/admin/groups' },
        { label: 'Student Directory', icon: <Users />, href: '/admin/students' },
        { label: 'Faculty Roster', icon: <GraduationCap />, href: '/admin/faculty' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Sidebar - Premium Minimalist */}
            <aside className="fixed left-0 top-0 h-screen w-20 lg:w-72 bg-slate-900/50 backdrop-blur-2xl border-r border-white/5 z-50 flex flex-col p-6 transition-all duration-500">
                <div className="mb-12">
                    <Logo size="md" variant="default" showText={true} className="hidden lg:flex" />
                    <Logo size="md" variant="default" showText={false} className="flex lg:hidden" />
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${pathname === item.href
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : 'text-slate-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <span className="hidden lg:block font-bold text-sm tracking-wide">{item.label}</span>
                        </a>
                    ))}
                </nav>

                <div className="mt-auto space-y-2">
                    <button className="w-full flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                        <Settings className="w-6 h-6" />
                        <span className="hidden lg:block font-bold text-sm">Settings</span>
                    </button>
                    <button
                        onClick={() => setShowLogoutDialog(true)}
                        className="w-full flex items-center gap-4 px-4 py-3.5 text-red-500/70 hover:text-red-400 hover:bg-red-500/5 rounded-2xl transition-all"
                    >
                        <LogOut className="w-6 h-6" />
                        <span className="hidden lg:block font-bold text-sm">Sign Out</span>
                    </button>
                </div>
            </aside>

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

            {/* Main Content */}
            <main className="ml-20 lg:ml-72 min-h-screen p-8 lg:p-12 relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-indigo-400 text-xs font-black tracking-[0.2em] mb-2 uppercase"
                        >
                            <Sparkles className="w-3 h-3" />
                            Intelligence Dashboard
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Command Center<span className="text-indigo-500">.</span></h1>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-900/50 p-2 border border-white/5 rounded-3xl backdrop-blur-xl">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Global searching..."
                                className="bg-transparent pl-12 pr-4 py-3 outline-none text-sm font-medium w-48 lg:w-64 placeholder:text-slate-600"
                            />
                        </div>
                        <div className="w-px h-8 bg-white/5 hidden lg:block" />
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-black">AD</div>
                            <div className="hidden lg:block">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Admin</div>
                                <div className="text-xs font-bold text-white truncate max-w-[100px]">{user?.name}</div>
                            </div>
                        </div>
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
}
