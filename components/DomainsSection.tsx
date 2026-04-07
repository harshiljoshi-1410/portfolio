'use client'

import { useEffect, useState } from "react";

export default function DomainsSection() {

  const [domains, setDomains] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/domains");
        const data = await res.json();
        setDomains(data);
      } catch (err) {
        console.error("Error fetching domains:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="domains" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-6 text-center reveal">
          <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
            What I'm Building Towards
          </div>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="neon-cyan">Four domains.</span>
            <span className="block neon-pink">One builder.</span>
          </h2>
        </div>

        {/* Domain Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {domains.map((domain, idx) => (
            <article
              key={idx}
              className={`reveal reveal-delay-${(idx % 4) + 1} group relative p-8 rounded-2xl glass-card bg-gradient-to-br ${domain.color} overflow-hidden cursor-pointer`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${domain.color} rounded-2xl -z-10`} />

              {/* Content */}
              <div className="relative space-y-4">
                <div className="text-4xl">{domain.icon}</div>
                <h3 className="text-xl font-bold text-white">{domain.title}</h3>
                <p className="text-slate-300 leading-relaxed">{domain.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {domain.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full glass text-slate-300 border-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover light */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}