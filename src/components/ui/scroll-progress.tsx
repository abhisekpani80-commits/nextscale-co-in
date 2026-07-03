"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[9990] h-[2px] bg-gradient-to-r from-primary via-primary to-accent-2"
    />
  );
}
