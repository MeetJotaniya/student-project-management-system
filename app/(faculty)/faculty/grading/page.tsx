'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { GradingTable } from '../../../../components/faculty/GradingTable';

export default function FacultyGradingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'faculty') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadGradingData();
  }, [router]);

  const loadGradingData = async () => {
    try {
      const res = await fetch('/api/faculty/grading');
      if (res.ok) {
        const data = await res.json();
        setStudents(data);
      }
    } catch (error) {
      console.error('Error loading grading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveGrades = async (grades: any[]) => {
    const res = await fetch('/api/faculty/grading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ grades })
    });

    if (!res.ok) {
      throw new Error('Failed to save grades');
    }

    await loadGradingData();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Loading grading data...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Student Grading</h1>
        <p className="text-slate-400">
          Manage and update grades for your assigned students
        </p>
      </div>

      <GradingTable
        students={students}
        onSaveGrades={handleSaveGrades}
        editable={true}
      />
    </div>
  );
}
