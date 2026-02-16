import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calendar, Clock } from 'lucide-react';
import { ScheduleItem } from '../../types';

export interface ScheduleCardProps {
  schedule: ScheduleItem[];
  onViewFullCalendar?: () => void;
  className?: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  schedule,
  onViewFullCalendar,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-400" />
          <CardTitle>Today's Schedule</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div key={item.id} className="flex items-start gap-3">
              {index < schedule.length - 1 ? (
                <div className="flex flex-col items-center">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <div className="w-px h-full bg-slate-600 mt-1"></div>
                </div>
              ) : (
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{item.time}</p>
                <p className="text-sm text-slate-300 mt-1">{item.title}</p>
                {item.location && (
                  <p className="text-xs text-slate-400 mt-1">{item.location}</p>
                )}
                {item.description && (
                  <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {onViewFullCalendar && (
          <Button
            variant="secondary"
            className="w-full mt-4"
            onClick={onViewFullCalendar}
          >
            View Full Calendar
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

