'use client'

import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                H
              </div>
              <span className="font-bold text-lg">
                Harshil<span className="gradient-text-cyan-purple">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              ECE engineer turning ideas into intelligent systems. Building with CAD, IoT, AI, and Full-Stack Dev.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { href: '#domains', label: 'Domains' },
                { href: '#cad', label: 'CAD Projects' },
                { href: '#iot', label: 'IoT Systems' },
                { href: '#ai', label: 'AI & Automation' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:harshiljoshi1410@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Mail size={18} className="group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">harshiljoshi1410@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/harshil-joshi-141006HJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Linkedin size={18} className="group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/harshiljoshi-1410"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Github size={18} className="group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 Harshil Joshi. Built with React, Next.js, and Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass hover:glow-cyan text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
