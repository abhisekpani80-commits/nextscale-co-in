"use client";

import { useEffect, useRef, useState } from "react";

export default function FluidGlassCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [visible, setVisible] = useState(false);

  // Position and target values for smooth spring/inertia tracking
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const speed = 0.12; // Speed of spring lag (lower is smoother/laggier)

  useEffect(() => {
    // Hide default cursor on desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return; // Keep native touch controls on mobile

    setVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    // Track if hovering over buttons, links, or clickable items
    const onMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      if (
        targetEl.tagName === "A" ||
        targetEl.tagName === "BUTTON" ||
        targetEl.closest("a") ||
        targetEl.closest("button") ||
        targetEl.closest("[role='button']") ||
        targetEl.style.cursor === "pointer"
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    // Hide custom cursor when mouse leaves the viewport
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Animation loop for smooth lag
    let rafId: number;
    const updatePosition = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      
      pos.current.x += dx * speed;
      pos.current.y += dy * speed;

      if (cursorRef.current) {
        // Calculate dynamic tilt based on velocity (makes it look like liquid glass swaying)
        const tiltX = Math.min(Math.max(dy * 0.08, -12), 12);
        const tiltY = Math.min(Math.max(-dx * 0.08, -12), 12);
        
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
      
      rafId = requestAnimationFrame(updatePosition);
    };
    rafId = requestAnimationFrame(updatePosition);

    // Inject global stylesheet to hide default cursor
    const style = document.createElement("style");
    style.innerHTML = `
      @media (min-width: 768px) {
        body, a, button, [role='button'], input, textarea, select {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.head.removeChild(style);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHoveringClickable ? "70px" : "54px",
        height: isHoveringClickable ? "70px" : "54px",
        // Position circle centered on cursor
        marginTop: isHoveringClickable ? "-35px" : "-27px",
        marginLeft: isHoveringClickable ? "-35px" : "-27px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
        // Premium refraction lens style
        backdropFilter: isMouseDown
          ? "blur(12px) saturate(1.8) contrast(1.1) brightness(1.15)"
          : "blur(6px) saturate(1.5) contrast(1.05) brightness(1.08)",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        // Glass rim reflection
        border: "1.5px solid rgba(255, 255, 255, 0.35)",
        // Radial 3D glare highlight
        background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)",
        boxShadow: `
          inset 0 0 15px rgba(255, 255, 255, 0.4),
          0 10px 30px rgba(0, 0, 0, 0.35),
          0 0 25px rgba(39, 208, 237, ${isHoveringClickable ? 0.35 : 0.15})
        `,
        // Liquid movement transition for scale & glow
        transition: "width 0.3s cubic-bezier(0.19, 1, 0.22, 1), height 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.3s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.3s ease, backdrop-filter 0.15s ease",
        transformStyle: "preserve-3d",
        perspective: "500px",
        willChange: "transform, width, height, margin",
      }}
    >
      {/* Dynamic colored inner lens core */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "50%",
          border: isHoveringClickable
            ? "1px dashed rgba(224, 64, 251, 0.5)"
            : "1px solid rgba(39, 208, 237, 0.25)",
          background: isHoveringClickable
            ? "radial-gradient(circle, rgba(224, 64, 251, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(39, 208, 237, 0.05) 0%, transparent 70%)",
          transition: "border 0.3s ease, background 0.3s ease",
        }}
      />
    </div>
  );
}
