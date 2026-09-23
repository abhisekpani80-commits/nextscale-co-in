"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  Bot,
  Clock,
  Users,
  Sparkles,
  Move,
  Code2,
  Rocket,
  Terminal,
  Star,
  Flame,
  Compass,
  PhoneCall,
  User,
  Building2,
  Newspaper,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import CountUp from "@/components/CountUp";
import { waLink } from "@/lib/site";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

type Sticker = { id: string; label: string; x: number; y: number; rotate: number; bg: string; text: string; border: string };

const aboutStickers: Sticker[] = [
  { id: "founder", label: "FOUNDER-LED ✦", x: 25, y: 12, rotate: -4, bg: "bg-blue-600", text: "text-white", border: "border-blue-700" },
  { id: "handover", label: "100% CODE OWNERSHIP 🔒", x: 6, y: 32, rotate: 6, bg: "bg-sky-500", text: "text-white", border: "border-sky-600" },
  { id: "speed", label: "7-DAY SPRINT 🚀", x: 92, y: 18, rotate: -5, bg: "bg-blue-700", text: "text-white", border: "border-blue-800" },
  { id: "no-bs", label: "ZERO JARGON ⚡", x: 10, y: 84, rotate: 4, bg: "bg-slate-900", text: "text-white", border: "border-slate-800" },
];

function DraggableSticker({
  sticker,
  boundsRef,
  onMove,
}: {
  sticker: Sticker;
  boundsRef: React.RefObject<HTMLElement | null>;
  onMove: (id: string, x: number, y: number) => void;
}) {
  const dragRef = useRef({ active: false, startX: 0, startY: 0, originX: sticker.x, originY: sticker.y });
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { active: true, startX: event.clientX, startY: event.clientY, originX: sticker.x, originY: sticker.y };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const bounds = boundsRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const nextX = dragRef.current.originX + ((event.clientX - dragRef.current.startX) / bounds.width) * 100;
    const nextY = dragRef.current.originY + ((event.clientY - dragRef.current.startY) / bounds.height) * 100;
    onMove(sticker.id, Math.max(4, Math.min(96, nextX)), Math.max(8, Math.min(92, nextY)));
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current.active = false;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Drag ${sticker.label} sticker`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`absolute z-20 hidden touch-none select-none rounded-full border px-3.5 py-1.5 font-mono text-[0.66rem] font-bold tracking-wider shadow-md outline-none transition-shadow sm:block ${sticker.bg} ${sticker.text} ${sticker.border} ${
        dragging ? "cursor-grabbing shadow-lg" : "cursor-grab"
      }`}
      style={{
        left: `${sticker.x}%`,
        top: `${sticker.y}%`,
        transform: `translate(-50%, -50%) rotate(${sticker.rotate}deg)`,
      }}
    >
      {sticker.label}
    </div>
  );
}

const MARQUEE_ITEMS = [
  "✦ THE ANTI-AGENCY STUDIO",
  "⚡ 7-DAY SPRINT VELOCITY",
  "🔒 100% SOURCE CODE HANDOVER",
  "🤖 AI-NATIVE SYSTEMS",
  "🌍 SERVING 8+ COUNTRIES",
  "☕ CHAI-POWERED LEAN ENGINEERING",
  "🎯 ZERO MIDDLE MANAGERS",
];

const ANTI_AGENCY_PRINCIPLES = [
  {
    number: "01",
    title: "Direct Engineer Access",
    tag: "No Telephone Games",
    icon: Users,
    desc: "You never speak with junior account managers or sales reps who know nothing about code. You collaborate directly with the engineers building your systems over WhatsApp.",
  },
  {
    number: "02",
    title: "100% Full Code Ownership",
    tag: "Zero Lock-In",
    icon: Code2,
    desc: "We don't hold your website or bot hostage on proprietary hosting. Upon launch, you receive full GitHub repository handover, DNS keys, and database credentials. You own everything.",
  },
  {
    number: "03",
    title: "AI Built Into The Core",
    tag: "Not A Gimmick",
    icon: Bot,
    desc: "We don't slap generic ChatGPT wrappers on static websites. We integrate enterprise Meta Cloud WhatsApp APIs, fine-tuned LLM prompts, and calendar booking webhooks tailored to your business.",
  },
  {
    number: "04",
    title: "7-Day Sprint Delivery",
    tag: "Speed As A Feature",
    icon: Zap,
    desc: "Traditional agencies take 3 to 6 months to ship a website. We plan, write conversion copy, develop in Next.js 16, and deploy your live system within 5 to 7 business days.",
  },
];

const TECH_ARSENAL = [
  {
    name: "Next.js 16 & React 19",
    tag: "Frontend Core",
    icon: Flame,
    desc: "Turbopack bundling, React Server Components, and zero-layout-shift rendering for sub-second page loads and 99/100 PageSpeed scores.",
  },
  {
    name: "Meta Cloud WhatsApp API",
    tag: "Automation Engine",
    icon: Bot,
    desc: "Official enterprise WhatsApp webhook infrastructure for 24/7 autonomous triage, appointment scheduling, and customer inquiries.",
  },
  {
    name: "Claude 3.7 & OpenAI",
    tag: "Intelligence Layer",
    icon: Sparkles,
    desc: "State-of-the-art LLMs fine-tuned with domain context, booking logic, and custom guardrails for real commercial workflows.",
  },
  {
    name: "Supabase & Postgres",
    tag: "Data & Storage",
    icon: Code2,
    desc: "Scalable vector embeddings, instant webhook triggers, automated backups, and row-level security for appointment logs.",
  },
  {
    name: "Tailwind CSS v4",
    tag: "Design System",
    icon: Star,
    desc: "Clean utility architecture, fluid responsive sizing, dark/light token optimization, and zero CSS bundle bloat.",
  },
  {
    name: "Vercel & Cloudflare",
    tag: "Edge Delivery",
    icon: Globe,
    desc: "Global CDN caching, sub-50ms TTFB across Asia, Europe, and the Americas, with automatic DDoS mitigation and 99.99% uptime.",
  },
];

const LAB_PRODUCTS = [
  {
    name: "ExamOS",
    tag: "EdTech AI",
    metric: "3,000+ Mock Tests Generated",
    desc: "Autonomous competitive exam simulation engine for Indian students. Built with Next.js, Supabase, and dynamic question synthesis.",
    link: "/products/examos",
    category: "In-House SaaS",
  },
  {
    name: "Aura",
    tag: "Marketing AI",
    metric: "400+ Campaigns Generated",
    desc: "Instant aesthetic visual and copywriting studio for local retail brands, restaurants, and aesthetics clinics.",
    link: "/products/aura",
    category: "In-House SaaS",
  },
  {
    name: "TriageBot Engine",
    tag: "Enterprise Core",
    metric: "Sub-30s Automated Booking",
    desc: "Our proprietary WhatsApp webhook state-machine that powers client triage, payment routing, and Google Calendar sync.",
    link: "/services/ai-agents",
    category: "Internal Infrastructure",
  },
];

const MILESTONES = [
  {
    year: "2024",
    title: "The Studio Genesis",
    desc: "Next Scale was founded in Bhubaneswar by Abhisek Pani after witnessing dozens of local and international businesses get overcharged by slow, bloated agencies.",
  },
  {
    year: "2024 Q3",
    title: "ExamOS & Aura Shipped",
    desc: "Proved our fullstack AI engineering chops by building and shipping ExamOS and Aura in-house, scaling to hundreds of daily users with zero external funding.",
  },
  {
    year: "2025",
    title: "50+ Systems Deployed Worldwide",
    desc: "Expanded operations to 8+ countries (India, UAE, UK, USA) serving healthcare clinics, luxury realtors, SaaS founders, and growing enterprises.",
  },
];

export function AboutView() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [stickers, setStickers] = useState(aboutStickers);

  const moveSticker = (id: string, x: number, y: number) => {
    setStickers((curr) => curr.map((s) => (s.id === id ? { ...s, x, y } : s)));
  };

  return (
    <div className="overflow-hidden pt-16 sm:pt-20 bg-white text-slate-900">
      {/* Marquee Header Ticker */}
      <div className="border-b border-slate-200 bg-blue-50/80 py-2.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-blue-900">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="size-1.5 rounded-full bg-blue-600" />
            </span>
          ))}
        </div>
      </div>

      {/* Editorial Hero Section — Distinct Studio Manifesto */}
      <section
        ref={heroRef}
        className="relative border-b border-slate-200 bg-slate-50/60 px-5 py-16 sm:px-8 sm:py-24 overflow-hidden"
      >
        {/* Interactive Physics DotGrid Backdrop from ReactBits */}
        <DotGridBackdrop />

        {/* Ambient Blue Gradient Spotlight */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] rounded-full bg-blue-500/10 blur-2xl sm:size-[700px] sm:blur-3xl" />

        {/* Draggable Editorial Stickers */}
        {stickers.map((s) => (
          <DraggableSticker key={s.id} sticker={s} boundsRef={heroRef} onMove={moveSticker} />
        ))}

        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-xs font-semibold text-blue-700 shadow-xs">
                <Compass className="size-3.5 text-blue-600" /> Studio Manifesto
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-700 shadow-xs">
                🟢 Est. 2024 · Next Scale Labs
              </span>
            </div>

            <h1 className="max-w-4xl font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl md:text-7xl text-slate-900 leading-[1.05]">
              We built the <br />
              <span className="text-blue-600">Anti-Agency.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
              Next Scale was founded on one simple rule: <strong>kill the bloated 3-month agency cycle</strong>. We are a sharp engineering studio that designs high-performance websites and deploys 24/7 WhatsApp AI agents in 7 days flat.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Hi Abhisek! I read the Next Scale studio manifesto and would like to build together.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Talk Directly To Founders <ArrowRight className="size-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/40"
              >
                Explore Systems <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-7 hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:flex">
              <Move className="size-4 text-blue-600" /> Stickers are draggable · Swirl mouse over the dot grid ↗
            </div>
          </motion.div>

          {/* Studio Identity Dossier Card */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-900/5">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 px-5 py-3.5 text-white">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-500" />
                  <span className="size-2.5 rounded-full bg-amber-500" />
                  <span className="size-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-0.5 font-mono text-[0.65rem] text-slate-200">
                  <Terminal className="size-3 text-sky-400" />
                  <span>STUDIO_DOSSIER_v2.5</span>
                </div>
              </div>

              {/* Dossier Specs */}
              <div className="p-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-blue-600">
                        LEAD ARCHITECT &amp; FOUNDER
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                        <Link href="/about/abhisek-pani" className="hover:text-blue-600 transition-colors">
                          Abhisek Pani
                        </Link>
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/abhisekpani80-commits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:text-blue-600 hover:border-blue-300"
                        aria-label="GitHub Profile"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                      <a
                        href="https://linkedin.com/in/abhisekpani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:text-blue-600 hover:border-blue-300"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* Key Stats in Dossier */}
                  <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <span className="block text-[0.6rem] text-slate-500 uppercase font-bold">Base Location</span>
                      <span className="font-display text-sm font-bold text-slate-900">Bhubaneswar, IN</span>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <span className="block text-[0.6rem] text-slate-500 uppercase font-bold">Global Reach</span>
                      <span className="font-display text-sm font-bold text-slate-900">8+ Countries</span>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <span className="block text-[0.6rem] text-slate-500 uppercase font-bold">Sprint Speed</span>
                      <span className="font-display text-sm font-bold text-blue-600">7 Days Live</span>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <span className="block text-[0.6rem] text-slate-500 uppercase font-bold">Ownership</span>
                      <span className="font-display text-sm font-bold text-slate-900">100% Handover</span>
                    </div>
                  </div>

                  {/* Core Commitment */}
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-900 p-3.5 text-white">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">
                      Studio Philosophy:
                    </p>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-slate-300">
                      &ldquo;Code ownership &gt; monthly hostage hosting. Sub-second performance &gt; bloated WordPress themes. Real revenue &gt; vanity agency slides.&rdquo;
                    </p>
                  </div>
                </div>

                <a
                  href={waLink("Hi Abhisek! I'd like to book a direct discovery call for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                >
                  <PhoneCall className="size-3.5" /> Book Direct Line With Founder
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Animated Metrics Stripe */}
      <section className="border-b border-slate-200 bg-white px-5 py-14 sm:px-8 sm:py-18">
        <Reveal>
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { to: 50, suffix: "+", label: "Systems Deployed", icon: Rocket },
              { to: 100, suffix: "%", label: "Source Handover", icon: Code2 },
              { to: 8, suffix: "+", label: "Countries Served", icon: Globe },
              { to: 7, suffix: " Days", label: "Sprint Velocity", icon: Clock },
            ].map(({ to, suffix, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border-l border-slate-200 pl-5 first:border-l-0 first:pl-0 md:pl-8"
              >
                <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-2.5 shadow-xs">
                  <Icon className="size-4 text-blue-600" />
                </div>
                <div className="font-heading text-4xl font-extrabold leading-none tracking-tight sm:text-5xl text-slate-900">
                  <CountUp to={to} duration={2} />
                  <span className="text-blue-600">{suffix}</span>
                </div>
                <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Official Entities & Directory Hub */}
      <section className="border-b border-slate-200 bg-slate-50/50 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Entity Directory &amp; Knowledge Base
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Meet The People &amp; The Studio
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Explore dedicated entity profiles for founder Abhisek Pani, the Next Scale engineering studio, and official press resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Founder Entity */}
            <Link
              href="/about/abhisek-pani"
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase text-blue-700 border border-blue-100">
                    Founder Profile
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-slate-50 border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <User className="size-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                  Abhisek Pani
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600">Founder &amp; Lead Software Architect</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Learn about Abhisek&apos;s story, engineering philosophy, technical stack, flagship products (ExamOS, Aura), and anti-agency doctrine.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                <span>View Founder Profile</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2: Company Entity */}
            <Link
              href="/about/next-scale"
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase text-blue-700 border border-blue-100">
                    Company Profile
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-slate-50 border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Building2 className="size-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                  Next Scale Studio
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600">Web Engineering &amp; AI Studio</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Discover the company background, 7-day velocity standards, 100% source code ownership guarantee, and industry solutions.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                <span>Explore Studio Profile</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3: Press Kit */}
            <Link
              href="/press"
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold uppercase text-slate-700 border border-slate-200">
                    Media Resources
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-slate-50 border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Newspaper className="size-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                  Press &amp; Media Kit
                </h3>
                <p className="mt-1 text-xs font-semibold text-slate-500">Bios, Logos &amp; Fact Sheet</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Download vector brand logos, copy official founder &amp; company bios, view fast facts, and submit media interview inquiries.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                <span>Access Press Kit</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The 4 Anti-Agency Principles */}
      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Core Philosophy
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-tight text-slate-900">
              How We Work Different
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              Traditional agencies are designed to bill hours and prolong projects. Next Scale is engineered to ship high-impact software fast.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ANTI_AGENCY_PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm transition hover:bg-white hover:border-blue-200 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-extrabold text-slate-900">
                        {principle.number}
                      </span>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
                        <Icon className="size-5 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                      {principle.title}
                    </h3>
                    <span className="mt-1 block font-mono text-[0.62rem] font-bold uppercase text-blue-600">
                      ✦ {principle.tag}
                    </span>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Arsenal — Deep Tech Matrix */}
      <section className="border-b border-slate-200 bg-slate-50/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Engineering Arsenal
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-tight text-slate-900">
              Zero Wordpress. Pure Code.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              We build on modern developer stacks trusted by high-growth startups and global tech teams.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_ARSENAL.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
                      <Icon className="size-5 text-blue-600" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase text-slate-600">
                      {tech.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {tech.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Products Section — Proof of Craft */}
      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              In-House Products & Deployments
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-tight text-slate-900">
              Proof Of Craft
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              We don&apos;t just build for clients. We design and operate our own software products that serve real users every day.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {LAB_PRODUCTS.map((prod) => (
              <div
                key={prod.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-sm transition hover:bg-white hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase text-blue-700">
                      {prod.tag}
                    </span>
                    <span className="font-mono text-[0.62rem] font-bold text-slate-500">
                      {prod.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                    {prod.name}
                  </h3>
                  <div className="mt-2 inline-block rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-1 font-mono text-[0.68rem] font-bold text-blue-700">
                    ⚡ {prod.metric}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    {prod.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <Link
                    href={prod.link}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
                  >
                    View System Case Study <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story & Milestone Timeline */}
      <section className="border-b border-slate-200 bg-slate-50/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
                The Origin Story
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl text-slate-900">
                Why Next Scale Exists
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Most web agencies are structured for billable hours, not shipping. They assign clients to junior project managers who relay messages to outsourced developers, resulting in slow 4-month builds and 35/100 PageSpeed scores.
                </p>
                <p>
                  We started Next Scale to build a different kind of studio: <strong>engineer-led, chai-powered, and laser-focused on velocity</strong>.
                </p>
                <p>
                  By leveraging modern Next.js 16 frameworks and enterprise Meta Cloud APIs, we build systems that generate measurable ROI for businesses within 7 days.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={waLink("Hi Abhisek! I would love to connect and discuss building a system together.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                >
                  Chat with Abhisek <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-4">
              {MILESTONES.map((m) => (
                <div
                  key={m.year}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 font-mono text-xs font-bold text-blue-700">
                      {m.year}
                    </span>
                    <span className="font-mono text-[0.65rem] font-bold uppercase text-slate-500">
                      Milestone
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Direct Founder CTA */}
      <section className="bg-[#0B0F19] px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              Skip The Agency Sales Pitch
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Work Directly With <span className="text-blue-400">Builders.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Send us your messy requirements on WhatsApp. We will reply with a crystal clear scope and fixed numbers within 24 hours.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi Next Scale! I'd like to work directly with your engineering team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Message On WhatsApp <ArrowRight className="size-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                View Transparent Pricing <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
