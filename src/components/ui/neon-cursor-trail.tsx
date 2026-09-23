"use client";

import { useEffect, useRef } from "react";

/** Neon cursor dot + ring that follows the mouse on desktop. */
export function NeonCursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    const DOT_SPEED = 0.9;   // dot tracks mouse fast
    const RING_SPEED = 0.12; // ring lags behind for trail effect

    const animate = () => {
      // Dot snaps to mouse
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }

      // Ring lerps toward mouse
      ringX += (mouseX - ringX) * RING_SPEED;
      ringY += (mouseY - ringY) * RING_SPEED;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest(
        'a, button, input, textarea, select, [role="tab"], [role="button"], label'
      );
      const isCta = target?.closest(".btn-neon-fill, .btn-neon");

      if (dotRef.current) {
        dotRef.current.style.width = isInteractive ? "12px" : "8px";
        dotRef.current.style.height = isInteractive ? "12px" : "8px";
      }
      if (ringRef.current) {
        ringRef.current.style.width = isInteractive ? "56px" : "40px";
        ringRef.current.style.height = isInteractive ? "56px" : "40px";
        ringRef.current.style.borderColor = isCta
          ? "var(--color-magenta)"
          : "var(--color-neon)";
        ringRef.current.style.boxShadow = isCta
          ? "0 0 12px var(--color-magenta-dim), inset 0 0 12px var(--color-magenta-dim)"
          : "0 0 10px var(--color-neon-dim), inset 0 0 10px var(--color-neon-dim)";
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
