'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { FolderKanban, FileCheck, Users } from 'lucide-react';
import { StatCard } from '../../../../components/ui/StatCard';
import { ProjectCard } from '../../../../components/dashboard/ProjectCard';
import { ApprovalCard } from '../../../../components/dashboard/ApprovalCard';
import { ScheduleCard } from '../../../../components/dashboard/ScheduleCard';
import { Project, ApprovalItem, ScheduleItem } from '../../../../types';

export default function FacultyDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalProjects: 0, reviewsDue: 0, activeStudents: 0 });
  const [projects, setProjects] = useState<Project[]>([]);
  const [approvals, setApprovals] = useState<ApprovalItem[]>([]);
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'faculty') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadDashboardData();
  }, [router]);

  const loadDashboardData = async () => {
    try {
      const [statsRes, projectsRes, approvalsRes, scheduleRes] = await Promise.all([
        fetch('/api/faculty/stats'),
        fetch('/api/faculty/projects'),
        fetch('/api/faculty/approvals'),
        fetch('/api/faculty/schedule')
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      if (projectsRes.ok) {
        const projectsData = await projectsRes.json();
        setProjects(projectsData);
      }

      if (approvalsRes.ok) {
        const approvalsData = await approvalsRes.json();
        setApprovals(approvalsData);
      }

      if (scheduleRes.ok) {
        const scheduleData = await scheduleRes.json();
        setSchedule(scheduleData);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-slate-400">Loading dashboard...</div>
    </div>
  );

  return (
    <>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          id="projects"
          label="Total Projects"
          value={stats.totalProjects.toString()}
          subtitle={`${projects.length} active`}
          icon={<FolderKanban className="w-8 h-8 text-blue-400" />}
        />
        <StatCard
          id="reviews"
          label="Reviews Due"
          value={stats.reviewsDue.toString()}
          subtitle="Action required"
          icon={<FileCheck className="w-8 h-8 text-orange-400" />}
        />
        <StatCard
          id="students"
          label="Active Students"
          value={stats.activeStudents.toString()}
          subtitle={`Across ${projects.length} teams`}
          icon={<Users className="w-8 h-8 text-green-400" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Projects */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">My Assigned Projects</h2>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              View All
              <span>→</span>
            </a>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={(id) => console.log('View project', id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
              <FolderKanban className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">No projects assigned yet</p>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          <ApprovalCard
            approvals={approvals}
            onApprove={(id) => console.log('Approve', id)}
            onReject={(id) => console.log('Reject', id)}
            onReview={(id) => console.log('Review', id)}
          />
          <ScheduleCard
            schedule={schedule}
            onViewFullCalendar={() => console.log('View calendar')}
          />
        </div>
      </div>
    </>
  );
}
