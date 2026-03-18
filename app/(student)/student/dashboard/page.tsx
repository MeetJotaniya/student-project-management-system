'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { PhaseProgress } from '../../../../components/dashboard/PhaseProgress';
import { ProjectDetailCard } from '../../../../components/dashboard/ProjectDetailCard';
import { ProfileImageUpload } from '../../../../components/profile/ProfileImageUpload';
import { Project } from '../../../../types';
import { FolderKanban, Clock, X } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [phases, setPhases] = useState<any[]>([]);
  const [requestStatus, setRequestStatus] = useState<any>(null);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'student') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadDashboardData();
  }, [router]);

  const loadDashboardData = async () => {
    try {
      const [projectRes, phasesRes, requestRes] = await Promise.all([
        fetch('/api/student/project'),
        fetch('/api/student/phases'),
        fetch('/api/groups/request-status')
      ]);

      if (projectRes.ok) {
        const projectData = await projectRes.json();
        setProject(projectData);
      }

      if (phasesRes.ok) {
        const phasesData = await phasesRes.json();
        setPhases(phasesData);
      }

      if (requestRes.ok) {
        const requestData = await requestRes.json();
        setRequestStatus(requestData);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/student/profile-image', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      throw new Error('Upload failed');
    }

    const data = await res.json();
    setUser({ ...user, profileImage: data.imageUrl });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Loading dashboard...</div>
      </div>
    );
  }

  if (!project) {
    // Check if there's a pending request
    if (requestStatus && requestStatus.status === 'pending') {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Clock className="w-16 h-16 text-orange-400 mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Group Request Pending</h2>
          <p className="text-slate-400 mb-2">Your group request "{requestStatus.groupName}" is waiting for admin approval.</p>
          <p className="text-sm text-slate-500">Submitted: {new Date(requestStatus.created).toLocaleDateString()}</p>
        </div>
      );
    }

    // Check if request was rejected
    if (requestStatus && requestStatus.status === 'rejected') {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <X className="w-16 h-16 text-red-400 mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Group Request Rejected</h2>
          <p className="text-slate-400 mb-2">Your group request "{requestStatus.groupName}" was rejected.</p>
          {requestStatus.rejectionReason && (
            <div className="bg-slate-800 border border-red-500/20 rounded-lg p-4 max-w-md mb-4">
              <p className="text-sm text-slate-300">{requestStatus.rejectionReason}</p>
            </div>
          )}
          <Button onClick={() => router.push('/student/create-group')} variant="primary">
            Submit New Request
          </Button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <FolderKanban className="w-16 h-16 text-slate-600 mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">No Project Group</h2>
        <p className="text-slate-400 mb-4">Create a project group to get started with your capstone project.</p>
        <div className="flex gap-3">
          <Button onClick={() => router.push('/student/create-group')} variant="primary">
            Create Group
          </Button>
          <Button onClick={() => router.push('/student/my-group')} variant="secondary">
            View Groups
          </Button>
        </div>
      </div>
    );
  }

  const currentPhase = phases.find(p => p.status === 'current');
  const overallProgress = project.progress || 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Header with Profile */}
        <div className="flex items-start gap-6">
          <ProfileImageUpload
            currentImage={user?.profileImage}
            userName={user?.name || 'Student'}
            onUpload={handleImageUpload}
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">Student Dashboard</h1>
            <p className="text-slate-400">
              Welcome back, {user?.name || 'Student'}. Here is the status of your capstone project.
            </p>
          </div>
        </div>

        {/* Current Phase */}
        <PhaseProgress
          currentPhase={currentPhase ? `Phase ${currentPhase.stepNumber}: ${currentPhase.label}` : 'Getting Started'}
          phases={phases}
          overallProgress={overallProgress}
        />

        {/* Project Details */}
        <ProjectDetailCard
          project={project}
          onViewDetails={() => router.push('/student/my-group')}
        />
      </div>
    </div>
  );
}
