"use client";

import React from "react";

export function MobileHeroBg() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#07090e]">
      {/* Subtly moving grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none filter blur-[80px] sm:blur-[100px] opacity-40">
        {/* Orb 1: Cyan */}
        <div 
          className="absolute rounded-full bg-[#27d0ed] will-change-transform"
          style={{
            top: "10%",
            left: "20%",
            width: "220px",
            height: "220px",
            animation: "float-cyan 24s infinite alternate ease-in-out",
          }}
        />

        {/* Orb 2: Purple */}
        <div 
          className="absolute rounded-full bg-[#a78bfa] will-change-transform"
          style={{
            bottom: "15%",
            right: "10%",
            width: "250px",
            height: "250px",
            animation: "float-purple 28s infinite alternate ease-in-out",
          }}
        />

        {/* Orb 3: Pink */}
        <div 
          className="absolute rounded-full bg-[#e040fb] will-change-transform"
          style={{
            top: "40%",
            right: "30%",
            width: "180px",
            height: "180px",
            animation: "float-pink 20s infinite alternate ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
