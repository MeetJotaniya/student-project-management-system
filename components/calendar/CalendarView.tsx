'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, X, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '../ui/Button';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: string;
  attendees?: number;
  type: 'meeting' | 'deadline' | 'review';
}

interface CalendarViewProps {
  events: CalendarEvent[];
  onAddEvent?: () => void;
  onEventClick?: (event: CalendarEvent) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  onAddEvent,
  onEventClick
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  const getEventColor = () => {
    return 'bg-blue-500';
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-24 bg-slate-800/30" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDate(day);
    const isToday =
      day === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear();

    days.push(
      <motion.div
        key={day}
        whileHover={{ scale: 1.02 }}
        className={`h-24 bg-slate-800 border border-slate-700 p-2 cursor-pointer transition-all ${isToday ? 'ring-2 ring-blue-500' : ''
          }`}
      >
        <div className={`text-sm font-bold mb-1 ${isToday ? 'text-blue-400' : 'text-white'}`}>
          {day}
        </div>
        <div className="space-y-1">
          {dayEvents.slice(0, 2).map(event => (
            <div
              key={event.id}
              onClick={() => onEventClick?.(event)}
              className={`${getEventColor()} text-white text-xs px-2 py-1 rounded truncate`}
            >
              {event.title}
            </div>
          ))}
          {dayEvents.length > 2 && (
            <div className="text-xs text-slate-400">+{dayEvents.length - 2} more</div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {onAddEvent && (
            <Button
              onClick={onAddEvent}
              variant="primary"
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Schedule Meeting
            </Button>
          )}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-bold text-slate-400 py-2">
            {day}
          </div>
        ))}
        {days}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span className="text-sm text-slate-400">Scheduled Meeting</span>
        </div>
      </div>
    </div>
  );
};

// Event Detail Modal
interface EventDetailModalProps {
  event: CalendarEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.attendees && (
                  <div className="flex items-center gap-3 text-slate-300">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{event.attendees} attendees</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="primary" className="flex-1">
                  Join Meeting
                </Button>
                <Button variant="secondary" onClick={onClose} className="flex-1">
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
