"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

interface MagneticCtaButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function MagneticCtaButton({
  href,
  onClick,
  children = "Add 24/7 WhatsApp Concierge",
  icon = <MessageSquare className="w-4 h-4 fill-current shrink-0" />,
  showArrow = true,
  className = "",
  target,
  rel,
  variant = "primary",
  size = "md",
}: MagneticCtaButtonProps) {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Magnetic pull distance (clamped to max 6px for subtle luxury feel)
    const pullX = Math.max(-6, Math.min(6, (e.clientX - centerX) * 0.18));
    const pullY = Math.max(-6, Math.min(6, (e.clientY - centerY) * 0.18));
    setOffset({ x: pullX, y: pullY });

    // Spotlight coordinate inside button
    const spotX = e.clientX - rect.left;
    const spotY = e.clientY - rect.top;
    setSpotlight({ x: spotX, y: spotY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs rounded-xl",
    md: "px-7 py-3.5 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-2xl",
  }[size];

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
      }}
      className={`group relative inline-flex items-center justify-center select-none cursor-pointer ${className}`}
    >
      {/* Ambient Pulsing Aura Behind Button */}
      {variant === "primary" && (
        <span
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-xl group-hover:scale-105 transition-all duration-300 -z-10"
          aria-hidden="true"
        />
      )}

      {/* Button Surface */}
      <span
        className={`relative w-full h-full inline-flex items-center justify-center gap-2.5 font-bold tracking-tight overflow-hidden transition-all duration-200 active:scale-[0.97] ${sizeClasses} ${
          variant === "primary"
            ? "text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50"
            : "text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
        }`}
      >
        {/* Dynamic Cursor Spotlight Effect */}
        <span
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 90px at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.32), transparent 80%)`,
          }}
          aria-hidden="true"
        />

        {/* Diagonal Sweeping Light Shimmer */}
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] group-hover:animate-[btn-shimmer_1.1s_ease-in-out_infinite]" />
        </span>

        {/* Left Icon with Playful Hover Scale & Tilt */}
        {icon && (
          <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-[-10deg]">
            {icon}
          </span>
        )}

        {/* Label */}
        <span className="relative z-10 font-bold tracking-tight">
          {children}
        </span>

        {/* Right Arrow with Smooth Slide Out */}
        {showArrow && (
          <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0">
      {content}
    </button>
  );
}

export default MagneticCtaButton;
