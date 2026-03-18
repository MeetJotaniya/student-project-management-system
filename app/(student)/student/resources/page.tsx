'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Github, ExternalLink, Save } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export default function ResourcesPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState<any>(null);
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'student') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadResources();
  }, [router]);

  const loadResources = async () => {
    try {
      const res = await fetch('/api/student/resources');
      if (res.ok) {
        const data = await res.json();
        setGroup(data.group);
        setRepositoryUrl(data.githubUrl || '');
      }
    } catch (error) {
      console.error('Error loading resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!repositoryUrl.trim()) return;

    // Basic URL validation for GitHub
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/;
    if (!githubRegex.test(repositoryUrl.trim())) {
      alert('Please enter a valid GitHub repository URL (e.g., https://github.com/username/repo)');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/student/resources', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubUrl: repositoryUrl.trim() })
      });

      if (res.ok) {
        await loadResources();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to save repository link');
      }
    } catch (error) {
      console.error('Error saving repository:', error);
      alert('Failed to save repository link');
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

  if (!group) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Github className="w-16 h-16 text-slate-600 mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">No Group Yet</h2>
        <p className="text-slate-400 mb-4">
          You need to be in a project group to add repository links. Create or join a group first.
        </p>
        <Button onClick={() => router.push('/student/create-group')} variant="primary">
          Create Group
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Resources</h1>
        <p className="text-slate-400">Manage your project repository link</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Github className="w-5 h-5 text-slate-400" />
          GitHub Repository
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Add your project&apos;s GitHub repository URL. This will be visible to your faculty and admin.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="repo-url" className="block text-sm text-slate-400 mb-2">
              Repository URL
            </label>
            <input
              id="repo-url"
              type="url"
              value={repositoryUrl}
              onChange={(e) => setRepositoryUrl(e.target.value)}
              placeholder="https://github.com/username/repository"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              variant="primary"
              leftIcon={<Save className="w-4 h-4" />}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save'}
            </Button>
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Repository
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
