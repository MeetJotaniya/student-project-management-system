import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Input } from '../ui/Input';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  notificationCount?: number;
  user?: {
    name: string;
    avatar?: string;
  };
  actions?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  searchPlaceholder = 'Search...',
  showSearch = true,
  showNotifications = true,
  notificationCount = 0,
  user,
  actions,
  className,
}) => {
  return (
    <header className={`bg-slate-800 border-b border-slate-700 px-6 py-4 ${className || ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {showNotifications && (
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-red-500 text-white rounded text-xs font-medium">
                  {notificationCount}New
                </span>
              )}
            </button>
          )}
          {user && (
            <Avatar
              src={user.avatar}
              name={user.name}
              size="md"
              status="online"
            />
          )}
          {actions}
        </div>
      </div>
    </header>
  );
};

