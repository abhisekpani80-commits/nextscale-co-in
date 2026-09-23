'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CinematicAtmosphere: React.FC = () => {
  // Use scroll progress for organic light drift
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to gentle y-axis shifts
  const yDrift1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const yDrift2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const yDrift3 = useTransform(scrollYProgress, [0, 1], ['-5%', '10%']);
  const yDrift4 = useTransform(scrollYProgress, [0, 1], ['5%', '-10%']);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0b0b0e]">
      {/* 
        Multi-colored ambient light orbs
        Using motion.div for slow breathing oscillation and scroll drift
      */}
      
      {/* Warm Orange Orb */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[60%] w-[50%] rounded-full opacity-[0.25] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #f97316 0%, transparent 70%)',
          y: yDrift1,
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: ['0%', '5%', '0%'],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pink/Magenta Orb */}
      <motion.div
        className="absolute top-[10%] -right-[20%] h-[70%] w-[60%] rounded-full opacity-[0.2] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          y: yDrift2,
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: ['0%', '-8%', '0%'],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Subtle Purple/Violet Orb */}
      <motion.div
        className="absolute -bottom-[20%] -left-[20%] h-[80%] w-[70%] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          y: yDrift3,
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: ['0%', '4%', '0%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Warm Amber Orb */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[40%] rounded-full opacity-[0.2] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)',
          y: yDrift4,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: ['0%', '-5%', '0%'],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Subtle SVG film-grain/noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default CinematicAtmosphere;
