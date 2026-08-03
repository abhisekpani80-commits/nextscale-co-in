"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  TrendingUp,
  Bot,
  Shield,
  Clock,
  Users,
  Sparkles,
  Move,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { VALUES, TIMELINE, waLink } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { profilePageSchema } from "@/lib/seo";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

type Sticker = { id: string; label: string; x: number; y: number; rotate: number; color: string };

const heroStickers: Sticker[] = [
  { id: "founder", label: "DRAG ME ✦", x: 26, y: 15, rotate: -4, color: "#FF4D00" },
  { id: "city", label: "ODISHA 📍", x: 8, y: 32, rotate: 5, color: "#FFC72E" },
  { id: "speed", label: "7-DAY SHIP 🚀", x: 88, y: 22, rotate: -6, color: "#B8E986" },
  { id: "ai", label: "AI JUGAAD 🤖", x: 12, y: 82, rotate: 4, color: "#FFB7C5" },
];

function DraggableHeroSticker({
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
    onMove(sticker.id, Math.max(5, Math.min(95, nextX)), Math.max(10, Math.min(90, nextY)));
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
      className={`absolute z-20 hidden touch-none select-none rounded-full border-2 border-[#141414] px-3.5 py-1.5 font-display text-[0.68rem] font-black tracking-[0.1em] shadow-[3px_3px_0_#141414] outline-none transition-shadow sm:block ${
        dragging ? "cursor-grabbing shadow-[1px_1px_0_#141414]" : "cursor-grab"
      }`}
      style={{
        left: `${sticker.x}%`,
        top: `${sticker.y}%`,
        backgroundColor: sticker.color,
        transform: `translate(-50%, -50%) rotate(${sticker.rotate}deg)`,
      }}
    >
      {sticker.label}
    </div>
  );
}

const GLOBAL_STATS = [
  { value: "25+", label: "Businesses served" },
  { value: "12+", label: "AI agents live" },
  { value: "8+", label: "Countries reached" },
  { value: "48h", label: "Avg. delivery time" },
];

const GLOBAL_REACH = [
  { region: "India", note: "Primary market — clinics, SMBs, local brands", color: "#FFC72E" },
  { region: "UAE & Gulf", note: "Healthcare, real estate & luxury services", color: "#FFB7C5" },
  { region: "UK & Europe", note: "Digital transformation & web apps", color: "#9DD9FF" },
  { region: "USA & Canada", note: "SaaS integrations & AI agent workflows", color: "#B8E986" },
];

const WHY_NEXTSCALE = [
  {
    icon: Zap,
    title: "Shipped in days, not months",
    description: "While big agencies write proposals, we build. AI agents in 48h, full websites in 7 days.",
    color: "#FFC72E",
  },
  {
    icon: Globe,
    title: "Global quality benchmark",
    description: "Every product is built with the same precision expected by teams in San Francisco and London.",
    color: "#9DD9FF",
  },
  {
    icon: TrendingUp,
    title: "Revenue-first approach",
    description: "We don't measure success in lines of code — we measure it in bookings, leads, and ROI.",
    color: "#B8E986",
  },
  {
    icon: Bot,
    title: "AI-native from day one",
    description: "Not retrofitted. Intelligence is baked in using Claude, Deepgram, OpenAI, and Sarvam AI.",
    color: "#FFB7C5",
  },
  {
    icon: Shield,
    title: "Radical transparency",
    description: "Fixed public pricing. No hidden fees. We tell you exactly what we can — and can't — do.",
    color: "#FFC72E",
  },
  {
    icon: Users,
    title: "Async & timezone-ready",
    description: "Remote-first, async team. We operate across IST, GMT, EST seamlessly.",
    color: "#9DD9FF",
  },
];

export default function AboutPage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [stickers, setStickers] = useState(heroStickers);
  const [activeTab, setActiveTab] = useState<"clinic" | "realty" | "saas">("clinic");

  const moveSticker = (id: string, x: number, y: number) => {
    setStickers((curr) => curr.map((s) => (s.id === id ? { ...s, x, y } : s)));
  };

  const previewData = {
    clinic: {
      title: "Lumière Skin Clinic",
      type: "Healthcare & Aesthetics",
      stat: "+40% Bookings",
      desc: "24/7 WhatsApp AI receptionist answers treatment FAQs and schedules consultation slots.",
      tag: "AI Receptionist + Web",
      color: "#FFB7C5",
    },
    realty: {
      title: "Vantage Realty",
      type: "Real Estate Brokerage",
      stat: "3x More Enquiries",
      desc: "Custom Next.js property catalog with instant lead qualification and CRM webhooks.",
      tag: "Custom Next.js App",
      color: "#9DD9FF",
    },
    saas: {
      title: "ExamOS & Aura",
      type: "EdTech & Fluency Coach",
      stat: "500+ Active Users",
      desc: "Full-stack AI test generator and real-time voice fluency coach trained on Indian contexts.",
      tag: "In-House Consumer Products",
      color: "#B8E986",
    },
  };

  return (
    <>
      <JsonLd schema={[profilePageSchema()]} />

      {/* Interactive Hero First Screen */}
      <section ref={heroRef} className="dot-grid relative border-b-2 border-[#141414] px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
        {stickers.map((s) => (
          <DraggableHeroSticker key={s.id} sticker={s} boundsRef={heroRef} onMove={moveSticker} />
        ))}

        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: reducedMotion ? 0 : -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#141414]">
                <Sparkles className="size-3.5" /> Made in Odisha · Serving Worldwide
              </span>
              <span className="font-display text-xs font-black uppercase tracking-[0.12em] text-[#5B5146]">
                Async · Remote-First
              </span>
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,7.8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
              We cook <span className="text-[#FF4D00]">websites.</span>
              <br />
              And AI systems.
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-7 text-[#141414] sm:text-xl">
              From Bhubaneswar to global teams — Next Scale builds digital engines that make businesses look credible, capture leads, and automate client follow-ups without corporate fluff.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Hi Next Scale! I'd like to discuss a project with your team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-6 py-3.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[5px_5px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FF4D00]"
              >
                Start a project <ArrowRight className="size-4" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-6 py-3.5 font-display text-xs font-black uppercase shadow-[3px_3px_0_#141414] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                See our work <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#5B5146]">
              <Move className="size-4" /> Stickers are draggable across the screen ↗
            </div>
          </motion.div>

          {/* Interactive Studio Outcome Inspector Card */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="hard-shadow rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] overflow-hidden">
              <div className="flex items-center justify-between border-b-2 border-[#141414] bg-[#FFC72E] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FF4D00]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FAF3E5]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#B8E986]" />
                </div>
                <span className="font-display text-[0.65rem] font-black uppercase tracking-[0.12em]">
                  Interactive Outcome Inspector
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {(["clinic", "realty", "saas"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full border-2 border-[#141414] px-3 py-1 font-display text-[0.65rem] font-black uppercase transition-all ${
                        activeTab === tab ? "bg-[#141414] text-[#FAF3E5] shadow-[2px_2px_0_#FF4D00]" : "bg-white text-[#141414] hover:bg-[#FFC72E]"
                      }`}
                    >
                      {tab === "clinic" ? "Clinic" : tab === "realty" ? "Realty" : "SaaS"}
                    </button>
                  ))}
                </div>

                <div
                  style={{ backgroundColor: previewData[activeTab].color }}
                  className="rounded-2xl border-2 border-[#141414] p-5 shadow-[4px_4px_0_#141414] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-black uppercase text-[#141414]/70">
                      {previewData[activeTab].type}
                    </span>
                    <span className="rounded-full border border-[#141414] bg-[#141414] px-2.5 py-0.5 font-display text-[0.6rem] font-black uppercase text-[#FAF3E5]">
                      {previewData[activeTab].tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#141414]">
                    {previewData[activeTab].title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-display text-2xl font-black text-[#FF4D00]">
                      {previewData[activeTab].stat}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#141414]/80">
                    {previewData[activeTab].desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Stats Bar */}
      <section className="border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {GLOBAL_STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-[#141414] pl-4 first:border-l-0 first:pl-0 sm:pl-8">
                <div className="font-display text-4xl font-black leading-none tracking-[-0.08em] sm:text-6xl text-[#141414]">
                  {s.value}
                </div>
                <div className="mt-2 font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Narrative & Global Reach */}
      <section className="bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <Reveal>
              <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-7 shadow-[7px_7px_0_#141414] sm:p-10">
                <span className="inline-block rounded-full border-2 border-[#141414] bg-[#FFB7C5] px-3 py-1 font-display text-xs font-black uppercase shadow-[2px_2px_0_#141414]">
                  Our Story
                </span>
                <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-6xl">
                  Small team.<br />
                  <span className="text-[#FF4D00]">Big jugaad.</span>
                </h2>

                <div className="mt-7 space-y-4 text-base leading-7 text-[#5B5146]">
                  <p>
                    I&apos;m <strong className="text-[#141414]">Abhisek Pani</strong> — founder and CEO of Next Scale. A self-taught builder from Bhubaneswar, Odisha who started Next Scale with no VC funding, no corporate suite, and no fluff. Just curiosity, chai, and a conviction that local businesses deserve world-class digital tools.
                  </p>
                  <p>
                    What started as building high-conversion websites for clinics evolved into a complete AI automation studio — deploying 24/7 WhatsApp AI receptionists, custom SaaS products, and growth engines for businesses worldwide.
                  </p>
                  <p>
                    We don&apos;t compete on agency size. We compete on <strong className="text-[#141414]">speed, practical UX, and clear outcomes.</strong>
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t-2 border-[#141414]">
                  <a
                    href="https://www.linkedin.com/in/abhisek-pani-1b3592329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#9DD9FF] px-4 py-2 font-display text-xs font-black uppercase transition hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="size-3.5" /> LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/abhisekpani80-commits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-4 py-2 font-display text-xs font-black uppercase transition hover:-translate-y-0.5"
                  >
                    <GithubIcon className="size-3.5" /> GitHub Commits
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border-2 border-[#141414] bg-[#141414] p-7 text-[#FAF3E5] shadow-[7px_7px_0_#FF4D00]">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="size-5 text-[#FFC72E]" />
                    <span className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                      Where We Work
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                    Serving 8+ Countries
                  </h3>
                  <p className="mt-3 text-sm text-[#FAF3E5]/70">
                    We work async across time zones with real human updates.
                  </p>

                  <div className="mt-6 space-y-3">
                    {GLOBAL_REACH.map((r) => (
                      <div
                        key={r.region}
                        style={{ backgroundColor: r.color }}
                        className="rounded-xl border-2 border-[#141414] p-3 text-[#141414]"
                      >
                        <p className="font-display text-sm font-black uppercase">{r.region}</p>
                        <p className="mt-0.5 text-xs font-medium">{r.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-[#141414] bg-[#B8E986] p-5 font-bold shadow-[4px_4px_0_#141414]">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em]">
                    <Clock className="size-4" /> Fast Communication
                  </div>
                  <p className="mt-2 text-sm">
                    We reply within 2 hours on WhatsApp. Direct line, zero ticket queues.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Next Scale Grid */}
      <section className="dot-grid-soft border-y-2 border-[#141414] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-12">
              <p className="section-label">Why work with us</p>
              <h2 className="mt-2 max-w-xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-6xl">
                Built different. By choice.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_NEXTSCALE.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <article
                  style={{ backgroundColor: w.color }}
                  className="flex flex-col justify-between rounded-2xl border-2 border-[#141414] p-6 shadow-[5px_5px_0_#141414] transition duration-200 hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#141414] text-[#FAF3E5] shadow-[2px_2px_0_#FAF3E5]">
                      <w.icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-black uppercase leading-[0.95] text-[#141414]">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#141414]/80">
                      {w.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Principles */}
      <section className="bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Timeline */}
            <div>
              <Reveal>
                <p className="section-label">Milestones</p>
                <h2 className="mt-2 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl">
                  The Journey.
                </h2>
              </Reveal>

              <div className="mt-8 space-y-4">
                {TIMELINE.map((t, i) => (
                  <Reveal key={t.year + t.title} delay={i * 0.08}>
                    <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-5 shadow-[4px_4px_0_#141414]">
                      <span className="inline-block rounded-full border border-[#141414] bg-[#FF4D00] px-2.5 py-0.5 font-display text-xs font-black uppercase text-white">
                        {t.year}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-black uppercase">{t.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5B5146]">{t.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Principles */}
            <div>
              <Reveal>
                <p className="section-label">Principles</p>
                <h2 className="mt-2 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl">
                  What We Believe.
                </h2>
              </Reveal>

              <div className="mt-8 space-y-4">
                {VALUES.map((v, i) => (
                  <Reveal key={v.name} delay={i * 0.07}>
                    <div className="flex items-start gap-4 rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-5 shadow-[4px_4px_0_#141414]">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#FFC72E]">
                        <v.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-black uppercase">{v.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#5B5146]">{v.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#141414] px-5 py-24 text-[#FAF3E5] sm:px-8 sm:py-32">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FFC72E]">
              Ready to work together?
            </p>
            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">
              Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-[#FAF3E5]/65">
              Whether you are a clinic in Bhubaneswar or a brand in Dubai — if you need AI that works and a site that converts, we are your team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-6 py-3.5 font-display text-sm font-black uppercase text-[#141414] shadow-[5px_5px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                Start a project <ArrowRight className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5]/50 px-6 py-3.5 font-display text-sm font-black uppercase transition hover:border-[#FFC72E] hover:text-[#FFC72E]"
              >
                Get in touch <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
