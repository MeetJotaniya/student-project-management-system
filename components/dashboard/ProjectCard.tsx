import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { AvatarGroup } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Project } from '../../types';
import { Folder, FileText } from 'lucide-react';

export interface ProjectCardProps {
  project: Project;
  onViewDetails?: (projectId: number) => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
  className,
}) => {
  const statusVariants = {
    active: 'success',
    'in-progress': 'info',
    pending: 'warning',
    completed: 'default',
  } as const;

  const avatars = Array.from({ length: project.members }).map((_, i) => ({
    name: `Member ${i + 1}`,
  }));

  return (
    <Card className={className}>
      <CardContent>
        <div className="flex items-start justify-between mb-3">
          {project.icon && (
            <div className={`w-12 h-12 ${project.iconColor || 'bg-blue-600'} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">{project.icon}</span>
            </div>
          )}
          <Badge variant={statusVariants[project.status]}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        {project.team && <p className="text-sm text-slate-400 mb-4">{project.team}</p>}

        <div className="mb-4">
          <ProgressBar value={project.progress} showLabel />
        </div>

        <div className="flex items-center justify-between">
          <AvatarGroup avatars={avatars} max={3} size="sm" />
          {onViewDetails && (
            <Button
              size="sm"
              onClick={() => onViewDetails(project.id)}
            >
              Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

