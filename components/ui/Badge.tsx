import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-blue-500/20 text-blue-400 border border-blue-500/20',
    success: 'bg-green-500/20 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/20',
    info: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};

