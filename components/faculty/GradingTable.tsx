'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Edit2, Check, X, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '../ui/Button';

interface StudentGrade {
  id: number;
  studentId: number;
  studentName: string;
  email: string;
  role: string;
  phase1: string;
  phase2: string;
  phase3: string;
  finalGrade: string;
  progress: number;
  groupId?: number;
}

interface GradingTableProps {
  students: StudentGrade[];
  onSaveGrades: (grades: StudentGrade[]) => Promise<void>;
  editable?: boolean;
}

export const GradingTable: React.FC<GradingTableProps> = ({
  students: initialStudents,
  onSaveGrades,
  editable = true
}) => {
  const [students, setStudents] = useState(initialStudents);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const phaseStatuses = ['Not Completed', 'Partially Completed', 'Completed'];
  const finalGrades = ['-', 'A', 'B', 'C', 'D', 'F'];

  const calculateProgress = (p1: string, p2: string, p3: string) => {
    const getPoints = (status: string) => {
      if (status === 'Completed') return 1;
      if (status === 'Partially Completed') return 0.5;
      return 0;
    };
    const totalPoints = getPoints(p1) + getPoints(p2) + getPoints(p3);
    return Math.round((totalPoints / 3) * 100);
  };

  const updateStudentField = (id: number, field: keyof StudentGrade, value: string) => {
    setStudents(prev =>
      prev.map(student => {
        if (student.id === id) {
          const updated = { ...student, [field]: value };
          // Recalculate progress if a phase changed
          if (field.startsWith('phase')) {
            updated.progress = calculateProgress(updated.phase1, updated.phase2, updated.phase3);
          }
          return updated;
        }
        return student;
      })
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSaveGrades(students);
      setEditingId(null);
    } catch (error) {
      console.error('Failed to save grades:', error);
      alert('Failed to save grades');
    } finally {
      setSaving(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Partially Completed': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Not Completed': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-slate-500';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-700 flex items-center justify-between font-outfit">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Phase-Wise Evaluation</h2>
          <p className="text-sm text-slate-400">
            Track project progress through 3 phases and assign final grades
          </p>
        </div>
        {editable && (
          <Button
            onClick={handleSave}
            disabled={saving}
            variant="primary"
            leftIcon={<Save className="w-4 h-4" />}
          >
            {saving ? 'Saving...' : 'Save All Changes'}
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr className="font-outfit">
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                Phase 1 Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                Phase 2 Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                Phase 3 Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                Overall Progress
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                Final Grade
              </th>
              {editable && (
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {students.map((student, index) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="font-outfit">
                    <div className="font-bold text-white">{student.studentName}</div>
                    <div className="text-sm text-slate-400 font-mono">{student.email}</div>
                    <div className="inline-block mt-1 px-2 py-0.5 bg-slate-700/50 text-[10px] text-slate-300 rounded uppercase">
                      {student.role}
                    </div>
                  </div>
                </td>

                {['phase1', 'phase2', 'phase3'].map((phaseKey) => (
                  <td key={phaseKey} className="px-6 py-4">
                    {editingId === student.id && editable ? (
                      <select
                        value={student[phaseKey as keyof StudentGrade] as string}
                        onChange={(e) => updateStudentField(student.id, phaseKey as keyof StudentGrade, e.target.value)}
                        className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      >
                        {phaseStatuses.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    ) : (
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusColor(student[phaseKey as keyof StudentGrade] as string)} uppercase tracking-wider`}>
                        {student[phaseKey as keyof StudentGrade] as string}
                      </span>
                    )}
                  </td>
                ))}

                <td className="px-6 py-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-sm font-bold text-white">{student.progress}%</span>
                    <div className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  {editingId === student.id && editable ? (
                    <select
                      value={student.finalGrade}
                      onChange={(e) => updateStudentField(student.id, 'finalGrade', e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 text-center"
                    >
                      {finalGrades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  ) : (
                    <span className={`text-2xl font-bold font-outfit ${getGradeColor(student.finalGrade)}`}>
                      {student.finalGrade}
                    </span>
                  )}
                </td>

                {editable && (
                  <td className="px-6 py-4 text-center">
                    {editingId === student.id ? (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={async () => {
                            await handleSave();
                            setEditingId(null);
                          }}
                          className="p-1.5 hover:bg-green-500/20 rounded-lg transition-colors group"
                        >
                          <Check className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => {
                            setStudents(initialStudents);
                            setEditingId(null);
                          }}
                          className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors group"
                        >
                          <X className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingId(student.id)}
                        className="p-1.5 hover:bg-blue-500/20 rounded-lg transition-colors group"
                      >
                        <Edit2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                      </button>
                    )}
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Summary */}
      <div className="p-6 border-t border-slate-700 bg-slate-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Project Completion</p>
            <p className="text-2xl font-bold text-white font-outfit">
              {Math.round(students.reduce((sum, s) => sum + s.progress, 0) / students.length)}%
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Fully Completed</p>
            <p className="text-2xl font-bold text-green-400 font-outfit">
              {students.filter(s => s.progress === 100).length} <span className="text-xs text-slate-500 font-normal">Students</span>
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Grade Distribution</p>
            <div className="flex gap-1 items-center mt-1">
              {['A', 'B', 'C'].map(g => (
                <div key={g} className="text-xs font-bold text-blue-400 bg-blue-400/10 px-1.5 rounded">
                  {g}: {students.filter(s => s.finalGrade === g).length}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Active Trials</p>
            <p className="text-2xl font-bold text-orange-400 font-outfit">
              {students.filter(s => s.progress < 100).length} <span className="text-xs text-slate-500 font-normal">In Progress</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

