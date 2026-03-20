'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DomainsSection from '@/components/DomainsSection'
import CADSection from '@/components/CADSection'
import IoTSection from '@/components/IoTSection'
import AISection from '@/components/AISection'
import StackSection from '@/components/StackSection'
import SkillsSection from '@/components/SkillsSection'
import TerminalSection from '@/components/TerminalSection'
import MetricsSection from '@/components/MetricsSection'
import NextTargetSection from '@/components/NextTargetSection'
import FinalImpactSection from '@/components/FinalImpactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorGlow({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Cursor glow effect */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            left: `${cursorGlow.x}px`,
            top: `${cursorGlow.y}px`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Ambient light effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <DomainsSection />
        <CADSection />
        <IoTSection />
        <AISection />
        <StackSection />
        <TerminalSection />
        <MetricsSection />
        <NextTargetSection />
        <SkillsSection />
        <FinalImpactSection />
        <Footer />
      </div>
    </main>
  )
}
