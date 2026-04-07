'use client'

import { useEffect } from 'react'
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
import AstroBackground from '@/components/AstroBackground'

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="cv-wrapper relative min-h-screen text-white">
      <AstroBackground />

      {/* Content */}
      <div className="relative z-[10]">
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
