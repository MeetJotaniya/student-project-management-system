'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Users,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Code,
  Github,
  ChevronRight,
  Sparkles,
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Menu,
  X,
  Search,
  Linkedin
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../../components/ui/Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const dashboardY = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-slate-950/70 backdrop-blur-2xl border-b border-white/5 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="md" variant="default" showText={true} />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Intelligence', 'Process'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-400 hover:text-white transition-all tracking-wide uppercase">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-colors">Sign In</Link>
            <Link href="/login" className="px-6 py-3 bg-white text-slate-950 rounded-2xl text-sm font-black hover:bg-indigo-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 uppercase tracking-tighter">
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-[0.2em] mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            2026 Academic Cycle Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-[ -0.05em] text-white leading-[0.85] mb-10"
          >
            THE ART OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 animate-gradient-x">MANAGEMENT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-slate-400 font-medium leading-relaxed mb-12"
          >
            A high-fidelity project management ecosystem built for elite universities.
            Automate tracking, empower faculty, and accelerate student success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link href="/login" className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-lg flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/40 group active:scale-95">
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-[#020617] bg-indigo-600 flex items-center justify-center text-[10px] font-bold">+2.4k</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Dashboard Shell - No Image, Pure Code */}
        <motion.div
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="max-w-6xl mx-auto mt-24 relative"
        >
          {/* Dashboard Frame */}
          <div className="bg-[#0f172a] rounded-[3rem] p-4 border border-white/10 shadow-[0_0_100px_rgba(79,70,229,0.15)] overflow-hidden group">
            <div className="bg-[#020617] rounded-[2.2rem] border border-white/5 aspect-[16/10] flex overflow-hidden">

              {/* Sidebar Shell */}
              <div className="w-20 md:w-64 border-r border-white/5 p-6 flex flex-col gap-8">
                <div className="flex gap-2 items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
                {[LayoutDashboard, Users, Calendar, Bot, ShieldCheck].map((Icon, i) => (
                  <div key={i} className={cn("flex items-center gap-4 px-4 py-3 rounded-2xl transition-all", i === 0 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-500")}>
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="hidden md:block h-3 w-24 bg-current opacity-20 rounded" />
                  </div>
                ))}
              </div>

              {/* Main Content Shell */}
              <div className="flex-1 p-8 overflow-hidden bg-gradient-to-br from-transparent to-indigo-500/[0.02]">
                <div className="flex justify-between items-center mb-12">
                  <div className="h-8 w-48 bg-white/5 rounded-xl animate-pulse" />
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10" />
                    <div className="w-40 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 hover:border-indigo-500/30 transition-all group/card overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-3 scale-0 group-hover/card:scale-100 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <div className="h-4 w-3/4 bg-white/10 rounded" />
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-5/6 bg-white/5 rounded" />
                      </div>
                      <div className="pt-4 flex justify-between items-center">
                        <div className="h-2 w-16 bg-emerald-500/20 rounded" />
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] h-64 overflow-hidden relative">
                  <div className="absolute inset-x-8 bottom-0 h-48 flex items-end gap-4">
                    {[65, 45, 75, 55, 90, 40, 60, 80, 50, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-xl opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Real-life Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 p-6 bg-slate-900 border border-indigo-500/30 rounded-[2rem] shadow-2xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Task Verified</div>
                  <div className="text-sm font-bold text-white">Project Milestone #4</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -left-12 p-6 bg-indigo-600 rounded-[2rem] shadow-2xl z-20 hidden lg:block"
            >
              <Users className="w-6 h-6 text-white mb-2" />
              <div className="text-[10px] font-black uppercase tracking-widest text-indigo-200">New Member</div>
              <div className="text-sm font-bold text-white">Alex Johnson Joined</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features - Minimalist & Bold */}
      <section id="features" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-indigo-500 font-black tracking-widest uppercase">The Ecosystem</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">BUILT FOR <br /> PERFORMANCE.</h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                We've stripped away the noise. Experience a tool that works at the speed of thought.
                Unified profiles, instant updates, and intelligent routing.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-black text-white mb-1">0.1s</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Latency Response</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">99.9%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime Record</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
              {[
                { title: 'Faculty Portal', icon: <Users />, desc: 'Elite management for mentors.' },
                { title: 'Student Hub', icon: <Code />, desc: 'Collaborative task tracking.' },
                { title: 'AI Assistant', icon: <Bot />, desc: 'Smart routing & assignment.' },
                { title: 'Milestones', icon: <CheckCircle2 />, desc: 'Verified goal tracking.' }
              ].map((f, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">{f.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-slate-500 italic">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" variant="default" showText={true} />
            </Link>
          </div>

          <div className="text-xs text-slate-600 font-bold tracking-widest uppercase">
            Designed for Excellence © 2026
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/MeetJotaniya" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/meet-jotaniya-74500432a" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
