'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProfileImageUploadProps {
  currentImage?: string;
  userName: string;
  onUpload: (file: File) => Promise<void>;
}

export const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  currentImage,
  userName,
  onUpload
}) => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [showUploadUI, setShowUploadUI] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setShowUploadUI(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      await onUpload(file);
      setShowUploadUI(false);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setPreview(currentImage || null);
    setShowUploadUI(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const initials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative inline-block">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-700 shadow-lg cursor-pointer group"
        onClick={() => !showUploadUI && fileInputRef.current?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt={userName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{initials}</span>
          </div>
        )}

        {/* Hover Overlay */}
        {!showUploadUI && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Camera className="w-8 h-8 text-white" />
          </div>
        )}
      </motion.div>

      {/* Upload Actions */}
      {showUploadUI && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-3 flex gap-2 whitespace-nowrap z-10"
        >
          <Button
            onClick={handleUpload}
            disabled={uploading}
            variant="primary"
            size="sm"
            leftIcon={<Upload className="w-4 h-4" />}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
          <Button
            onClick={handleCancel}
            disabled={uploading}
            variant="secondary"
            size="sm"
            leftIcon={<X className="w-4 h-4" />}
          >
            Cancel
          </Button>
        </motion.div>
      )}
    </div>
  );
};
