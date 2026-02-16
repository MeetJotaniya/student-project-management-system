import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle2, XCircle } from 'lucide-react';
import { ApprovalItem } from '../../types';

export interface ApprovalCardProps {
  approvals: ApprovalItem[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onReview?: (id: string) => void;
  className?: string;
}

export const ApprovalCard: React.FC<ApprovalCardProps> = ({
  approvals,
  onApprove,
  onReject,
  onReview,
  className,
}) => {
  const newCount = approvals.filter((a) => a.isNew).length;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Pending Approvals</CardTitle>
          {newCount > 0 && (
            <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-medium">
              {newCount}New
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {approvals.map((approval) => (
            <div key={approval.id} className="p-4 bg-slate-700/50 rounded-lg">
              <div className="mb-2">
                <p className="text-sm font-medium text-white">{approval.title}</p>
                <p className="text-xs text-slate-400 mt-1">{approval.description}</p>
                {approval.submittedBy && (
                  <p className="text-xs text-slate-500 mt-1">Submitted by {approval.submittedBy}</p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-3">
                {approval.type === 'proposal' && (
                  <>
                    {onApprove && (
                      <Button
                        variant="success"
                        size="sm"
                        leftIcon={<CheckCircle2 className="w-4 h-4" />}
                        onClick={() => onApprove(approval.id)}
                        className="flex-1"
                      >
                        Approve
                      </Button>
                    )}
                    {onReject && (
                      <Button
                        variant="danger"
                        size="sm"
                        leftIcon={<XCircle className="w-4 h-4" />}
                        onClick={() => onReject(approval.id)}
                        className="flex-1"
                      >
                        Reject
                      </Button>
                    )}
                  </>
                )}
                {approval.type === 'extension' && onReview && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onReview(approval.id)}
                    className="w-full"
                  >
                    Review
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

