'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../../../../lib/auth';
import { Users, Check, X, Clock } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export default function GroupRequestsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<any[]>([]);
  const [rejectingRequest, setRejectingRequest] = useState<number | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    const currentUser = getUserFromCookie();
    if (!currentUser || currentUser.role !== 'admin') {
      router.push('/login');
      return;
    }
    setUser(currentUser);
    loadRequests();
  }, [router]);

  const loadRequests = async () => {
    try {
      const res = await fetch('/api/admin/group-requests');
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
      }
    } catch (error) {
      console.error('Error loading requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const approveRequest = async (requestId: number) => {
    if (!confirm('Are you sure you want to approve this group request?')) return;

    try {
      const res = await fetch('/api/admin/approve-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId })
      });

      if (res.ok) {
        alert('Group request approved successfully!');
        loadRequests();
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to approve request');
      }
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request');
    }
  };

  const startRejecting = (requestId: number) => {
    setRejectingRequest(requestId);
    setRejectionReason('');
  };

  const rejectRequest = async (requestId: number) => {
    if (!rejectionReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }

    try {
      const res = await fetch('/api/admin/reject-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId, reason: rejectionReason })
      });

      if (res.ok) {
        alert('Group request rejected');
        setRejectingRequest(null);
        loadRequests();
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to reject request');
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request');
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
        <h1 className="text-3xl font-bold text-white mb-2">Group Requests</h1>
        <p className="text-slate-400">Review and approve student group creation requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-2xl font-bold text-white">{requests.length}</p>
              <p className="text-sm text-slate-400">Pending Requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map(request => (
          <div key={request.requestId} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{request.groupName}</h3>
                  <span className="px-2 py-1 bg-orange-600 text-white text-xs rounded-full">
                    Pending Approval
                  </span>
                </div>
                <p className="text-slate-300 mb-2">{request.projectTitle}</p>
                <p className="text-sm text-slate-400 mb-3">{request.projectDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                    {request.projectArea}
                  </span>
                  {request.technologies.map((tech: string) => (
                    <span key={tech} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="text-slate-400">
                    <Users className="inline w-4 h-4 mr-1" />
                    {request.memberCount} members
                  </span>
                  <span className="text-slate-400">
                    Leader: {request.leaderName}
                  </span>
                  <span className="text-slate-500">
                    Submitted: {new Date(request.created).toLocaleDateString()}
                  </span>
                </div>

                {/* Members List */}
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-white mb-3">Team Members</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white">{request.leaderName}</span>
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Leader</span>
                    </div>
                    {request.members.map((member: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">Student ID: {member.studentId}</span>
                        <span className="px-2 py-1 bg-slate-600 text-slate-300 text-xs rounded">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {rejectingRequest === request.requestId ? (
              <div className="bg-slate-700 rounded-lg p-4 space-y-3">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Rejection Reason</label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Provide a reason for rejection..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => rejectRequest(request.requestId)}
                    variant="primary"
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    Confirm Rejection
                  </Button>
                  <Button
                    onClick={() => setRejectingRequest(null)}
                    variant="secondary"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <Button
                  onClick={() => approveRequest(request.requestId)}
                  variant="primary"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  leftIcon={<Check className="w-4 h-4" />}
                >
                  Approve Group
                </Button>
                <Button
                  onClick={() => startRejecting(request.requestId)}
                  variant="secondary"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  leftIcon={<X className="w-4 h-4" />}
                >
                  Reject
                </Button>
              </div>
            )}
          </div>
        ))}

        {requests.length === 0 && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 text-center">
            <Clock className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No pending group requests</p>
          </div>
        )}
      </div>
    </div>
  );
}
