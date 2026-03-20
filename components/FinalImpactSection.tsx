'use client';

import { motion } from 'framer-motion';
import { SectionMode } from './utils/SectionMode';

export default function FinalImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionMode
          mode="Impact"
          title="The Vision"
          description="Not following templates. Building the real thing."
          accentColor="pink"
        >
          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Statement */}
            <div className="text-center space-y-6">
              <motion.h3
                className="text-5xl md:text-6xl font-black leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block neon-cyan">Not here to follow</span>
                <span className="block neon-pink">
                  the syllabus.
                </span>
                <span className="block neon-lime mt-4">Here to</span>
                <span className="block neon-purple">
                  outgrow it.
                </span>
              </motion.h3>

              <motion.p
                className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Building systems that actually work. Moving beyond theory into real-world engineering that solves problems, scales with purpose, and proves itself through results.
              </motion.p>
            </div>

            {/* The Proof */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.15 }}
            >
              {[
                { label: 'Real', desc: 'Systems that exist and work in production' },
                { label: 'Technical', desc: 'Solving actual engineering problems' },
                { label: 'Builder Mindset', desc: 'Always creating, never settling' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="text-xl font-bold text-blue-400 mb-2">👉 {item.label}</div>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SectionMode>
      </div>
    </section>
  );
}
