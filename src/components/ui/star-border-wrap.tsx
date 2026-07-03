"use client";

import { cn } from "@/lib/utils";

/**
 * Brand-friendly wrapper around the React Bits StarBorder pattern — adds an
 * animated cyan star sweep along the top and bottom edges without forcing
 * the inner background/border the original component applies.
 */
export function StarBorderWrap({
  children,
  className,
  color = "#27d0ed",
  speed = "5s",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <div
        className="pointer-events-none absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] animate-star-movement-bottom rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="pointer-events-none absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] animate-star-movement-top rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
