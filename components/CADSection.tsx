'use client'

import { motion } from 'framer-motion'

export default function CADSection() {
  const cadProjects = [
    {
      icon: '📐',
      title: 'Multi-Room CAD Layout',
      items: ['Layered drafting with precision', 'Multi-room spatial planning', 'Dimension-based annotations', 'Full CAD navigation workflow'],
      tag: 'Architectural Planning',
    },
    {
      icon: '📏',
      title: 'Dimension-Based Drafting',
      items: ['Accurate scale drawings', 'Structural component layout', 'Cross-section detailing', 'Engineering tolerances'],
      tag: 'Structural Design',
    },
    {
      icon: '🏗️',
      title: 'Architectural Planning',
      items: ['Floor plan generation', 'Site layout mapping', 'Elevation views', 'Construction-ready output'],
      tag: 'Floor Plans',
    },
  ]

  return (
    <section id="cad" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Engineering Design Lab</div>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="neon-blue">Design is where</span>
            <span className="block neon-lime">
              systems begin.
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            I translate ideas into structured, build-ready designs using CAD tools, focusing on precision, layout efficiency, and real-world usability.
          </p>
        </div>

        {/* CAD Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {cadProjects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="reveal group relative p-8 glass-card bg-gradient-to-br from-blue-500/10 to-cyan-500/10 overflow-hidden cursor-pointer"
            >
              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 -z-10" />

              <div className="relative space-y-4">
                <div className="text-3xl">{project.icon}</div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                
                <ul className="space-y-2">
                  {project.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full glass text-blue-300 border-0">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-20 h-20 border border-blue-400/20 rounded-full group-hover:border-blue-400/50 transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>

        {/* Transition text */}
        <div className="flex items-center justify-center gap-6 py-12">
          <div className="h-px bg-gradient-to-r from-transparent to-slate-700 flex-1" />
          <p className="text-slate-400 text-center whitespace-nowrap">Once designed, I bring these systems to life.</p>
          <div className="h-px bg-gradient-to-l from-transparent to-slate-700 flex-1" />
        </div>
      </div>
    </section>
  )
}
