"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [fine, setFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Trailing spring coordinates for fluid outer halo
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setFine(mq.matches);
    updatePointer();
    mq.addEventListener("change", updatePointer);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, select, textarea, [role='button'], .cursor-pointer, [draggable='true']")
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      const newClick = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev.slice(-4), newClick]);
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      mq.removeEventListener("change", updatePointer);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!fine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Interactive Outer Hover Halo */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.6 : isMouseDown ? 0.8 : 0.9,
          opacity: isHovered ? 0.85 : 0.25,
          borderColor: isHovered ? "#FF4D00" : "#141414",
          backgroundColor: isHovered ? "rgba(255, 77, 0, 0.12)" : "rgba(20, 20, 20, 0)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed top-0 left-0 -ml-4 -mt-4 size-8 rounded-full border-2 transition-colors"
      />

      {/* Main Angled Pointer Cursor (Matching User Design) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 1.25 : isMouseDown ? 0.9 : 1,
          rotate: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="fixed top-0 left-0"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[1.5px_2.5px_5px_rgba(0,0,0,0.4)]"
        >
          {/* Obsidian dark body with cream outline matching brand theme */}
          <path
            d="M3 2.5L22 11.5L13 14.5L9 23.5L3 2.5Z"
            fill="#141414"
            stroke="#FAF3E5"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Inner subtle accent line for depth */}
          <path
            d="M5.5 5.5L17 11L11.5 13L8.5 18.5L5.5 5.5Z"
            fill="#262626"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Dynamic Click Ripples */}
      {clicks.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 1, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ left: c.x, top: c.y }}
          onAnimationComplete={() => {
            setClicks((prev) => prev.filter((item) => item.id !== c.id));
          }}
          className="fixed -ml-5 -mt-5 size-10 rounded-full border-2 border-[#FF4D00] bg-[#FFC72E]/30"
        />
      ))}
    </div>
  );
}

