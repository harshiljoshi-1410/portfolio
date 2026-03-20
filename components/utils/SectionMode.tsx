'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionModeProps {
  mode: string;
  title: string;
  description: string;
  children: ReactNode;
  accentColor?: 'blue' | 'purple' | 'cyan' | 'pink' | 'amber';
}

const accentMap = {
  blue: {
    container: 'border-blue-500/30 bg-blue-500/5',
    text: 'text-blue-400',
  },
  purple: {
    container: 'border-purple-500/30 bg-purple-500/5',
    text: 'text-purple-400',
  },
  cyan: {
    container: 'border-cyan-500/30 bg-cyan-500/5',
    text: 'text-cyan-400',
  },
  pink: {
    container: 'border-pink-500/30 bg-pink-500/5',
    text: 'text-pink-400',
  },
  amber: {
    container: 'border-amber-500/30 bg-amber-500/5',
    text: 'text-amber-400',
  },
};

export function SectionMode({
  mode,
  title,
  description,
  children,
  accentColor = 'blue',
}: SectionModeProps) {
  const { container, text } = accentMap[accentColor];
  
  return (
    <motion.div
      className={`rounded-2xl border backdrop-blur-sm p-8 ${container}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="mb-6">
        <motion.div
          className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className={`text-xs font-semibold ${text}`}>
            {mode.toUpperCase()}
          </span>
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
