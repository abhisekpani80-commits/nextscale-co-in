import React from "react";

export function NextscaleLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 5h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        fill="#141414"
      />
      <path
        d="M11 20V11l8 9v-9"
        stroke="#FF4D00"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="23.5" cy="8.5" r="1.5" fill="#FFC72E" />
    </svg>
  );
}
