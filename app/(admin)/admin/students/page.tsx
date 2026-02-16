'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import {
  ArrowLeft,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  User,
  Camera,
  Save,
  X,
  Loader2,
  MoreVertical,
  Filter
} from 'lucide-react';
import { addStudent, updateStudent, deleteStudent } from '../../../../lib/actions/admin';

interface Student {
  studentid: number;
  studentname: string;
  email: string;
  phone?: string | null;
  created?: Date | null;
}

export default function StudentManagementPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    studentname: '',
    email: '',
    phone: '',
    password: '',
    autoGenerate: true
  });

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'admin') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    fetchStudents();
  }, [router]);

  useEffect(() => {
    const filtered = students.filter(s =>
      s.studentname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchTerm, students]);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data.students || []);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setFormData({
      studentname: '',
      email: '',
      phone: '',
      password: '',
      autoGenerate: true
    });
    setShowForm(true);
  };

  const handleOpenEdit = (student: Student) => {
    setEditingStudent(student);
    setFormData({
      studentname: student.studentname,
      email: student.email,
      phone: student.phone || '',
      password: '',
      autoGenerate: false
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this student?')) return;

    const result = await deleteStudent(id);
    if (result.success) {
      setStudents(students.filter(s => s.studentid !== id));
      alert('Student deleted successfully');
    } else {
      alert(result.error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const data = {
      ...formData,
      registeredby: user.id
    };

    let result;
    if (editingStudent) {
      result = await updateStudent(editingStudent.studentid, data);
    } else {
      if (data.autoGenerate) {
        data.password = Math.random().toString(36).slice(-10);
      }
      result = await addStudent(data);
    }

    if (result.success) {
      alert(editingStudent ? 'Student updated successfully' : 'Student added successfully');
      setShowForm(false);
      fetchStudents();
    } else {
      alert(result.error);
    }
    setSubmitting(false);
  };

  if (loading && students.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-10">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-md sticky top-0 z-30 border-b border-slate-700/50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </button>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Student Directory
              </h1>
              <p className="text-xs text-slate-400">Total: {students.length} students</p>
            </div>
          </div>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Student
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all text-slate-400">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Table/List */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700/50">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.studentid} className="hover:bg-slate-700/20 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 transition-transform">
                            {student.studentname.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{student.studentname}</div>
                            <div className="text-xs text-slate-500">ID: SP-#{student.studentid}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">{student.email}</div>
                        <div className="text-xs text-slate-500">{student.phone || 'No phone'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">
                          {student.created ? new Date(student.created).toLocaleDateString() : 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleOpenEdit(student)}
                            className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-400 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(student.studentid)}
                            className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-slate-500">
                      {searchTerm ? 'No students match your search.' : 'No students found. Add your first student to get started.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Slide-over Form Overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowForm(false)}
          />
          <div className="relative w-full max-w-md bg-slate-900 border-l border-slate-700 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  {editingStudent ? 'Update Student Record' : 'Register New Student'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.studentname}
                    onChange={(e) => setFormData({ ...formData, studentname: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">PHONE NUMBER</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                  />
                </div>

                {!editingStudent && (
                  <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Auto-generate password</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, autoGenerate: !formData.autoGenerate })}
                        className={`w-10 h-5 rounded-full relative transition-colors ${formData.autoGenerate ? 'bg-blue-600' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${formData.autoGenerate ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>

                    {!formData.autoGenerate && (
                      <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">INITIAL PASSWORD</label>
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                    )}
                  </div>
                )}

                {editingStudent && (
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                    <p className="text-xs text-blue-400/80 leading-relaxed">
                      Leave password fields blank if you don't wish to reset it for this student.
                    </p>
                  </div>
                )}
              </form>

              <div className="p-6 border-t border-slate-700 bg-slate-800/20">
                <button
                  disabled={submitting}
                  onClick={handleSubmit}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingStudent ? 'Save Changes' : 'Create Student'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}