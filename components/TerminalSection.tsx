'use client';

import { motion } from 'framer-motion';
import { Terminal } from './utils/Terminal';
import { SectionMode } from './utils/SectionMode';

export default function TerminalSection() {
  const terminalLines = [
    { type: 'input' as const, text: '> whoami', delay: 200 },
    { type: 'output' as const, text: 'Harshil | ECE | System Builder', delay: 100 },
    { type: 'input' as const, text: '> domains', delay: 100 },
    { type: 'output' as const, text: 'CAD + IoT + AI + Automation', delay: 100 },
    { type: 'input' as const, text: '> current_focus', delay: 100 },
    { type: 'output' as const, text: 'Building real-world intelligent systems', delay: 100 },
    { type: 'input' as const, text: '> next_move', delay: 100 },
    { type: 'output' as const, text: 'Scaling systems beyond projects', delay: 100 },
  ];

  return (
    <section id="terminal" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionMode
        mode="Terminal"
        title="System Status"
        description="Core identity, domains, and current execution plan"
        accentColor="cyan"
      >
        <div className="mt-8">
          <Terminal lines={terminalLines} title="harshil@builder" height="h-80" />
        </div>
      </SectionMode>
      </div>
    </section>
  );
}
