'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Users, Mail, Crown, Edit2, Check, X } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export default function MyGroupPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState<any>(null);
  const [editingMember, setEditingMember] = useState<number | null>(null);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'student') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadGroup();
  }, [router]);

  const loadGroup = async () => {
    try {
      const res = await fetch('/api/groups/my-group');
      if (res.ok) {
        const data = await res.json();
        setGroup(data);
      }
    } catch (error) {
      console.error('Error loading group:', error);
    } finally {
      setLoading(false);
    }
  };

  const startEditRole = (memberId: number, currentRole: string) => {
    setEditingMember(memberId);
    setNewRole(currentRole);
  };

  const saveRole = async (memberId: number) => {
    try {
      const res = await fetch('/api/groups/update-role', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, role: newRole })
      });

      if (res.ok) {
        await loadGroup();
        setEditingMember(null);
      } else {
        alert('Failed to update role');
      }
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update role');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Users className="w-16 h-16 text-slate-600 mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">No Group Yet</h2>
        <p className="text-slate-400 mb-4">You haven't created or joined a project group yet.</p>
        <Button onClick={() => router.push('/student/create-group')} variant="primary">
          Create Group
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{group.groupName}</h1>
          <p className="text-slate-400">{group.projectTitle}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Project Details</h2>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-400">Project Area</label>
            <p className="text-white">{group.projectArea}</p>
          </div>
          
          <div>
            <label className="text-sm text-slate-400">Description</label>
            <p className="text-white">{group.projectDescription}</p>
          </div>
          
          <div>
            <label className="text-sm text-slate-400 block mb-2">Technologies</label>
            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech: string) => (
                <span key={tech} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Assignment */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Faculty Assignment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <label className="text-sm text-slate-400 block mb-2">Convener</label>
            {group.hasConvener ? (
              <p className="text-white font-medium">{group.convener}</p>
            ) : (
              <p className="text-slate-500 italic">Not assigned yet</p>
            )}
          </div>
          
          <div className="bg-slate-700 rounded-lg p-4">
            <label className="text-sm text-slate-400 block mb-2">Expert</label>
            {group.hasExpert ? (
              <p className="text-white font-medium">{group.expert}</p>
            ) : (
              <p className="text-slate-500 italic">Not assigned yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Team Members ({group.members.length})</h2>
        
        <div className="space-y-3">
          {group.members.map((member: any) => (
            <div key={member.id} className="bg-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white">{member.name}</p>
                      {member.isLeader && (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {member.email}
                    </p>
                    
                    {editingMember === member.id ? (
                      <div className="flex items-center gap-2 mt-2">
                        <input
                          type="text"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          className="flex-1 px-3 py-1 bg-slate-600 border border-slate-500 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => saveRole(member.id)}
                          className="p-1 text-green-400 hover:text-green-300"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingMember(null)}
                          className="p-1 text-red-400 hover:text-red-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-slate-300">{member.role}</span>
                        {group.isLeader && !member.isLeader && (
                          <button
                            onClick={() => startEditRole(member.id, member.role)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
