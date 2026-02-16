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
  Shield,
  User,
  Camera,
  Save,
  X,
  Loader2,
  GraduationCap,
  Briefcase,
  Mail,
  Phone
} from 'lucide-react';
import { addFaculty, updateFaculty, deleteFaculty } from '../../../../lib/actions/admin';

interface Faculty {
  staffid: number;
  staffname: string;
  email: string;
  phone?: string | null;
  role: string | null;
  description?: string | null;
  created?: Date | null;
}

export default function FacultyManagementPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [filteredFaculty, setFilteredFaculty] = useState<Faculty[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    staffname: '',
    email: '',
    phone: '',
    role: 'faculty',
    description: '',
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
    fetchFaculty();
  }, [router]);

  useEffect(() => {
    const filtered = faculty.filter(f =>
      f.staffname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (f.role && f.role.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredFaculty(filtered);
  }, [searchTerm, faculty]);

  const fetchFaculty = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/faculty');
      if (response.ok) {
        const data = await response.json();
        setFaculty(data.faculty || []);
      }
    } catch (error) {
      console.error('Error fetching faculty:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingFaculty(null);
    setFormData({
      staffname: '',
      email: '',
      phone: '',
      role: 'faculty',
      description: '',
      password: '',
      autoGenerate: true
    });
    setShowForm(true);
  };

  const handleOpenEdit = (member: Faculty) => {
    setEditingFaculty(member);
    setFormData({
      staffname: member.staffname,
      email: member.email,
      phone: member.phone || '',
      role: member.role || 'faculty',
      description: member.description || '',
      password: '',
      autoGenerate: false
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    const result = await deleteFaculty(id);
    if (result.success) {
      setFaculty(faculty.filter(f => f.staffid !== id));
      alert('Faculty member deleted successfully');
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
    if (editingFaculty) {
      result = await updateFaculty(editingFaculty.staffid, data);
    } else {
      if (data.autoGenerate) {
        data.password = Math.random().toString(36).slice(-10);
      }
      result = await addFaculty(data);
    }

    if (result.success) {
      alert(editingFaculty ? 'Profile updated successfully' : 'Faculty member registered successfully');
      setShowForm(false);
      fetchFaculty();
    } else {
      alert(result.error);
    }
    setSubmitting(false);
  };

  if (loading && faculty.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-10">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-xl sticky top-0 z-30 border-b border-indigo-500/10 px-6 py-4">
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
                Faculty Roster
              </h1>
              <p className="text-xs text-slate-500">Managing {faculty.length} staff members</p>
            </div>
          </div>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Register Staff
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Search & Stats */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            <input
              type="text"
              placeholder="Search faculty by name, email or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((member) => (
              <div
                key={member.staffid}
                className="group relative bg-slate-800/30 border border-slate-700/40 rounded-3xl p-6 hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold group-hover:scale-105 transition-transform duration-500">
                    {member.staffname.charAt(0)}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleOpenEdit(member)}
                      className="p-2 hover:bg-indigo-500/10 rounded-xl text-slate-400 hover:text-indigo-400 transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(member.staffid)}
                      className="p-2 hover:bg-red-500/10 rounded-xl text-slate-400 hover:text-red-400 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                    {member.staffname}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-indigo-500/10">
                      {member.role || 'Staff'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-700/40">
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors group/item">
                    <Mail className="w-4 h-4 group-hover/item:text-indigo-400" />
                    <span className="text-xs truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors group/item">
                    <Phone className="w-4 h-4 group-hover/item:text-indigo-400" />
                    <span className="text-xs">{member.phone || 'N/A'}</span>
                  </div>
                </div>

                {member.description && (
                  <p className="mt-4 text-xs text-slate-500 italic line-clamp-2 leading-relaxed">
                    "{member.description}"
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-slate-800/20 rounded-3xl border border-dashed border-slate-700/50">
              <GraduationCap className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-slate-400 font-medium">No results found</h3>
              <p className="text-slate-600 text-xs mt-1">Refine your search or add a new faculty member</p>
            </div>
          )}
        </div>
      </main>

      {/* Form Slide-over */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity" onClick={() => setShowForm(false)} />
          <div className="relative w-full max-w-lg bg-slate-900 border-l border-indigo-500/10 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-right duration-500">
            {/* Form Header */}
            <div className="p-8 border-b border-indigo-500/10 flex items-center justify-between bg-indigo-600/5">
              <div>
                <h2 className="text-2xl font-black italic tracking-tighter">
                  {editingFaculty ? 'MODIFY PROFILE' : 'NEW REGISTRATION'}
                </h2>
                <p className="text-xs text-indigo-400 font-bold tracking-widest uppercase">Faculty Member Data</p>
              </div>
              <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-800 rounded-2xl transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-black text-indigo-400 mb-2 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.staffname}
                    onChange={(e) => setFormData({ ...formData, staffname: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl focus:border-indigo-500 focus:bg-slate-800 outline-none transition-all font-semibold"
                    placeholder="e.g. Dr. Robert Smith"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-indigo-400 mb-2 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl focus:border-indigo-500 focus:bg-slate-800 outline-none transition-all font-semibold"
                    placeholder="name@university.edu"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-indigo-400 mb-2 uppercase tracking-widest">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl focus:border-indigo-500 focus:bg-slate-800 outline-none transition-all font-semibold"
                      placeholder="+1 (555) 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-indigo-400 mb-2 uppercase tracking-widest">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl focus:border-indigo-500 focus:bg-slate-800 outline-none transition-all font-bold appearance-none cursor-pointer"
                    >
                      <option value="faculty">Faculty</option>
                      <option value="admin">Admin</option>
                      <option value="coordinator">Coordinator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-indigo-400 mb-2 uppercase tracking-widest">Expertise / Description</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-2xl focus:border-indigo-500 focus:bg-slate-800 outline-none transition-all font-medium resize-none"
                    placeholder="Areas of interest, research groups..."
                  />
                </div>

                {!editingFaculty && (
                  <div className="p-6 bg-indigo-600/5 border-2 border-indigo-500/10 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="block text-sm font-bold">Secure Access</span>
                        <span className="block text-xs text-indigo-400/60 font-medium">Auto-generate a secure password</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, autoGenerate: !formData.autoGenerate })}
                        className={`w-14 h-7 rounded-full relative transition-all duration-300 ${formData.autoGenerate ? 'bg-indigo-600' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${formData.autoGenerate ? 'left-8' : 'left-2'}`} />
                      </button>
                    </div>

                    {!formData.autoGenerate && (
                      <div className="animate-in zoom-in-95 fade-in duration-300">
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl focus:border-indigo-500 outline-none font-bold"
                          placeholder="Assign Secret Password"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>

            <div className="p-8 border-t border-indigo-500/10 bg-slate-800/20 backdrop-blur-3xl">
              <button
                disabled={submitting}
                onClick={handleSubmit}
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white rounded-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-600/30 active:scale-[0.97]"
              >
                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                {editingFaculty ? 'Update Roster' : 'Register Member'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}