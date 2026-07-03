"use client";

import { motion, type Variants } from "framer-motion";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import DecryptedText from "@/components/DecryptedText";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
    <section className={cn("relative overflow-hidden border-b border-border pt-32 pb-20 sm:pt-40 sm:pb-28", className)}>
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
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            <span className="h-px w-5 bg-primary/60" />
            <DecryptedText
              text={kicker}
              animateOn="view"
              sequential
              speed={60}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—"
              className="text-primary"
              encryptedClassName="text-primary/40"
            />
          </motion.span>
        )}
        <motion.h1
          variants={item}
          className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        {children && <motion.div variants={item} className="mt-8">{children}</motion.div>}
      </motion.div>
    </section>
  );
}
