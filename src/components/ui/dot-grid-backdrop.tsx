"use client";

import { useEffect, useState } from "react";
import DotGrid, { type DotGridProps } from "@/components/DotGrid";
import { cn } from "@/lib/utils";

/**
 * Brand-tuned, interactive dot-field backdrop (React Bits <DotGrid />).
 *
 * Drops into any `position: relative` section as a full-bleed background layer.
 * Dots rest as a near-invisible slate grid and bloom electric-cyan around the
 * cursor; quick swipes fling them with inertia and a click sends a shockwave.
 * A radial mask fades the field toward the edges so foreground copy stays
 * legible, and the whole thing is skipped for `prefers-reduced-motion` users.
 */
export function DotGridBackdrop({
  className,
  maskClassName = "[mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,#000_30%,transparent_78%)]",
  ...props
}: DotGridProps & { maskClassName?: string }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-70",
        maskClassName,
        className,
      )}
    >
      <DotGrid
        className="!p-0"
        dotSize={3}
        gap={26}
        baseColor="#1b2a33"
        activeColor="#27d0ed"
        proximity={120}
        speedTrigger={100}
        shockRadius={220}
        shockStrength={4}
        resistance={680}
        returnDuration={1.4}
        {...props}
      />
    </div>
  );
}
