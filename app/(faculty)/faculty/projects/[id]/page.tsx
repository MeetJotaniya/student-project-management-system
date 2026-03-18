'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Users,
    Calendar,
    FileText,
    TrendingUp,
    CheckCircle2,
    Clock,
    MapPin,
    ArrowLeft,
    Plus,
    Github,
    ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';

export default function ProjectDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [evalGrades, setEvalGrades] = useState({
        phase1: 'Not Completed',
        phase2: 'Not Completed',
        phase3: 'Not Completed',
        finalGrade: '-'
    });

    const phaseStatuses = ['Not Completed', 'Partially Completed', 'Completed'];
    const finalGrades = ['-', 'A', 'B', 'C', 'D', 'F'];

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const res = await fetch(`/api/faculty/projects/${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setProject(data);
                } else {
                    router.push('/faculty/dashboard');
                }
            } catch (error) {
                console.error('Error fetching project details:', error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchProjectDetails();
        }
    }, [params.id, router]);

    useEffect(() => {
        if (project?.grades) {
            setEvalGrades(project.grades);
        }
    }, [project]);

    const handleSaveGrades = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/faculty/grading', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grades: [{
                        groupId: project.id,
                        phase1: evalGrades.phase1,
                        phase2: evalGrades.phase2,
                        phase3: evalGrades.phase3,
                        finalGrade: evalGrades.finalGrade
                    }]
                })
            });
            if (!res.ok) throw new Error('Failed to save grades');
            
            // Re-fetch project to update progress bar
            const refreshRes = await fetch(`/api/faculty/projects/${params.id}`);
            if (refreshRes.ok) {
                const data = await refreshRes.json();
                setProject(data);
            }
        } catch (error) {
            console.error('Error saving grades:', error);
            alert('Failed to save grades');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    Loading project details...
                </div>
            </div>
        );
    }

    if (!project) return null;

    return (
        <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>

            {/* Header Section */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Badge variant="info">{project.status?.toUpperCase() || 'ACTIVE'}</Badge>
                                <span className="text-slate-500 font-mono text-sm">#{project.id}</span>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
                            <p className="text-slate-400 max-w-2xl mb-4">{project.description}</p>
                            
                            {project.technologies && project.technologies !== 'Not specified' && (
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                    <span className="text-sm font-medium text-slate-500 mr-1">Technologies:</span>
                                    {project.technologies.split(',').map((tech: string, i: number) => (
                                        <Badge key={i} className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs">
                                            {tech.trim()}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Progress</p>
                                <p className="text-3xl font-bold text-white">{project.progress}%</p>
                            </div>
                            <div className="w-16 h-16">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        className="text-slate-700"
                                        strokeDasharray="100, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className="text-blue-500"
                                        strokeDasharray={`${project.progress}, 100`}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                <Users className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Team Name</p>
                                <p className="text-white font-medium">{project.team}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Project Area</p>
                                <p className="text-white font-medium">{project.area || 'General'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Project Type</p>
                                <p className="text-white font-medium">{project.type || 'Standard'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <Users className="w-5 h-5 text-orange-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Members</p>
                                <p className="text-white font-medium">{project.members} Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Subject Description */}
                    {project.subjectDescription && project.subjectDescription !== project.description && (
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-slate-400" />
                                Subject Description
                            </h2>
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{project.subjectDescription}</p>
                            </div>
                        </section>
                    )}

                    {/* GitHub Repository */}
                    {project.githubUrl && (
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Github className="w-5 h-5 text-slate-400" />
                                Repository
                            </h2>
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    <Github className="w-8 h-8 text-slate-400 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="text-sm text-slate-400">GitHub Repository</p>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 truncate block"
                                        >
                                            {project.githubUrl}
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors flex-shrink-0"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Open
                                </a>
                            </div>
                        </section>
                    )}

                    {/* Team Members */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            Team Members
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.teamMembers?.map((member: any) => (
                                <div key={member.id} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-white font-bold">{member.name}</p>
                                                {member.isLeader && <Badge variant="info" className="text-[10px] py-0 px-1.5 h-5 flex items-center">LEADER</Badge>}
                                            </div>
                                            <p className="text-sm text-slate-400">{member.email}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-700/50">
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Contact</p>
                                            <p className="text-sm text-slate-300">{member.phone !== 'N/A' ? member.phone : 'Not provided'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">CGPA</p>
                                            <p className="text-sm font-bold text-blue-400">{member.cgpa}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Recent Meetings */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-green-400" />
                                Scheduled Meetings
                            </h2>
                            <Button
                                variant="secondary"
                                size="sm"
                                leftIcon={<Plus className="w-4 h-4" />}
                                onClick={() => router.push('/faculty/calendar')}
                            >
                                Schedule Meeting
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {project.meetings?.length > 0 ? (
                                project.meetings.map((meeting: any) => (
                                    <div key={meeting.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-700 rounded-lg flex flex-col items-center justify-center text-[10px] font-bold">
                                                <span className="text-blue-400 uppercase">{new Date(meeting.date).toLocaleString('default', { month: 'short' })}</span>
                                                <span className="text-white text-base leading-none">{new Date(meeting.date).getDate()}</span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{meeting.purpose}</p>
                                                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {meeting.time}</span>
                                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {meeting.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Badge variant={meeting.status === 'completed' ? 'success' : 'info'}>
                                            {meeting.status.toUpperCase()}
                                        </Badge>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 bg-slate-800/30 border border-dashed border-slate-700 rounded-xl">
                                    <p className="text-slate-500">No meetings scheduled for this team.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Inline Grading */}
                    <Card className="bg-slate-900 border-slate-700">
                        <CardContent>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    Project Evaluation
                                </h3>
                            </div>
                            
                            <div className="space-y-4">
                                {['phase1', 'phase2', 'phase3'].map((phase, idx) => (
                                    <div key={phase}>
                                        <label className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1.5 block">
                                            Phase {idx + 1} Status
                                        </label>
                                        <select
                                            value={evalGrades[phase as keyof typeof evalGrades]}
                                            onChange={(e) => setEvalGrades({ ...evalGrades, [phase]: e.target.value })}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {phaseStatuses.map(status => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}

                                <div className="pt-2 border-t border-slate-700/50">
                                    <label className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1.5 block">
                                        Final Grade
                                    </label>
                                    <select
                                        value={evalGrades.finalGrade}
                                        onChange={(e) => setEvalGrades({ ...evalGrades, finalGrade: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {finalGrades.map(grade => (
                                            <option key={grade} value={grade}>{grade}</option>
                                        ))}
                                    </select>
                                </div>

                                <Button
                                    onClick={handleSaveGrades}
                                    disabled={saving}
                                    className="w-full mt-4"
                                    variant="primary"
                                >
                                    {saving ? 'Saving...' : 'Save Evaluation'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Progress Timeline */}
                    <Card className="bg-slate-900 border-slate-700">
                        <CardContent>
                            <h3 className="text-lg font-bold text-white mb-6">Project Timeline</h3>
                            <div className="space-y-6 relative">
                                {/* Connector Line */}
                                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-800"></div>

                                {[
                                    { label: 'Proposal Approved', status: 'completed' },
                                    { label: 'Requirements Analysis', status: project.progress >= 20 ? 'completed' : 'current' },
                                    { label: 'Design Phase', status: project.progress >= 40 ? 'completed' : project.progress >= 20 ? 'current' : 'upcoming' },
                                    { label: 'Development', status: project.progress >= 60 ? 'completed' : project.progress >= 40 ? 'current' : 'upcoming' },
                                    { label: 'Testing & QA', status: project.progress >= 80 ? 'completed' : project.progress >= 60 ? 'current' : 'upcoming' },
                                    { label: 'Final Submission', status: project.progress === 100 ? 'completed' : project.progress >= 80 ? 'current' : 'upcoming' }
                                ].map((phase, i) => (
                                    <div key={i} className="flex items-start gap-4 relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${phase.status === 'completed' ? 'bg-green-500 text-white' :
                                            phase.status === 'current' ? 'bg-blue-600 text-white ring-4 ring-blue-600/20' :
                                                'bg-slate-800 text-slate-500'
                                            }`}>
                                            {phase.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <span>{i + 1}</span>}
                                        </div>
                                        <div>
                                            <p className={`font-medium ${phase.status === 'upcoming' ? 'text-slate-500' : 'text-white'}`}>
                                                {phase.label}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {phase.status === 'completed' ? 'Phase Done' : phase.status === 'current' ? 'In Progress' : 'Pending'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
