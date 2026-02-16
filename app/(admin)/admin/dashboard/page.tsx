'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FolderKanban,
  Users,
  GraduationCap,
  FileText,
  Sparkles,
  BarChart3,
  Clock,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [statsData, setStatsData] = useState({ totalProjects: 0, totalStudents: 0, totalFaculty: 0, pendingProposals: 0 });
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsRes, activitiesRes] = await Promise.all([
          fetch('/api/admin/stats'),
          fetch('/api/admin/activity')
        ]);
        
        const stats = await statsRes.json();
        const activities = await activitiesRes.json();
        
        setStatsData(stats);
        setRecentActivities(activities);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    }
    loadData();
  }, []);
  const stats = [
    { label: 'Total Projects', value: statsData.totalProjects.toLocaleString(), change: '+12%', icon: <FolderKanban />, color: 'blue' },
    { label: 'Active Students', value: statsData.totalStudents.toLocaleString(), change: '+5%', icon: <Users />, color: 'indigo' },
    { label: 'Faculty Advisors', value: statsData.totalFaculty.toLocaleString(), change: '0%', icon: <GraduationCap />, color: 'emerald' },
    { label: 'Pending Proposals', value: statsData.pendingProposals.toLocaleString(), change: '-8%', icon: <FileText />, color: 'amber' },
  ];

  return (
    <div className="relative z-10 space-y-8">
      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] hover:bg-slate-900/50 hover:border-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-500`}>
                {stat.icon}
              </div>
              <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-indigo-400 border border-white/5">
                {stat.change}
              </div>
            </div>
            <div className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions & Welcome */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-600/20 group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <Sparkles className="w-32 h-32" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic leading-tight">Elite Oversight. <br />Universal Control.</h2>
            <p className="text-indigo-100/80 font-medium text-lg max-w-lg mb-8">
              Welcome back. You have {statsData.pendingProposals} urgent project approvals pending and high student activity in the current cycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Review Hub</button>
              <button className="px-8 py-4 bg-indigo-500/30 text-white border border-indigo-400/30 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl backdrop-blur-sm hover:bg-indigo-500/50 transition-all">View Analytics</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { label: 'Register New Student', desc: 'Onboard academic profiles', icon: <Users />, href: '/admin/students', color: 'bg-blue-600' },
            { label: 'Add Faculty Member', desc: 'Assign mentors & roles', icon: <Plus />, href: '/admin/faculty', color: 'bg-slate-800' },
          ].map((action, i) => (
            <Link
              key={i}
              href={action.href}
              className="w-full text-left p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] flex items-center gap-6 hover:bg-slate-900/50 hover:border-indigo-500/30 transition-all group block"
            >
              <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {action.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors tracking-tight">{action.label}</h4>
                <p className="text-sm text-slate-500 font-medium">{action.desc}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-slate-700 group-hover:text-indigo-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Activity Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[3rem]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              Recent Activity
            </h3>
            <button className="text-xs font-bold text-indigo-500 uppercase tracking-widest hover:text-indigo-400">View Logs</button>
          </div>
          <div className="space-y-6">
            {recentActivities.length > 0 ? recentActivities.map((act, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1.5 h-12 bg-indigo-500/20 rounded-full overflow-hidden">
                  <div className="w-full h-1/2 bg-indigo-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-tight">{act.user}</div>
                  <div className="text-xs text-slate-500 font-medium">{act.detail}</div>
                  <div className="text-[10px] text-indigo-500/60 font-black mt-1">{act.time}</div>
                </div>
              </div>
            )) : (
              <p className="text-slate-500 text-sm italic">No recent activity found.</p>
            )}
          </div>
        </div>

        <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 text-indigo-400" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">Detailed Reports</h3>
          <p className="text-sm text-slate-500 font-medium mb-8 max-w-xs">
            Generate high-fidelity semester audits and group performance datasets.
          </p>
          <button className="px-10 py-5 bg-white text-slate-950 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-indigo-500 hover:text-white transition-all">Download Audit</button>
        </div>
      </div>
    </div>
  );
}
