'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTag?: boolean;
  animated?: boolean;
  className?: string;
  iconOnly?: boolean;
}

const sizeConfig = {
  sm: { icon: 28, text: 'text-xl', badge: 'text-[8px]', gap: 'gap-2' },
  md: { icon: 40, text: 'text-3xl', badge: 'text-[10px]', gap: 'gap-3' },
  lg: { icon: 56, text: 'text-5xl', badge: 'text-xs', gap: 'gap-4' },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTag = true,
  animated = true,
  className = '',
  iconOnly = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const config = sizeConfig[size];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hoverAnimation = animated
    ? {
        y: [-2, 2, -2],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      }
    : {};

  return (
    <div
      className={`flex items-center ${config.gap} group cursor-pointer ${className}`}
      aria-label="NextScale Logo"
    >
      {/* 3D Icon Container */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Glow */}
        {animated && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Isometric SVG Logo */}
        <motion.div
          className="relative z-10"
          style={{ width: config.icon, height: config.icon }}
          animate={animated ? hoverAnimation : {}}
          whileHover={animated ? { scale: 1.1, rotateZ: 2 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0px 10px 20px rgba(249, 115, 22, 0.4))' }}
          >
            <defs>
              <linearGradient id="face-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="face-right" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#831843" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
              <linearGradient id="face-top" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="50%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
              <linearGradient id="neon-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Left Face - Gradient */}
            <path d="M50 95 L15 75 L15 25 L50 45 Z" fill="url(#face-left)" />
            {/* Right Face - Shadow */}
            <path d="M50 95 L85 75 L85 25 L50 45 Z" fill="url(#face-right)" />
            {/* Top Face - Light */}
            <path d="M50 5 L85 25 L50 45 L15 25 Z" fill="url(#face-top)" />

            {/* Inner Geometry creating N & S abstract depth */}
            <path d="M50 45 L50 85 L35 76 L35 60 Z" fill="#ffffff" fillOpacity="0.15" />
            <path d="M50 45 L65 36 L65 60 L50 69 Z" fill="#000000" fillOpacity="0.25" />
            <path d="M50 15 L65 24 L50 33 L35 24 Z" fill="#ffffff" fillOpacity="0.5" />

            {/* Neon glowing edges */}
            <path
              d="M50 95 L50 45 L15 25 M50 45 L85 25 M50 5 L15 25 M50 5 L85 25"
              stroke="url(#neon-edge)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 75 L50 95 L85 75 M15 25 L15 75 M85 25 L85 75"
              stroke="#000000"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Core highlight dot */}
            <circle cx="50" cy="45" r="3" fill="#ffffff" opacity="0.9" style={{ filter: 'blur(1px)' }} />
          </svg>
        </motion.div>
      </div>

      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col justify-center select-none">
          <div className={`font-heading tracking-tight flex items-center ${config.text}`}>
            <span className="font-bold text-white drop-shadow-sm">Next</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-pink-500 to-amber-300 relative">
              Scale
              {/* Shimmer Effect */}
              {animated && isMounted && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 1.5,
                  }}
                  style={{
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                />
              )}
            </span>
          </div>

          {/* Tag */}
          {showTag && (
            <div className="flex items-center -mt-1">
              <span
                className={`font-mono font-semibold tracking-[0.25em] text-white/40 uppercase ${config.badge}`}
              >
                AI STUDIO
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
