'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { RollingButton } from '@/components/ui/RollingButton';

const headlines = [
  'Revenue Machines, Not Just Websites',
  'AI Agents That Never Sleep',
  'Your Digital Front Door, Rebuilt',
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-Surface text-white pt-20 pb-12">
      {/* Background Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8"
        >
          <div className="relative w-2 h-2 rounded-full bg-[#22c55e]">
            <div className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-75" />
          </div>
          <span className="text-xs font-semibold tracking-wide uppercase text-white/80 font-heading">
            AI-First Digital Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="h-[120px] sm:h-[90px] md:h-[150px] flex items-center justify-center relative w-full mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-5xl md:text-7xl font-extrabold tracking-tight font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
            >
              {headlines[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 max-w-xl mx-auto text-lg md:text-xl font-body mb-10"
        >
          We engineer high-converting websites and autonomous AI systems for ambitious businesses. Zero leaks. Shipped in 7 days.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <RollingButton href="https://wa.me/919556436685">
            Book a Call ↗
          </RollingButton>
          <RollingButton href="#case-studies" variant="outline">
            See Our Work
          </RollingButton>
        </motion.div>

      </div>

      {/* Floating Stat Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl z-20"
      >
        <div className="flex flex-col">
          <span className="text-xl font-bold font-heading text-white">92%</span>
          <span className="text-xs text-white/50 font-body uppercase tracking-wider">Faster Lead Triage</span>
        </div>
      </motion.div>

    </section>
  );
}
