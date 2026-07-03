"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { MobileHeroBg } from "@/components/ui/mobile-hero-bg";

const ShaderAnimation = dynamic(
  () => import("@/components/ui/shader-animation").then((m) => m.ShaderAnimation),
  { ssr: false }
);

const up: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WORDS = [
  "runs your business.",
  "books your clients.",
  "answers your DMs.",
  "grows your brand.",
  "scales your team.",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [renderShader, setRenderShader] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px) or (pointer: coarse)").matches;
    setRenderShader(!isMobile);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden">
      {/* Shader bg / Mobile animated bg fallback */}
      <div className="absolute inset-0 -z-20">
        {renderShader ? <ShaderAnimation /> : <MobileHeroBg />}
      </div>

      {/* Premium ambient glows — replaced letter glitch */}
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden size-96 rounded-full bg-[#27d0ed]/8 blur-3xl lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden size-80 rounded-full bg-[#e040fb]/6 blur-3xl lg:block" />

      {/* Overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-background/70 to-transparent" />

      {/*
        px-4 → mobile minimum padding
        sm:px-6 → small screens
        sm:px-10 → kept for larger small screens
        lg:pt-32 → desktop top padding
      */}
      <div className="mx-auto w-full max-w-5xl px-4 pt-28 pb-20 text-center sm:px-10 lg:pt-32">
        {/* Status pill */}
        <motion.div
          custom={0}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/90 backdrop-blur"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-primary">v2.0</span>
          <span className="h-3 w-px bg-primary/30" />
          <span>shipping · bhubaneswar</span>
          <span className="h-3 w-px bg-primary/30" />
          <span>hiring now</span>
        </motion.div>

        {/*
          Headline clamp:
          - min: 2rem  (≈32px) — readable on 320px phones
          - preferred: 8vw   — scales with viewport
          - max: 6.5rem       — caps out on desktop
          The animated word line keeps h-[1.3em] overflow-hidden for the
          slide effect, but leading-[1.05] tightens up well on mobile too.
        */}
        <motion.h1
          custom={1}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-8 font-heading text-[clamp(2rem,8vw,6.5rem)] font-semibold leading-[1.02] tracking-tight"
        >
          <span className="block text-foreground/55">We build</span>
          <span className="mx-auto block w-fit bg-gradient-to-r from-[#27d0ed] to-[#e040fb] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(39,208,237,0.25)]">
            AI that
          </span>
          <span className="relative block h-[1.3em] overflow-hidden text-foreground">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 38, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -38, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 block leading-tight text-foreground"
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subline — text-base (16px) on mobile, text-lg on sm+ */}
        <motion.p
          custom={2}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          From exam-prep platforms to 24/7 AI receptionists.{" "}
          <span className="text-foreground/85">We ship products and digital infrastructure</span>{" "}
          for Indian businesses — in days, not months.
        </motion.p>

        {/*
          CTAs:
          - flex-col w-full on mobile so each button fills the row (easy touch target)
          - sm:flex-row sm:w-auto reverts to horizontal pill row
          - h-12 (48px) satisfies the ≥44px touch target requirement on all sizes
        */}
        <motion.div
          custom={3}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
        >
          <Link
            href="/products"
            className={cn(
              buttonVariants(),
              "group h-12 w-full gap-2 px-7 text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/20 sm:w-auto",
            )}
          >
            Explore our products
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 w-full gap-2 px-7 text-base backdrop-blur transition-all duration-300 hover:bg-card/85 hover:scale-[1.02] active:scale-[0.98] sm:w-auto",
            )}
          >
            See our services
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-12 w-full gap-2 px-5 text-base text-muted-foreground hover:text-primary transition-colors duration-300 sm:w-auto",
            )}
          >
            or WhatsApp us →
          </a>
        </motion.div>

        {/*
          Tech stack chips:
          - gap-x-1.5 gap-y-1.5 on mobile (tighter) → gap-x-2 gap-y-2 on sm+
          - flex-wrap already present; chips are small enough to fit 3–4 per row on 320px
        */}
        <motion.div
          custom={3.4}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 sm:gap-x-2 sm:gap-y-2"
        >
          <span className="text-muted-foreground/40">stack →</span>
          {["next 16", "react 19", "tailwind v4", "gsap", "three.js", "claude", "openai", "vercel"].map((s) => (
            <span
              key={s}
              className="rounded border border-border/60 bg-card/40 px-1.5 py-0.5 backdrop-blur"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/*
          Proof strip:
          - 2-col grid on mobile so the 4 stats sit in a 2×2 block instead of overflowing a flex row
          - gap-y-4 gives breathing room between rows on mobile
          - sm:flex sm:flex-wrap reverts to the original horizontal row on larger screens
        */}
        <motion.div
          custom={4}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-border/40 pt-7 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3"
        >
          {[
            { n: "25+", label: "websites shipped" },
            { n: "12+", label: "AI agents live" },
            { n: "2", label: "products built" },
            { n: "48h", label: "avg go-live time" },
          ].map(({ n, label }) => (
            <div key={label} className="flex items-baseline justify-center gap-1.5">
              <span className="font-heading text-xl font-semibold text-foreground">{n}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
          <div className="flex h-8 w-[18px] items-start justify-center rounded-full border border-border/50 p-1">
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="size-[3px] rounded-full bg-muted-foreground/60"
            />
          </div>
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
