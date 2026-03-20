export async function GET() {
  const data = [
    {
     icon: '🤖',
     title: 'AI Systems ',
     description: 'Building intelligent assistants, automation pipelines, and ML-powered tools that think and act.',
     tags: ['AI', 'ML', 'Automation'],
     color: 'from-purple-500/20 to-blue-500/20',
     hover: 'hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20',
    },
    {
      icon: '🌱',
      title: 'IoT Engineering',
      description: 'Designing sensor-based systems and connected hardware that bridge physical and digital worlds.',
      tags: ['ESP8266', 'Sensors', 'Embedded'],
      color: 'from-green-500/20 to-emerald-500/20',
      hover: 'hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20',
    },
    {
      icon: '🔧',
      title: 'CAD & Design',
      description: 'Creating structured layouts, multi-room plans, and dimension-based designs with precision.',
      tags: ['Drafting', 'Planning', 'Design'],
      color: 'from-orange-500/20 to-amber-500/20',
      hover: 'hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/20',
    },
    {
      icon: '⚡',
      title: 'Automation & Digital Systems',
      description: 'Developing tools, workflows, and digital systems that optimize processes and execution.',
      tags: ['Web', 'Systems', 'Execution'],
      color: 'from-blue-500/20 to-cyan-500/20',
      hover: 'hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20',
    },
  ];

  return Response.json(data);
}