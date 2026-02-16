import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { AvatarGroup } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Project } from '../../types';
import { Folder, FileText, ArrowRight, Plus } from 'lucide-react';

export interface ProjectDetailCardProps {
  project: Project;
  onViewDetails?: () => void;
  className?: string;
}

export const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({
  project,
  onViewDetails,
  className,
}) => {
  const avatars = Array.from({ length: project.members }).map((_, i) => ({
    name: `Member ${i + 1}`,
  }));

  return (
    <Card variant="gradient" className={`relative overflow-hidden ${className || ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <CardContent className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="info">In Progress</Badge>
        </div>

        {project.projectId && (
          <p className="text-sm text-slate-400 mb-1">Project ID: {project.projectId}</p>
        )}
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

        {project.abstract && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">ABSTRACT</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{project.abstract}</p>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">TEAM MEMBERS</h4>
          <div className="flex items-center gap-2">
            <AvatarGroup avatars={avatars} max={3} size="md" />
            <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center border-2 border-dashed border-slate-500">
              <Plus className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        {project.resources && project.resources.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">RESOURCES</h4>
            <div className="space-y-2">
              {project.resources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url || '#'}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {resource.type === 'folder' ? (
                    <Folder className="w-4 h-4" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                  <span className="text-sm">{resource.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          {project.lastUpdated && (
            <span className="text-xs text-slate-500">Last updated {project.lastUpdated}</span>
          )}
          {onViewDetails && (
            <Button rightIcon={<ArrowRight className="w-4 h-4" />} onClick={onViewDetails}>
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

