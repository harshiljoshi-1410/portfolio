'use client'

import { motion } from 'framer-motion'

export default function IoTSection() {
  const iotProjects = [
    {
      icon: '💧',
      title: 'Smart Irrigation System',
      description: 'Built using soil moisture sensors + ESP8266 to automate water delivery based on real-time soil data. Reduces water waste by triggering pumps only when needed.',
      tech: ['ESP8266', 'Soil Sensor', 'Relay Module', 'Arduino IDE'],
      status: 'Built & Tested',
      statusColor: 'bg-green-500',
    },
    {
      icon: '🌡️',
      title: 'Environmental Monitor',
      description: 'Real-time temperature, humidity, and air quality monitoring system with live dashboard. Designed for smart home and industrial environments.',
      tech: ['DHT11', 'MQ Sensors', 'NodeMCU', 'Dashboard'],
      status: 'In Progress',
      statusColor: 'bg-yellow-500',
    },
    {
      icon: '🔐',
      title: 'Smart Access Control',
      description: 'RFID + keypad based access system with logging. Grants or denies entry based on registered credentials, with event timestamps stored locally.',
      tech: ['RFID RC522', 'Arduino', 'LCD Display', 'Servo Lock'],
      status: 'Built & Tested',
      statusColor: 'bg-green-500',
    },
  ]

  return (
    <section id="iot" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="text-sm font-bold text-lime-300 uppercase tracking-widest">Real-World Systems</div>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="neon-cyan">Connected systems that</span>
            <span className="block neon-lime">
              bridge real and digital.
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Connecting hardware to real-world impact. IoT systems shouldn't just function — they should think.
          </p>
        </div>

        {/* Project Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {iotProjects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="reveal group relative h-full p-8 glass-card bg-gradient-to-br from-green-500/10 to-emerald-500/10 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/20 to-emerald-500/20 -z-10 rounded-2xl" />

              <div className="relative space-y-4 flex-1 flex flex-col">
                <div className="text-3xl">{project.icon}</div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md glass text-slate-300 border-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/50">
                  <span className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`}></span>
                  <span className="text-sm text-slate-400">{project.status}</span>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </motion.div>

        {/* Transition text */}
        <div className="flex items-center justify-center gap-6 py-12">
          <div className="h-px bg-gradient-to-r from-transparent to-slate-700 flex-1" />
          <p className="text-slate-400 text-center whitespace-nowrap">Systems shouldn't just function — they should think.</p>
          <div className="h-px bg-gradient-to-l from-transparent to-slate-700 flex-1" />
        </div>
      </div>
    </section>
  )
}
