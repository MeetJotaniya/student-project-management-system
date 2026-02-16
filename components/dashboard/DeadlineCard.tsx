import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Calendar } from 'lucide-react';
import { Deadline } from '../../types';

export interface DeadlineCardProps {
  deadlines: Deadline[];
  onViewAll?: () => void;
  className?: string;
}

export const DeadlineCard: React.FC<DeadlineCardProps> = ({
  deadlines,
  onViewAll,
  className,
}) => {
  const getPriorityStyles = (priority: Deadline['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'low':
        return 'bg-green-500/10 border-green-500/20';
      default:
        return 'bg-slate-700/50 border-slate-600';
    }
  };

  const getPriorityBadge = (priority: Deadline['priority'], dueDate: string) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-medium">&lt; 4H</span>;
      case 'medium':
        return <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-medium">TMRW</span>;
      case 'low':
        return <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-medium">{dueDate}</span>;
      default:
        return null;
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <CardTitle>Deadlines</CardTitle>
          </div>
          {onViewAll && (
            <a
              href="#"
              onClick={onViewAll}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              View All
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className={`p-3 rounded-lg border ${getPriorityStyles(deadline.priority)}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-white">{deadline.title}</span>
                {getPriorityBadge(deadline.priority, deadline.dueDate)}
              </div>
              <p className="text-xs text-slate-400">{deadline.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

