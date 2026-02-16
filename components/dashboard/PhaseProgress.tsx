import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { CheckCircle2, Users } from 'lucide-react';

export interface Phase {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'upcoming';
  stepNumber?: number;
}

export interface PhaseProgressProps {
  currentPhase: string;
  phases: Phase[];
  overallProgress: number;
  className?: string;
}

export const PhaseProgress: React.FC<PhaseProgressProps> = ({
  currentPhase,
  phases,
  overallProgress,
  className,
}) => {
  return (
    <Card className={className}>
      <CardContent>
        <h2 className="text-lg font-semibold text-white mb-4">Current Phase</h2>
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-400">{currentPhase}</span>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            {phases.map((phase) => (
              <div key={phase.id} className="flex items-center gap-2">
                {phase.status === 'completed' ? (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : phase.status === 'current' ? (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-slate-300">{phase.stepNumber}</span>
                  </div>
                )}
                <span
                  className={`text-sm ${
                    phase.status === 'current'
                      ? 'text-white font-medium'
                      : phase.status === 'completed'
                      ? 'text-slate-300'
                      : 'text-slate-400'
                  }`}
                >
                  {phase.label}
                </span>
              </div>
            ))}
            <div className="text-right">
              <span className="text-3xl font-bold text-white">{overallProgress}%</span>
            </div>
          </div>
          <ProgressBar value={overallProgress} showLabel={false} />
        </div>
      </CardContent>
    </Card>
  );
};

