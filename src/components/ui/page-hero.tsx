"use client";

import { motion, type Variants } from "framer-motion";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function PageHero({
  kicker,
  title,
  description,
  children,
  align = "center",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-36 sm:pb-24", className)}>
      {/* Interactive dot field */}
      <DotGridBackdrop />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-accent-2/8 blur-3xl" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_90%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={cn(
          "relative mx-auto max-w-4xl px-5 sm:px-8",
          align === "center" && "flex flex-col items-center text-center",
        )}
      >
        {kicker && (
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]"
          >
            <span className="h-px w-5 bg-[#1A56DB]/60" />
            <span>{kicker}</span>
          </motion.span>
        )}
        <motion.h1
          variants={item}
          className="mt-4 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl text-[#0F0E0D]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#6B6860] sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        {children && <motion.div variants={item} className="mt-8">{children}</motion.div>}
      </motion.div>
    </section>
  );
}
