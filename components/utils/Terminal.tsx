'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string;
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  title?: string;
  height?: string;
}

export function Terminal({ lines, title = 'Terminal', height = 'h-80' }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, index) => {
      const delay = (line.delay || 0) + index * 100;
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
      }, delay);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [lines]);

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-black">
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-xs font-medium text-slate-400">{title}</span>
      </div>

      <div className={`${height} overflow-y-auto p-4 font-mono text-sm space-y-1`}>
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2"
          >
            {line.type === 'input' && (
              <>
                <span className="text-cyan-400 select-none">$</span>
                <span className="text-white">{line.text}</span>
              </>
            )}
            {line.type === 'output' && (
              <span className="text-slate-300">{line.text}</span>
            )}
            {line.type === 'system' && (
              <span className="text-yellow-600">{line.text}</span>
            )}
          </motion.div>
        ))}
        {displayedLines.length > 0 && (
          <motion.span
            className="inline-block w-2 h-5 bg-cyan-400 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    </div>
  );
}
