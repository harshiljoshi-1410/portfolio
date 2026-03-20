'use client';

import { motion } from 'framer-motion';

interface SystemStatusProps {
  label: string;
  status: 'active' | 'pending' | 'complete';
  value?: string | number;
}

const statusConfig = {
  active: {
    color: 'bg-cyan-500',
    glowColor: 'shadow-cyan-500/50',
    textColor: 'text-cyan-400',
  },
  pending: {
    color: 'bg-amber-500',
    glowColor: 'shadow-amber-500/50',
    textColor: 'text-amber-400',
  },
  complete: {
    color: 'bg-green-500',
    glowColor: 'shadow-green-500/50',
    textColor: 'text-green-400',
  },
};

export function SystemStatus({ label, status, value }: SystemStatusProps) {
  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-slate-600 transition-colors">
      <div className="flex items-center gap-3">
        <motion.div
          className={`w-3 h-3 rounded-full ${config.color} ${config.glowColor} shadow-lg`}
          animate={status === 'active' ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-sm font-medium text-slate-300">{label}</span>
      </div>
      {value && <span className={`text-sm font-semibold ${config.textColor}`}>{value}</span>}
    </div>
  );
}
