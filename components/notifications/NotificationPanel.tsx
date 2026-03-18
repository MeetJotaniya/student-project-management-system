'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Trash2, CheckCheck } from 'lucide-react';

interface Notification {
  id: string;
  type: 'comment' | 'submission' | 'task' | 'meeting';
  title: string;
  message: string;
  timestamp: string;
  read?: boolean;
  avatarInitials?: string;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onClearAll: () => void;
  onMarkAsRead: (id: string) => void;
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  onClearAll,
  onMarkAsRead
}) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'comment': return 'bg-blue-500';
      case 'submission': return 'bg-green-500';
      case 'task': return 'bg-orange-500';
      case 'meeting': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-slate-900 border-l border-slate-700 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-bold text-white">Notifications</h2>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Actions */}
            {notifications.length > 0 && (
              <div className="p-3 border-b border-slate-700 flex gap-2">
                <button
                  onClick={onClearAll}
                  className="flex-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>
            )}

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <Bell className="w-16 h-16 text-slate-600 mb-4" />
                  <p className="text-slate-400 font-medium">No notifications</p>
                  <p className="text-slate-500 text-sm mt-1">You're all caught up!</p>
                </div>
              ) : (
                <div className="p-3 space-y-2">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-lg border transition-all cursor-pointer ${
                        notification.read
                          ? 'bg-slate-800/50 border-slate-700'
                          : 'bg-slate-800 border-blue-500/30'
                      }`}
                      onClick={() => onMarkAsRead(notification.id)}
                    >
                      <div className="flex gap-3">
                        <div className={`w-10 h-10 ${getTypeColor(notification.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {notification.avatarInitials ? (
                            <span className="text-white font-bold text-sm">
                              {notification.avatarInitials}
                            </span>
                          ) : (
                            <Bell className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium text-sm mb-1">
                            {notification.title}
                          </h3>
                          <p className="text-slate-400 text-sm line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-slate-500 text-xs mt-2">
                            {notification.timestamp}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
