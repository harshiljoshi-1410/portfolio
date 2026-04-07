'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = ['domains', 'cad', 'iot', 'ai', 'terminal', 'metrics', 'targets', 'skills', 'impact', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#domains', label: 'Domains' },
    { href: '#cad', label: 'CAD' },
    { href: '#iot', label: 'IoT' },
    { href: '#ai', label: 'AI' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-lg shadow-black/30' : 'bg-transparent border-b border-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/60 group-hover:scale-110 transition-all duration-300">
            H
          </div>
          <span className="font-bold text-lg hidden sm:block">
            Harshil<span className="gradient-text-cyan-purple">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl btn-gradient-cyan text-sm font-semibold transition-all duration-300"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 glass-nav">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-2 rounded-xl btn-gradient-cyan text-sm font-semibold text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
