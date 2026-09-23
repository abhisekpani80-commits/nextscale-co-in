'use client';

import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

export interface KineticHeadingProps {
  line1: string;
  lineMuted: string;
  lineGradient: string;
  className?: string;
  activeKey?: string | number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    x: -12,
    scale: 0.94,
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const KineticHeading: React.FC<KineticHeadingProps> = ({
  line1,
  lineMuted,
  lineGradient,
  className = '',
  activeKey = 'default',
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.04] tracking-tight flex flex-col ${className}`}
      >
        <motion.div variants={itemVariants} className="text-white">
          {line1}
        </motion.div>
        <motion.div variants={itemVariants} className="text-[#8e8e9c]">
          {lineMuted}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#fbbf24]"
        >
          {lineGradient}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default KineticHeading;
