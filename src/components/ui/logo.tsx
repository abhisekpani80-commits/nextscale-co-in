import React from "react";

export function NextscaleLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ns-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27d0ed" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#e040fb" />
        </linearGradient>
      </defs>
      {/* 
        Concept 1: Two clean geometric strokes forming an N, 
        with the diagonal split creating a negative-space S.
      */}
      <path
        d="M7 26V6L20 21"
        stroke="url(#ns-logo-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11L25 26V6"
        stroke="url(#ns-logo-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
