'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { FolderKanban, Users, Activity, Layers, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectData {
  id: number;
  title: string;
  status: string;
  progress: number;
  members: number;
  icon: string;
  iconColor: string;
  description: string;
  area: string;
  type: string;
}

export default function FacultyProjectsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'faculty') {
      router.push('/login');
      return;
    }
    loadProjectsData();
  }, [router]);

  const loadProjectsData = async () => {
    try {
      const res = await fetch('/api/faculty/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error loading projects data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'approved':
        return 'text-green-400 border-green-400/20 bg-green-400/10';
      case 'pending':
        return 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10';
      case 'completed':
        return 'text-blue-400 border-blue-400/20 bg-blue-400/10';
      default:
        return 'text-slate-400 border-slate-400/20 bg-slate-400/10';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400 animate-pulse">Loading assigned projects...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2 tracking-tight">Assigned Projects</h1>
          <p className="text-slate-400 max-w-2xl">
            Overview of all project groups where you act as a Convener or Expert Guide.
          </p>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-outfit">{projects.length}</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Total Projects</div>
          </div>
          <div className="w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 font-outfit">
              {projects.filter(p => p.status.toLowerCase() === 'active').length}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Active Projects</div>
          </div>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="bg-slate-800/50 rounded-3xl p-12 text-center border border-slate-700/50">
          <FolderKanban className="w-16 h-16 text-slate-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold font-outfit text-white mb-3">No Projects Assigned</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            You currently do not have any projects assigned to you. Once students form groups and you are assigned as an expert or convener, they will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link href={`/faculty/projects/${project.id}`}>
                <div className="group bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col">
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="flex justify-between items-start gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-inner flex-shrink-0 ${project.iconColor || 'bg-blue-600'}`}>
                        {project.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="mt-5 relative z-10">
                      <h3 className="text-xl font-bold font-outfit text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      {project.area && (
                        <p className="text-sm text-slate-400 font-medium flex items-center gap-1.5 line-clamp-1">
                          <Layers className="w-3.5 h-3.5 text-blue-500/70" /> {project.area}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
                      {project.description || 'No description provided for this project.'}
                    </p>

                    <div className="mt-auto space-y-6">
                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <Users className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Members</span>
                          </div>
                          <div className="text-lg font-bold text-white font-outfit">{project.members}</div>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <Activity className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Type</span>
                          </div>
                          <div className="text-sm font-bold text-white font-outfit truncate" title={project.type || 'Undefined'}>
                            {project.type || 'Undefined'}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                          <span className="text-slate-500">Progress</span>
                          <span className="text-white">{Math.round(project.progress)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-slate-800/30 border-t border-slate-800 flex justify-between items-center group-hover:bg-slate-800/50 transition-colors">
                    <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Updated Recently
                    </div>
                    <div className="text-sm font-bold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Details <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
