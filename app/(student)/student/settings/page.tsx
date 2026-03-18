'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { User, Lock, Save } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';
import { ProfileImageUpload } from '../../../../components/profile/ProfileImageUpload';

export default function StudentSettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'student') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    setLoading(false);
  }, [router]);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch('/api/student/profile-image', {
      method: 'POST',
      body: formData
    });
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    setUser((prev: any) => ({ ...prev, profileImage: data.imageUrl }));
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }
    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword,
          newPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: 'Password changed successfully' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to change password' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to change password' });
    } finally {
      setSaving(false);
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
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-400" />
          Profile
        </h2>
        <div className="flex items-start gap-6">
          <ProfileImageUpload
            currentImage={user?.profileImage}
            userName={user?.name || 'Student'}
            onUpload={handleImageUpload}
          />
          <div className="flex-1 space-y-3">
            <div>
              <label className="text-sm text-slate-400">Name</label>
              <p className="text-white font-medium">{user?.name}</p>
            </div>
            <div>
              <label className="text-sm text-slate-400">Email</label>
              <p className="text-white">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-400" />
          Change Password
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                message.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {message.text}
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-400 mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" variant="primary" leftIcon={<Save className="w-4 h-4" />} disabled={saving}>
            {saving ? 'Saving...' : 'Update Password'}
          </Button>
        </form>
      </div>
    </div>
  );
}
