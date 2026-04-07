'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Linkedin, MapPin } from 'lucide-react'
import Image from "next/image";

export default function Hero() {
  const [bootText, setBootText] = useState('')
  const fullText = 'Engineering Systems. Not Just Projects.'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setBootText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 reveal">
          {/* Boot line animation */}
          <div className="text-sm font-mono text-slate-400 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">{'>'}</span>
              <span className="text-cyan-300">{bootText}</span>
              <span className="w-2 h-5 bg-cyan-300 animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">
              Systems That Work.
              <span className="block gradient-text drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                Systems That Scale.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              I design, build, and connect real-world systems using CAD, IoT, and AI — turning ideas into working solutions.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
            {['Design', 'Build', 'Automate', 'Scale'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`px-4 py-2 rounded-xl ${
                  idx === 3
                    ? 'btn-gradient-cyan'
                    : 'glass text-slate-400 hover:text-white'
                } transition-all duration-300`}>
                  {step}
                </div>
                {idx < 3 && <ArrowRight size={16} className="text-slate-500" />}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="px-6 py-3 rounded-xl btn-gradient-cyan flex items-center gap-2 font-semibold">
              Explore My Work <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 rounded-xl btn-gradient-purple flex items-center gap-2 font-semibold">
              View My Proof
            </button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-t border-white/5 pt-8">
            <a href="mailto:harshiljoshi1410@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={16} />
              <span className="hidden sm:inline">harshiljoshi1410@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="hidden sm:block text-slate-700">•</span>
            <a href="https://linkedin.com/in/harshil-joshi-141006HJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <span className="hidden sm:block text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Rajkot, Gujarat, India</span>
            </span>
          </div>
        </div>

        {/* Right Visual - Profile Card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80 animate-float-slow">
            {/* Shimmer border ring */}
            <div className="absolute -inset-1 rounded-3xl shimmer-border" />
            {/* Glass card */}
            <div className="absolute inset-0 rounded-3xl glass" />
            
            {/* Inner content */}
            <div className="absolute inset-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm flex items-end justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                 <div className="animate-float">
                  <Image
                  src="/myphoto.jpg"
                  alt="Harshil"
                  width={2040}
                  height={360}
                  className="rounded-2xl object-cover w-full h-full ring-2 ring-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-500"
                  />
                 </div>
                
                  <p className="text-sm font-semibold text-white mt-2">Harshil Joshi</p>
                  <p className="text-xs gradient-text-cyan-purple font-medium">ECE • IoT • AI</p>
                  <p className="text-sm text-green-400 flex items-center justify-center gap-2 mt-2">
                     <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                       Available for Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full glass border border-white/10 flex items-center gap-2 whitespace-nowrap shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-slate-300">Available for Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
