'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Users, Mail, Phone, User, FolderKanban } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudentData {
  studentId: number;
  studentName: string;
  email: string;
  phone: string;
  isLeader: boolean;
  cgpa: number | null;
}

interface GroupData {
  groupId: number;
  groupName: string;
  projectTitle: string;
  status: string;
  students: StudentData[];
}

export default function FacultyStudentsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<GroupData[]>([]);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'faculty') {
      router.push('/login');
      return;
    }
    loadStudentsData();
  }, [router]);

  const loadStudentsData = async () => {
    try {
      const res = await fetch('/api/faculty/students');
      if (res.ok) {
        const data = await res.json();
        setGroups(data);
      }
    } catch (error) {
      console.error('Error loading students data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Loading students...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Students</h1>
        <p className="text-slate-400">
          View all students assigned to your project groups.
        </p>
      </div>

      {groups.length === 0 ? (
        <div className="bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-700">
          <Users className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">No Students Assigned</h2>
          <p className="text-slate-400">You currently do not have any students or project groups assigned to you.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.groupId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Group Header */}
              <div className="bg-slate-800/80 p-5 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold font-outfit text-white flex items-center gap-2">
                    <FolderKanban className="w-5 h-5 text-blue-400" />
                    {group.groupName}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
                    <span className="font-medium text-slate-300">Project:</span> {group.projectTitle}
                  </p>
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {group.status}
                  </span>
                </div>
              </div>

              {/* Students Grid */}
              <div className="p-5">
                {group.students.length === 0 ? (
                  <p className="text-slate-500 text-sm italic">No students in this group yet.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.students.map(student => (
                      <div key={student.studentId} className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-slate-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-white truncate flex items-center gap-2">
                              {student.studentName}
                              {student.isLeader && (
                                <span className="px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 text-[10px] uppercase font-bold tracking-widest leading-none">
                                  Leader
                                </span>
                              )}
                            </h3>
                            
                            <div className="mt-2 space-y-1.5">
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                                <span className="truncate">{student.email}</span>
                              </div>
                              {student.phone && (
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                  <Phone className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                                  <span>{student.phone}</span>
                                </div>
                              )}
                            </div>
                            
                            {student.cgpa !== null && (
                              <div className="mt-3 text-xs font-medium bg-slate-900 inline-block px-2 py-1 rounded text-slate-300 border border-slate-700/50">
                                CGPA: <span className="text-white font-bold">{student.cgpa.toFixed(2)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
