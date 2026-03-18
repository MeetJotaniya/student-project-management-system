'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

interface MentorInfo {
  name: string;
  email: string;
  phone?: string;
  office?: string;
  officeHours?: string;
  role: string;
}

interface ContactMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: MentorInfo | null;
}

export const ContactMentorModal: React.FC<ContactMentorModalProps> = ({
  isOpen,
  onClose,
  mentor
}) => {
  if (!mentor) return null;

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{mentor.name}</h2>
                    <p className="text-blue-100 text-sm">{mentor.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3 p-3 bg-slate-800 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 mb-1">Email</p>
                    <a
                      href={`mailto:${mentor.email}`}
                      className="text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {mentor.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {mentor.phone && (
                  <div className="flex items-start gap-3 p-3 bg-slate-800 rounded-lg">
                    <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 mb-1">Phone</p>
                      <a
                        href={`tel:${mentor.phone}`}
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        {mentor.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Office */}
                {mentor.office && (
                  <div className="flex items-start gap-3 p-3 bg-slate-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 mb-1">Office</p>
                      <p className="text-white">{mentor.office}</p>
                    </div>
                  </div>
                )}

                {/* Office Hours */}
                {mentor.officeHours && (
                  <div className="flex items-start gap-3 p-3 bg-slate-800 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 mb-1">Office Hours</p>
                      <p className="text-white">{mentor.officeHours}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex gap-3">
                <Button
                  onClick={onClose}
                  variant="secondary"
                  className="flex-1"
                >
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
