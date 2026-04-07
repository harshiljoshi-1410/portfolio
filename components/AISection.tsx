'use client'

import { motion } from 'framer-motion'

export default function AISection() {
  return (
    <section id="ai" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-6 reveal">
          <div className="text-sm font-bold text-pink-400 uppercase tracking-widest">Intelligent Systems</div>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="neon-purple">Systems that</span>
            <span className="block neon-pink">
              think and scale.
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Turning logic into intelligence. And when systems can think, they can scale.
          </p>
        </div>

        {/* Main AI Card */}
        <motion.div 
          className="reveal relative p-8 md:p-12 rounded-2xl glass-card bg-gradient-to-br from-purple-500/10 via-slate-900/80 to-blue-500/10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background accent */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20 -z-10 rounded-2xl" />

          <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-sm font-semibold text-purple-300">
                🤖 Flagship Project
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  JARVIS — AI Voice Automation System
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  A Python-based voice assistant that executes system commands, automates workflows, answers queries, and simulates intelligent assistance. Built from scratch — no API wrappers, real logic.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: '🎙️', label: 'Voice command recognition' },
                  { icon: '⚙️', label: 'System task automation' },
                  { icon: '🧠', label: 'Context-aware responses' },
                  { icon: '📂', label: 'File & app control' },
                  { icon: '🌐', label: 'Web search integration' },
                  { icon: '🔁', label: 'Workflow scripting' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SpeechRecognition', 'pyttsx3', 'OS Automation', 'NLP'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Terminal */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-400 ml-2">jarvis.py</span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 font-mono text-xs overflow-x-auto">
                  <div className="space-y-1 text-slate-300">
                    <div><span className="text-purple-400">import</span> speech_recognition <span className="text-purple-400">as</span> sr</div>
                    <div><span className="text-purple-400">import</span> pyttsx3</div>
                    <div><span className="text-purple-400">import</span> os, webbrowser</div>
                    <div>&nbsp;</div>
                    <div><span className="text-blue-400">def</span> <span className="text-green-400">listen</span>():</div>
                    <div>&nbsp;&nbsp;r = sr.Recognizer()</div>
                    <div>&nbsp;&nbsp;<span className="text-purple-400">with</span> sr.Microphone() <span className="text-purple-400">as</span> src:</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;audio = r.listen(src)</div>
                    <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> r.recognize_google(audio)</div>
                    <div>&nbsp;</div>
                    <div><span className="text-slate-500"># JARVIS is always listening...</span></div>
                    <div><span className="text-green-400">speak</span>(<span className="text-yellow-300">"Ready, Harshil."</span>)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover accent */}
          <div className="absolute -top-1 -right-1 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full -mr-20 -mt-20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Transition text */}
        <div className="flex items-center justify-center gap-6 py-12">
          <div className="h-px bg-gradient-to-r from-transparent to-slate-700 flex-1" />
          <p className="text-slate-400 text-center whitespace-nowrap">And when systems can think, they can scale.</p>
          <div className="h-px bg-gradient-to-l from-transparent to-slate-700 flex-1" />
        </div>
      </div>
    </section>
  )
}
