import React from 'react';
import { Search, Bell, User, MessageCircle, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';

export interface TopNavProps {
  logo: React.ReactNode;
  navItems: Array<{ label: string; href: string; active?: boolean }>;
  searchPlaceholder?: string;
  notificationCount?: number;
  user?: {
    name: string;
    avatar?: string;
  };
  actions?: React.ReactNode;
  className?: string;
}

export const TopNav: React.FC<TopNavProps> = ({
  logo,
  navItems,
  searchPlaceholder = 'Search projects...',
  notificationCount = 0,
  user,
  actions,
  className,
}) => {
  return (
    <header className={`bg-slate-800 border-b border-slate-700 px-6 py-4 ${className || ''}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {logo}
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                item.active
                  ? 'text-blue-400 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          {user && (
            <div className="relative">
              <Avatar
                src={user.avatar}
                name={user.name}
                size="md"
                status="online"
              />
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {actions && (
        <div className="flex items-center gap-3 mt-4">
          {actions}
        </div>
      )}
    </header>
  );
};

