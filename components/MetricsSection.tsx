'use client';

import { motion } from 'framer-motion';
import { SectionMode } from './utils/SectionMode';

export default function MetricsSection() {
  const builtSystems = [
    { 
      count: '6+', 
      label: 'Systems Built',
      description: 'CAD, IoT, and AI integrations deployed and operational'
    },
    { 
      count: '3', 
      label: 'Domains Mastered',
      description: 'Engineering design, embedded systems, intelligent automation'
    },
    { 
      count: '∞', 
      label: 'Continuously Building',
      description: 'No stopping point — always iterating and improving'
    },
  ];

  return (
    <section id="metrics" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionMode
        mode="Metrics"
        title="What I've Built"
        description="Real systems, real impact, continuously improving"
        accentColor="blue"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {builtSystems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="reveal glass-card p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 hover:glow-cyan"
            >
              <div className="text-4xl font-black gradient-text mb-2">{item.count}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionMode>
      </div>
    </section>
  );
}
