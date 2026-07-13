"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES, PORTFOLIO, SITE, waLink } from "@/lib/site";
import { NextscaleLogo } from "@/components/ui/logo";

// Custom stagger container for text entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BrandLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter featured and non-demo projects for the asymmetrical selected work section
  const featuredProjects = PORTFOLIO.filter((p) => p.featured && !p.isDemo).slice(0, 3);

  // Process steps details
  const steps = [
    { number: "01", label: "Map Handoff", desc: "Document the precise operational path from intake to outcome." },
    { number: "02", label: "Build System", desc: "Ship the clean, custom Next.js product surface with core logic." },
    { number: "03", label: "Automate Work", desc: "Connect Supabase or AI agents to remove the manual loops." },
    { number: "04", label: "Scale Output", desc: "Measure performance directly and optimize bottlenecks." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10 selection:text-primary">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-4 py-12 md:px-8 bg-background">
        {/* Subtle grid background and abstract geometric mesh */}
        <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
        <div className="absolute top-[25%] left-[55%] -z-10 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#27d0ed]/8 to-[#a78bfa]/5 blur-[90px] opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Space breath top */}
        <div className="hidden md:block" />

        {/* Hero content */}
        <div className="mx-auto max-w-4xl w-full text-center mt-20 md:mt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Title / Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              We build software that runs the work.
            </motion.h1>

            {/* Subline: exactly 9 words (within the 8-12 words rule) */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg font-sans text-sm font-normal uppercase tracking-[0.16em] text-muted-foreground/80 sm:text-base"
            >
              Custom systems and automations that remove manual bottlenecks.
            </motion.p>

            {/* Primary CTA */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 w-full sm:w-auto sm:flex-row items-center justify-center">
              <Link
                href="/contact"
                className="group relative flex h-12 w-full sm:w-52 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-[0_8px_30px_rgb(22,28,45,0.06)]"
              >
                Start a build review
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue / Bottom section */}
        <div className="flex justify-center pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4, y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>Scroll to explore</span>
            <div className="h-10 w-px bg-muted-foreground/30" />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-t border-b border-border/60 bg-background/50 py-6 md:py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            founder-led product engineering
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-heading text-lg font-medium text-foreground/80 md:text-xl">
            <span>30+ Shipped Live</span>
            <span className="opacity-30">/</span>
            <span>Boutique Quality</span>
            <span className="opacity-30">/</span>
            <span>Zero Bloat</span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="relative px-4 py-20 md:px-8 md:py-28 overflow-hidden bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 max-w-xl mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">Capabilities</span>
            <h2 className="font-heading text-4xl leading-tight font-normal text-foreground sm:text-5xl">
              Fewer loose ends. More leverage.
            </h2>
          </div>

          {/* Service grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group relative flex flex-col justify-between border border-border/80 bg-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:-translate-y-1"
                >
                  <div>
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-muted/60 text-foreground/80 group-hover:text-primary transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-normal leading-snug">{service.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                    Explore Offering
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section className="relative px-4 py-20 md:px-8 md:py-28 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 max-w-xl mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">Selected Work / Proof</span>
            <h2 className="font-heading text-4xl leading-tight font-normal text-foreground sm:text-5xl">
              Real builds that run real operations.
            </h2>
          </div>

          {/* Asymmetrical grid design */}
          <div className="grid gap-8 md:grid-cols-12">
            {/* Dominated Card - Project 1 */}
            {featuredProjects[0] && (
              <article className="project-card group md:col-span-8 relative flex flex-col justify-between overflow-hidden border border-border bg-card p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                    {featuredProjects[0].category}
                  </span>
                  <h3 className="mt-6 font-heading text-3xl font-normal text-foreground md:text-4xl">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    {featuredProjects[0].built}
                  </p>
                </div>
                {featuredProjects[0].result && (
                  <div className="mt-8 text-xl font-heading italic text-primary/90 font-medium">
                    {featuredProjects[0].result}
                  </div>
                )}
                {/* Visual Placeholder for Mockup */}
                <div className="mt-8 relative h-60 w-full overflow-hidden rounded-xl bg-muted/40 border border-border/40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">System Layout</span>
                </div>
              </article>
            )}

            {/* Smaller card right - Project 2 */}
            {featuredProjects[1] && (
              <article className="project-card group md:col-span-4 relative flex flex-col justify-between overflow-hidden border border-border bg-card p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                    {featuredProjects[1].category}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-normal text-foreground">
                    {featuredProjects[1].title}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {featuredProjects[1].built}
                  </p>
                </div>
                {featuredProjects[1].result && (
                  <div className="mt-8 text-sm font-mono text-primary font-bold">
                    {featuredProjects[1].result}
                  </div>
                )}
                {/* Visual Placeholder */}
                <div className="mt-6 relative h-40 w-full overflow-hidden rounded-xl bg-muted/40 border border-border/40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Interface</span>
                </div>
              </article>
            )}

            {/* Offset Card below - Project 3 */}
            {featuredProjects[2] && (
              <article className="project-card group md:col-start-3 md:col-span-8 relative flex flex-col justify-between overflow-hidden border border-border bg-card p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                    {featuredProjects[2].category}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-normal text-foreground md:text-3xl">
                    {featuredProjects[2].title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
                    {featuredProjects[2].built}
                  </p>
                </div>
                {featuredProjects[2].result && (
                  <div className="mt-6 text-base font-heading italic text-primary/80">
                    {featuredProjects[2].result}
                  </div>
                )}
                {/* Visual Placeholder */}
                <div className="mt-6 relative h-44 w-full overflow-hidden rounded-xl bg-muted/40 border border-border/40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">Workflow Module</span>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="relative px-4 py-20 md:px-8 md:py-28 border-t border-border/60 bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 max-w-xl mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">Process / How we build</span>
            <h2 className="font-heading text-4xl leading-tight font-normal text-foreground sm:text-5xl">
              Fast iteration. Zero friction.
            </h2>
          </div>

          {/* Spatial horizontal steps grid on desktop */}
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col border border-border/60 p-6 rounded-2xl bg-card">
                <span className="font-mono text-3xl font-light text-primary/40 leading-none">{step.number}</span>
                <h3 className="mt-4 font-heading text-xl font-normal leading-snug">{step.label}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER / ABOUT */}
      <section className="relative px-4 py-20 md:px-8 md:py-28 border-t border-border/60 bg-muted/10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">Founder-Led</span>

          {/* Minimal Avatar/Illustration representation */}
          <div className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full border border-border bg-card shadow-sm">
            <span className="font-heading text-2xl font-light text-primary">AP</span>
          </div>

          <h2 className="mt-6 font-heading text-3xl font-normal text-foreground">Abhisek Pani</h2>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/80 mt-1">Engineer & Founder</p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
            NextScale is completely run by me. There are no sales layers or account managers. 
            You work directly with the builder to design, build, and deploy systems that run your operations.
          </p>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 border-t border-border/60 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">Start Building</span>
          <h2 className="mt-6 font-heading text-4xl font-normal leading-none text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Let's build the system.
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md mx-auto">
            Get in touch to map your workflow and see exactly what we can automate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full sm:w-52 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
            >
              Start a build review
              <ShieldCheck className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
