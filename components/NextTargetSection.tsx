'use client';

import { motion } from 'framer-motion';
import { SectionMode } from './utils/SectionMode';
import { Zap, Target, Rocket } from 'lucide-react';

export default function NextTargetSection() {
  const targets = [
    {
      icon: Target,
      title: 'Advanced ML Models',
      description: 'Building custom neural networks for real-world IoT data processing',
      progress: 65,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Deploying intelligent systems at the edge for reduced latency',
      progress: 72,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Autonomous Systems',
      description: 'Creating self-managing IoT networks with predictive analytics',
      progress: 58,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="targets" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionMode
        mode="Targets"
        title="Next Frontiers"
        description="Ambitious goals driving innovation in emerging technologies"
        accentColor="pink"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {targets.map((target, index) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 group-hover:border-slate-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${target.color} p-2 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{target.title}</h4>
                  <p className="text-sm text-slate-400 mb-4">{target.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-400">Progress</span>
                      <span className="text-xs font-bold text-slate-300">{target.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${target.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${target.progress}%` }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionMode>
      </div>
    </section>
  );
}
