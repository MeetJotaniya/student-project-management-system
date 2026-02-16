import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Bell, CheckCircle2, FileText, User } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Notification } from '../../types';

export interface NotificationCardProps {
  notifications: Notification[];
  onViewAll?: () => void;
  className?: string;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notifications,
  onViewAll,
  className,
}) => {
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'comment':
        return null; // Use avatar instead
      case 'submission':
        return <FileText className="w-5 h-5 text-white" />;
      case 'task':
        return <User className="w-5 h-5 text-white" />;
      default:
        return <Bell className="w-5 h-5 text-white" />;
    }
  };

  const getNotificationBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'comment':
        return 'bg-blue-600';
      case 'submission':
        return 'bg-green-500';
      case 'task':
        return 'bg-purple-600';
      default:
        return 'bg-slate-600';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-400" />
            <CardTitle>Notifications</CardTitle>
          </div>
          <CheckCircle2 className="w-5 h-5 text-slate-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              {notification.type === 'comment' && notification.avatarInitials ? (
                <div className={`w-10 h-10 ${getNotificationBgColor(notification.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-medium">{notification.avatarInitials}</span>
                </div>
              ) : (
                <div className={`w-10 h-10 ${getNotificationBgColor(notification.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {getNotificationIcon(notification.type)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white mb-1">{notification.title}</p>
                {notification.message && (
                  <p className={`text-xs mb-1 ${notification.type === 'comment' ? 'text-slate-400 italic' : 'text-slate-400'}`}>
                    {notification.message}
                  </p>
                )}
                <span className="text-xs text-slate-500">{notification.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        {onViewAll && (
          <Button variant="secondary" className="w-full" onClick={onViewAll}>
            View All Activity
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

