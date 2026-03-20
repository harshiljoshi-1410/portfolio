'use client'

export default function StackSection() {
  const stacks = [
    {
      label: 'Frontend',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-400/30',
      items: [
        { icon: '⚛️', name: 'React.js' },
        { icon: '🎨', name: 'HTML / CSS / JS' },
        { icon: '💨', name: 'Tailwind CSS' },
        { icon: '✨', name: 'Animations & UI/UX' },
      ],
    },
    {
      label: 'Backend',
      color: 'from-green-500/20 to-emerald-600/10',
      borderColor: 'border-green-400/30',
      items: [
        { icon: '🟢', name: 'Node.js / Express' },
        { icon: '🐍', name: 'Python / Flask' },
        { icon: '🔌', name: 'REST APIs' },
        { icon: '🔐', name: 'Auth & Security' },
      ],
    },
    {
      label: 'Database & Tools',
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-400/30',
      items: [
        { icon: '🗄️', name: 'MongoDB / MySQL' },
        { icon: '☁️', name: 'Firebase' },
        { icon: '🐙', name: 'Git / GitHub' },
        { icon: '🚀', name: 'Deployment & CI' },
      ],
    },
    {
      label: 'Automation',
      color: 'from-cyan-500/20 to-blue-600/10',
      borderColor: 'border-cyan-400/30',
      items: [
        { icon: '🤖', name: 'Python Scripts' },
        { icon: '📊', name: 'Data Pipelines' },
        { icon: '📣', name: 'Digital Marketing' },
        { icon: '📈', name: 'SEO & Analytics' },
      ],
    },
  ]

  return (
    <section id="fullstack" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Automation & Digital Systems</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for the web.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              End to end.
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            From UI to database, I build complete systems. Frontend that feels premium, backend that scales, and automation that saves hours.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-2xl border border-slate-700/50 bg-gradient-to-br ${stack.color} ${stack.borderColor} backdrop-blur-sm transition-all duration-500 hover:border-opacity-60 hover:shadow-lg overflow-hidden`}
              style={{
                boxShadow: 'var(--tw-shadow)',
              }}
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stack.color} -z-10 rounded-2xl`} />

              <div className="relative space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">{stack.label}</h3>
                
                <div className="space-y-3">
                  {stack.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-16 h-16 border border-white/5 rounded-full group-hover:border-white/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
