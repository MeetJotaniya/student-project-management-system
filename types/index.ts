export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'faculty' | 'student';
  phone?: string | null;
}

export interface Project {
  id: number;
  title: string;
  projectId?: string;
  abstract?: string;
  status: 'active' | 'pending' | 'completed' | 'in-progress';
  progress: number;
  team: string;
  members: number;
  icon?: string;
  iconColor?: string;
  lastUpdated?: string;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  type: 'folder' | 'file';
  url?: string;
}

export interface Deadline {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed';
}

export interface Notification {
  id: string;
  type: 'comment' | 'submission' | 'task' | 'system';
  title: string;
  message: string;
  timestamp: string;
  avatar?: string;
  avatarInitials?: string;
  read?: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface ApprovalItem {
  id: string;
  type: 'proposal' | 'extension' | 'other';
  title: string;
  description: string;
  submittedBy?: string;
  isNew?: boolean;
}

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

