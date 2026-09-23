"use client";

import React, { useRef, useState, useEffect } from "react";

interface GravityTiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function GravityTiltCard({ children, className = "", intensity = 15 }: GravityTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);

  useEffect(() => {
    // Only enable 3D tilt on devices with physical mouse hover (prevents stuck tilts on mobile)
    setIsHoverEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (((y - centerY) / centerY) * -intensity).toFixed(2);
    const rotateY = (((x - centerX) / centerX) * intensity).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    if (!isHoverEnabled) return;
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`card-gravity ${className}`}
    >
      {children}
    </div>
  );
}
