'use client';

import React, { ReactNode } from 'react';

export interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  reverse = false,
  duration = 40,
  className = '',
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
      <div
        className={`group flex overflow-hidden relative ${className}`}
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className={`flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {children}
        </div>
        <div
          className={`flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
