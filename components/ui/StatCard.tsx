import React from 'react';
import { Card, CardContent } from './Card';
import { StatCard as StatCardType } from '../../types';

export interface StatCardProps extends StatCardType {
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtitle,
  icon,
  trend,
  className,
}) => {
  return (
    <Card className={className}>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          {icon}
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        {subtitle && <div className="text-sm text-slate-400">{subtitle}</div>}
        <div className="text-xs font-medium text-slate-500 mt-1">{label}</div>
        {trend && (
          <div className={`mt-2 text-sm ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

