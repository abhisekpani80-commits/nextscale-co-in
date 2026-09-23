"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "fade";
}

/**
 * Scroll-triggered reveal animation.
 * Uses IntersectionObserver — zero JS on initial render.
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const initStyle: React.CSSProperties = {
    opacity: 0,
    transition: `opacity 700ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 700ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
  };

  if (direction === "up") {
    initStyle.transform = "translateY(28px)";
  } else if (direction === "left") {
    initStyle.transform = "translateX(-32px)";
  } else if (direction === "right") {
    initStyle.transform = "translateX(32px)";
  } else {
    initStyle.transform = "none";
  }

  return (
    <div ref={ref} className={className} style={initStyle}>
      {children}
    </div>
  );
}
