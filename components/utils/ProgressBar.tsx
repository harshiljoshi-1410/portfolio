'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label?: string;
  color?: 'blue' | 'purple' | 'cyan' | 'amber';
}

const colorMap = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/50',
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/50',
  },
  cyan: {
    gradient: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-500/50',
  },
  amber: {
    gradient: 'from-amber-500 to-amber-600',
    shadow: 'shadow-amber-500/50',
  },
};

export function ProgressBar({ progress, label, color = 'blue' }: ProgressBarProps) {
  const { gradient, shadow } = colorMap[color];
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-300">{label}</span>
          <span className="text-sm font-semibold text-slate-400">{Math.round(progress)}%</span>
        </div>
      )}
      <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient} shadow-lg ${shadow}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
