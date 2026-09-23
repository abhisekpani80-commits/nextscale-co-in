'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';

export interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tiltIntensity?: number;
  glare?: boolean;
  depth?: number;
}

export function Card3D({
  children,
  className = '',
  spotlightColor = 'rgba(249, 115, 22, 0.16)',
  tiltIntensity = 10,
  glare = true,
  depth = 20,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [hasTouch, setHasTouch] = useState(false);

  useEffect(() => {
    // Check if the device has touch capabilities
    const checkTouch = () => {
      setHasTouch(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const spotlightX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  
  const background = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, ${spotlightColor}, transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasTouch) return;
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (hasTouch) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (hasTouch) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-[inherit] overflow-hidden border border-white/10"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ transform: `translateZ(-${depth}px)` }}
        />
        
        <div 
          className="relative z-10 w-full h-full"
          style={{ transform: `translateZ(${depth}px)` }}
        >
          {children}
        </div>

        {glare && (
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
            style={{
              background,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card3D;
