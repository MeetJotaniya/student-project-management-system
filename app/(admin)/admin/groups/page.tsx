'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Users, UserCheck, UserX, Github, ExternalLink } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export default function AdminGroupsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<any[]>([]);
  const [faculty, setFaculty] = useState<any[]>([]);
  const [assigningGroup, setAssigningGroup] = useState<number | null>(null);
  const [selectedConvener, setSelectedConvener] = useState<number | undefined>();
  const [selectedExpert, setSelectedExpert] = useState<number | undefined>();

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'admin') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadData();
  }, [router]);

  const loadData = async () => {
    try {
      const [groupsRes, facultyRes] = await Promise.all([
        fetch('/api/admin/groups'),
        fetch('/api/admin/faculty')
      ]);

      if (groupsRes.ok) {
        const groupsData = await groupsRes.json();
        setGroups(Array.isArray(groupsData) ? groupsData : []);
      }

      if (facultyRes.ok) {
        const facultyData = await facultyRes.json();
        // Ensure faculty is an array
        if (Array.isArray(facultyData)) {
          setFaculty(facultyData);
        } else if (facultyData && Array.isArray(facultyData.faculty)) {
          setFaculty(facultyData.faculty);
        } else {
          console.error('Faculty data is not an array:', facultyData);
          setFaculty([]);
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setGroups([]);
      setFaculty([]);
    } finally {
      setLoading(false);
    }
  };

  const startAssigning = (group: any) => {
    setAssigningGroup(group.groupId);
    setSelectedConvener(group.hasConvener ? undefined : undefined);
    setSelectedExpert(group.hasExpert ? undefined : undefined);
  };

  const assignFaculty = async (groupId: number) => {
    try {
      const res = await fetch('/api/admin/assign-faculty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          groupId,
          convenerId: selectedConvener,
          expertId: selectedExpert
        })
      });

      if (res.ok) {
        alert('Faculty assigned successfully!');
        setAssigningGroup(null);
        loadData();
      } else {
        alert('Failed to assign faculty');
      }
    } catch (error) {
      console.error('Error assigning faculty:', error);
      alert('Failed to assign faculty');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Project Groups</h1>
        <p className="text-slate-400">Manage student groups and assign faculty advisors</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-2xl font-bold text-white">{groups.length}</p>
              <p className="text-sm text-slate-400">Total Groups</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <UserCheck className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">
                {groups.filter(g => g.hasConvener && g.hasExpert).length}
              </p>
              <p className="text-sm text-slate-400">Fully Assigned</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <UserX className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-2xl font-bold text-white">
                {groups.filter(g => !g.hasConvener || !g.hasExpert).length}
              </p>
              <p className="text-sm text-slate-400">Pending Assignment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        {groups.map(group => (
          <div key={group.groupId} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{group.groupName}</h3>
                <p className="text-slate-300 mb-2">{group.projectTitle}</p>
                <p className="text-sm text-slate-400 mb-3">{group.projectDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                    {group.projectArea}
                  </span>
                  {group.technologies.map((tech: string) => (
                    <span key={tech} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm flex-wrap">
                  <span className="text-slate-400">
                    <Users className="inline w-4 h-4 mr-1" />
                    {group.memberCount} members
                  </span>
                  <span className="text-slate-400">
                    Leader: {group.leaderName}
                  </span>
                  {group.githubUrl && (
                    <a
                      href={group.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {assigningGroup === group.groupId ? (
              <div className="bg-slate-700 rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Convener</label>
                    <select
                      value={selectedConvener || ''}
                      onChange={(e) => setSelectedConvener(e.target.value ? Number(e.target.value) : undefined)}
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Convener</option>
                      {Array.isArray(faculty) && faculty.map(f => (
                        <option key={f.staffid} value={f.staffid}>
                          {f.staffname}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Expert</label>
                    <select
                      value={selectedExpert || ''}
                      onChange={(e) => setSelectedExpert(e.target.value ? Number(e.target.value) : undefined)}
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Expert</option>
                      {Array.isArray(faculty) && faculty.map(f => (
                        <option key={f.staffid} value={f.staffid}>
                          {f.staffname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => assignFaculty(group.groupId)}
                    variant="primary"
                    className="flex-1"
                  >
                    Assign Faculty
                  </Button>
                  <Button
                    onClick={() => setAssigningGroup(null)}
                    variant="secondary"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-slate-700 rounded-lg p-4">
                <div className="flex gap-6">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Convener</label>
                    {group.hasConvener ? (
                      <p className="text-white font-medium">{group.convener}</p>
                    ) : (
                      <p className="text-slate-500 italic">Not assigned</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Expert</label>
                    {group.hasExpert ? (
                      <p className="text-white font-medium">{group.expert}</p>
                    ) : (
                      <p className="text-slate-500 italic">Not assigned</p>
                    )}
                  </div>
                </div>
                
                <Button
                  onClick={() => startAssigning(group)}
                  variant="secondary"
                >
                  {group.hasConvener && group.hasExpert ? 'Reassign' : 'Assign'} Faculty
                </Button>
              </div>
            )}
          </div>
        ))}

        {groups.length === 0 && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 text-center">
            <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No groups created yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
