'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Users, Search, X, Plus, Check } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

interface Student {
  studentid: number;
  studentname: string;
  email: string;
}

interface GroupMember {
  studentId: number;
  name: string;
  email: string;
  role: string;
}

const TECHNOLOGY_OPTIONS = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'Flutter', 'React Native',
  'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', '.NET',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Azure',
  'Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'Swift'
];

export default function CreateGroupPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [availableStudents, setAvailableStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<GroupMember[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [customTech, setCustomTech] = useState('');
  
  const [formData, setFormData] = useState({
    groupName: '',
    projectTitle: '',
    projectDescription: '',
    projectArea: ''
  });

  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'student') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadAvailableStudents();
  }, [router]);

  const loadAvailableStudents = async () => {
    try {
      const res = await fetch('/api/groups/available-students');
      if (res.ok) {
        const students = await res.json();
        setAvailableStudents(students);
      }
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = availableStudents.filter(student =>
    student.studentname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMember = (student: Student) => {
    if (selectedMembers.length >= 3) {
      alert('Maximum 3 additional members allowed (4 total including you)');
      return;
    }
    
    setSelectedMembers([...selectedMembers, {
      studentId: student.studentid,
      name: student.studentname,
      email: student.email,
      role: 'Developer'
    }]);
    setSearchTerm('');
  };

  const removeMember = (studentId: number) => {
    setSelectedMembers(selectedMembers.filter(m => m.studentId !== studentId));
  };

  const updateMemberRole = (studentId: number, role: string) => {
    setSelectedMembers(selectedMembers.map(m =>
      m.studentId === studentId ? { ...m, role } : m
    ));
  };

  const toggleTechnology = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    }
  };

  const addCustomTechnology = () => {
    if (customTech.trim() && !selectedTechnologies.includes(customTech.trim())) {
      setSelectedTechnologies([...selectedTechnologies, customTech.trim()]);
      setCustomTech('');
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.groupName.trim()) newErrors.groupName = 'Group name is required';
    if (!formData.projectTitle.trim()) newErrors.projectTitle = 'Project title is required';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Description is required';
    if (!formData.projectArea.trim()) newErrors.projectArea = 'Project area is required';
    if (selectedMembers.length < 1) newErrors.members = 'At least 2 members required (including you)';
    if (selectedTechnologies.length === 0) newErrors.technologies = 'Select at least one technology';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/groups/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          groupName: formData.groupName,
          projectTitle: formData.projectTitle,
          projectDescription: formData.projectDescription,
          projectArea: formData.projectArea,
          technologies: selectedTechnologies,
          members: selectedMembers.map(m => ({
            studentId: m.studentId,
            role: m.role
          }))
        })
      });

      if (res.ok) {
        const data = await res.json();
        alert(data.message || 'Group request submitted successfully! Waiting for admin approval.');
        router.push('/student/dashboard');
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to submit group request');
      }
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Failed to create group');
    } finally {
      setSubmitting(false);
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
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create Project Group Request</h1>
        <p className="text-slate-400">Submit a request to form a team of 2-4 students. Admin approval required.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Group Info */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Group Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Group Name</label>
              <input
                type="text"
                value={formData.groupName}
                onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Team Alpha"
              />
              {errors.groupName && <p className="text-red-400 text-sm mt-1">{errors.groupName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Title</label>
              <input
                type="text"
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., AI-Powered Traffic Management System"
              />
              {errors.projectTitle && <p className="text-red-400 text-sm mt-1">{errors.projectTitle}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Area</label>
              <input
                type="text"
                value={formData.projectArea}
                onChange={(e) => setFormData({ ...formData, projectArea: e.target.value })}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Machine Learning, Web Development"
              />
              {errors.projectArea && <p className="text-red-400 text-sm mt-1">{errors.projectArea}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Description</label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project..."
              />
              {errors.projectDescription && <p className="text-red-400 text-sm mt-1">{errors.projectDescription}</p>}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Technologies</h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {TECHNOLOGY_OPTIONS.map(tech => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTechnology(tech)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTechnologies.includes(tech)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {tech}
                {selectedTechnologies.includes(tech) && <Check className="inline w-3 h-3 ml-1" />}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={customTech}
              onChange={(e) => setCustomTech(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomTechnology())}
              className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add custom technology..."
            />
            <Button type="button" onClick={addCustomTechnology} variant="secondary">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          {errors.technologies && <p className="text-red-400 text-sm mt-2">{errors.technologies}</p>}
        </div>

        {/* Team Members */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Team Members ({selectedMembers.length + 1}/4)</h2>
          
          {/* Leader */}
          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">{user?.name} (You)</p>
                <p className="text-sm text-slate-400">{user?.email}</p>
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                Team Leader
              </span>
            </div>
          </div>

          {/* Selected Members */}
          {selectedMembers.map(member => (
            <div key={member.studentId} className="bg-slate-700 rounded-lg p-4 mb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeMember(member.studentId)}
                  className="text-red-400 hover:text-red-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-400">Role:</label>
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => updateMemberRole(member.studentId, e.target.value)}
                  className="flex-1 px-3 py-1 bg-slate-600 border border-slate-500 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Frontend Developer"
                />
              </div>
            </div>
          ))}

          {/* Add Member */}
          {selectedMembers.length < 3 && (
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search students by name or email..."
                />
              </div>

              {searchTerm && (
                <div className="mt-2 bg-slate-700 border border-slate-600 rounded-lg max-h-48 overflow-y-auto">
                  {filteredStudents
                    .filter(s => s.studentid !== user?.id && !selectedMembers.find(m => m.studentId === s.studentid))
                    .map(student => (
                      <button
                        key={student.studentid}
                        type="button"
                        onClick={() => addMember(student)}
                        className="w-full text-left px-4 py-3 hover:bg-slate-600 transition-colors border-b border-slate-600 last:border-b-0"
                      >
                        <p className="font-medium text-white">{student.studentname}</p>
                        <p className="text-sm text-slate-400">{student.email}</p>
                      </button>
                    ))}
                  {filteredStudents.filter(s => s.studentid !== user?.id && !selectedMembers.find(m => m.studentId === s.studentid)).length === 0 && (
                    <p className="px-4 py-3 text-slate-400 text-sm">No students found</p>
                  )}
                </div>
              )}
            </div>
          )}
          
          {errors.members && <p className="text-red-400 text-sm mt-2">{errors.members}</p>}
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.back()}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={submitting}
            className="flex-1"
          >
            {submitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
}
