'use client'

import { useState } from 'react'

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const credentials = [
    {
      icon: '📄',
      title: 'Resume',
      description: 'Full technical resume covering ECE, IoT, AI, CAD, and full-stack development.',
      tags: ['ECE', 'IoT', 'AI'],
      category: 'resume',
      color: 'from-blue-500/20 to-blue-600/10',
    },
    {
      icon: '🎓',
      title: 'B.Tech in ECE',
      description: 'Electronics and Communication Engineering with focus on embedded systems and IoT.',
      tags: ['ECE', 'Embedded', 'IoT'],
      category: 'engineering',
      color: 'from-purple-500/20 to-purple-600/10',
    },
    {
      icon: '🏆',
      title: 'IoT Development',
      description: 'Certified in IoT systems design, sensor integration, and embedded programming.',
      tags: ['IoT', 'Embedded', 'Tech'],
      category: 'tech',
      color: 'from-green-500/20 to-emerald-600/10',
    },
    {
      icon: '⚙️',
      title: 'CAD Proficiency',
      description: 'Expert in AutoCAD for structural design, architectural planning, and technical drafting.',
      tags: ['CAD', 'Design', 'Engineering'],
      category: 'engineering',
      color: 'from-orange-500/20 to-red-600/10',
    },
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Proficient in React, Node.js, and database design for end-to-end web applications.',
      tags: ['React', 'Node', 'Databases'],
      category: 'tech',
      color: 'from-cyan-500/20 to-blue-600/10',
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Experience with Python ML libraries, NLP, and building intelligent automation systems.',
      tags: ['AI', 'ML', 'Python'],
      category: 'tech',
      color: 'from-pink-500/20 to-purple-600/10',
    },
  ]

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'resume', label: 'Resume' },
    { value: 'tech', label: 'Tech' },
    { value: 'engineering', label: 'Engineering' },
  ]

  const filtered = activeFilter === 'all' ? credentials : credentials.filter(c => c.category === activeFilter)

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="text-sm font-bold text-purple-400 uppercase tracking-widest">Verified Skill Stack</div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Proof, not just
            <span className="block neon-purple">
              claims.
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Certificates and credentials that back up the skill stack. More being added as I build.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 reveal">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeFilter === filter.value
                  ? 'btn-gradient-cyan shadow-lg'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cred, idx) => (
            <article
              key={idx}
              className={`reveal reveal-delay-${(idx % 4) + 1} group relative p-8 glass-card bg-gradient-to-br ${cred.color} overflow-hidden`}
            >
              {/* Hover background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cred.color} -z-10 rounded-2xl`} />

              <div className="relative space-y-4">
                <div className="text-4xl">{cred.icon}</div>
                <h3 className="text-xl font-bold text-white">{cred.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cred.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cred.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md glass text-slate-300 border-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-4 flex gap-2">
                  <button className="px-4 py-2 text-xs font-medium rounded-lg glass text-slate-300 hover:text-white transition-all duration-300">
                    Preview
                  </button>
                  <button className="px-4 py-2 text-xs font-medium rounded-lg glass text-slate-300 hover:text-white transition-all duration-300">
                    Download
                  </button>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
