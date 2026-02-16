import React from 'react';
import { cn } from '../../lib/utils';
import { LayoutDashboard, FolderKanban, Users, FileCheck, Settings, LogOut } from 'lucide-react';
import { Avatar } from '../ui/Avatar';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface SidebarProps {
  logo?: React.ReactNode;
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    department?: string;
  };
  items: SidebarItem[];
  footerItems?: SidebarItem[];
  onSignOut?: () => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  user,
  items,
  footerItems = [],
  onSignOut,
  className,
}) => {
  return (
    <aside className={cn('w-64 bg-slate-800 border-r border-slate-700 flex flex-col', className)}>
      {/* Logo */}
      {logo && (
        <div className="p-6 border-b border-slate-700">
          {logo}
        </div>
      )}

      {/* User Profile */}
      {user && (
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Avatar
              src={user.avatar}
              name={user.name}
              size="lg"
            />
            <div>
              <p className="font-semibold text-white">{user.name}</p>
              {user.department && (
                <p className="text-xs text-slate-400">{user.department}</p>
              )}
              {user.email && (
                <p className="text-xs text-slate-400">{user.email}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href || '#'}
            onClick={item.onClick}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              item.active
                ? 'bg-blue-600 text-white font-medium'
                : 'text-slate-400 hover:bg-slate-700 hover:text-white'
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer Items */}
      {footerItems.length > 0 && (
        <div className="p-4 border-t border-slate-700 space-y-1">
          {footerItems.map((item) => (
            <a
              key={item.id}
              href={item.href || '#'}
              onClick={item.onClick}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                item.active
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:bg-slate-700 hover:text-white'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Sign Out */}
      {onSignOut && (
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={onSignOut}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </aside>
  );
};

