"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Move,
  Sparkles,
  Rocket,
  Zap,
  MessageCircle,
  Bot,
  Wrench,
  Star,
  CheckCircle2,
  HelpCircle,
  Check,
  Globe,
  ShieldCheck,
  Code2,
  Clock,
  Send,
  PhoneCall,
  Sliders,
  Flame,
  Layers,
  BarChart3,
  Search,
} from "lucide-react";
import { waLink } from "@/lib/site";
import { ScratchToReveal } from "@/components/ui/ScratchToReveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";

const services = [
  [
    "01",
    "Websites",
    "Sub-second Next.js websites that make your business look credible, rank on Google, and convert visitors into paying clients.",
    "#FFC72E",
    "★ 99/100 SPEED",
    "/services/websites",
  ],
  [
    "02",
    "AI Receptionists",
    "24/7 autonomous WhatsApp agents that answer FAQs, qualify requirements, book calendar slots, and follow up while you sleep.",
    "#9DD9FF",
    "✦ 24/7 REVENUE",
    "/services/ai-agents",
  ],
  [
    "03",
    "Digital Growth",
    "Google Map Pack domination, conversion copywriting, and automated 5-star review collection that compounds every single month.",
    "#B8E986",
    "🚀 COMPOUNDING",
    "/services/digital-growth",
  ],
];

const faqs = [
  [
    "How quickly can we launch?",
    "Most custom websites go live in 5–7 days. AI agents are deployed within 48–72 hours once we ingest your business context and pricing.",
  ],
  [
    "Do you only work with Indian businesses?",
    "We are headquartered in Bhubaneswar, Odisha and work with clients across India, UAE, UK, USA, and 8+ countries worldwide. Async communication makes time zones seamless.",
  ],
  [
    "What does a project cost?",
    "Starter builds begin at ₹19,999 / $249. We agree on a fixed scope upfront with zero hidden fees, and you receive 100% source code ownership upon launch.",
  ],
  [
    "How does the WhatsApp AI agent work?",
    "We connect directly to the official Meta WhatsApp Business API and train the LLM on your services, pricing, calendar availability, and policies. It answers instantly and books appointments without human staff.",
  ],
  [
    "What happens after launch?",
    "Every build includes 30 days of complimentary prompt tuning, speed audits, and bug fixes. We also offer ongoing growth retainers for businesses looking to scale continuously.",
  ],
];

type Sticker = { id: string; label: string; x: number; y: number; rotate: number; color: string };

const initialStickers: Sticker[] = [
  { id: "drag", label: "DRAG ME ✦", x: 28, y: 12, rotate: -7, color: "#FF4D00" },
  { id: "websites", label: "WEBSITES 🚀", x: 6, y: 24, rotate: 8, color: "#FFC72E" },
  { id: "ai", label: "AI JUGAAD 🤖", x: 92, y: 16, rotate: -5, color: "#FFB7C5" },
  { id: "boring", label: "7-DAY SHIP ⚡", x: 10, y: 84, rotate: 6, color: "#B8E986" },
];

const marqueeItems = [
  { text: "SUB-SECOND WEBSITES", icon: Rocket },
  { text: "24/7 WHATSAPP AI BOTS", icon: Bot },
  { text: "100% CODE OWNERSHIP", icon: Code2 },
  { text: "LOCAL SEO DOMINATION", icon: Zap },
  { text: "7-DAY SPRINT VELOCITY", icon: Clock },
  { text: "SERVING 8+ COUNTRIES", icon: Globe },
  { text: "DIRECT FOUNDER ACCESS", icon: PhoneCall },
];

const BENTO_FEATURES = [
  {
    title: "Sub-Second Page Loads",
    tag: "Performance",
    color: "#FFC72E",
    icon: Rocket,
    desc: "Engineered on Next.js 16 with Turbopack and Vercel edge caching. 95+ PageSpeed scores that stop mobile visitors from bouncing.",
    stat: "99/100",
    statLabel: "Mobile Lighthouse",
  },
  {
    title: "24/7 WhatsApp AI Bot",
    tag: "Automation",
    color: "#9DD9FF",
    icon: Bot,
    desc: "Instant conversational booking and FAQ responses directly on WhatsApp. Qualifies budgets and syncs with Google Calendar in real time.",
    stat: "< 2s",
    statLabel: "Average Reply",
  },
  {
    title: "Top 3 Google Map Pack",
    tag: "Local SEO",
    color: "#B8E986",
    icon: Zap,
    desc: "Technical schema markup, localized keyword targeting, and Google Business Profile optimization to put you above competitors.",
    stat: "+65%",
    statLabel: "Search Visibility",
  },
  {
    title: "Automated Review Engine",
    tag: "Reputation",
    color: "#FFB7C5",
    icon: Star,
    desc: "Post-appointment WhatsApp review triggers that automatically collect verified 5-star Google reviews from satisfied clients.",
    stat: "2.5x",
    statLabel: "Review Velocity",
  },
  {
    title: "100% Source Code Handover",
    tag: "Ownership",
    color: "#FFC72E",
    icon: Code2,
    desc: "You own all GitHub repositories, DNS domains, and codebases. Zero vendor lock-in or recurring hostage hosting fees.",
    stat: "100%",
    statLabel: "Full Handover",
  },
  {
    title: "Direct Founder Hotline",
    tag: "Communication",
    color: "#9DD9FF",
    icon: PhoneCall,
    desc: "Direct WhatsApp communication with the engineers writing the code. Zero bloated agency hierarchies or account manager delays.",
    stat: "0",
    statLabel: "Middle Managers",
  },
];

const COMPARISON_DATA = [
  {
    feature: "Launch Timeline",
    traditional: "3 to 6 months of endless meetings",
    nextscale: "Live in 5 to 7 days flat",
  },
  {
    feature: "Code & Asset Ownership",
    traditional: "Proprietary CMS hostage / monthly lock-in",
    nextscale: "100% GitHub source code handover",
  },
  {
    feature: "24/7 Lead Capture",
    traditional: "Static contact forms that leads ignore",
    nextscale: "Autonomous WhatsApp AI receptionist",
  },
  {
    feature: "Mobile Speed Score",
    traditional: "35–50/100 (Bloated WordPress plugins)",
    nextscale: "95–99/100 (Next.js 16 Edge Architecture)",
  },
  {
    feature: "Pricing Transparency",
    traditional: "Hidden maintenance fees & inflated invoices",
    nextscale: "Fixed upfront scopes & clear public tiers",
  },
  {
    feature: "Team Communication",
    traditional: "Junior account managers playing telephone",
    nextscale: "Direct WhatsApp line with senior builders",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label mb-4 flex items-center gap-2">
      <span className="inline-block size-2.5 rounded-full bg-[#FF4D00] shadow-[1px_1px_0_#141414]" />
      {children}
    </p>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

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
      className={`absolute z-20 hidden touch-none select-none rounded-full border-2 border-[#141414] px-3.5 py-1.5 font-display text-[0.66rem] font-black tracking-[0.12em] shadow-[3px_3px_0_#141414] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#FF4D00] sm:block ${
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

export function AnimatedStudioLanding() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const [stickers, setStickers] = useState(initialStickers);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mockupTilt, setMockupTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Interactive Live Demo Simulator State
  const [simStep, setSimStep] = useState<"greeting" | "booking" | "pricing" | "confirmed">("greeting");
  const [inquiries, setInquiries] = useState<number>(80);

  const moveSticker = (id: string, x: number, y: number) => {
    setStickers((current) => current.map((sticker) => (sticker.id === id ? { ...sticker, x, y } : sticker)));
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !mockupRef.current || window.innerWidth < 768) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = Math.max(-3, Math.min(3, ((e.clientX - centerX) / rect.width) * 6));
    const rotateX = Math.max(-3, Math.min(3, -((e.clientY - centerY) / rect.height) * 6));
    setMockupTilt({ rotateX, rotateY });
  };

  const handleHeroMouseLeave = () => {
    setMockupTilt({ rotateX: 0, rotateY: 0 });
  };

  // ROI Calculator Calculations
  const estimatedConversionLift = Math.round(inquiries * 0.35);
  const avgOrderValue = 4500; // in INR baseline
  const estimatedAddedRevenue = estimatedConversionLift * avgOrderValue;

  return (
    <div className="home-studio overflow-hidden">
      {/* Hero Section with Interactive ReactBits DotGrid Backdrop */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative border-b-2 border-[#141414] bg-[#FAF3E5] overflow-hidden"
      >
        {/* Interactive Physics DotGrid Backdrop from ReactBits */}
        <DotGridBackdrop />

        {/* Ambient Warm Gradient Spotlight */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.14),transparent_65%)] blur-xl sm:size-[700px] sm:blur-2xl" />

        {/* Desktop Draggable Stickers */}
        {stickers.map((sticker) => (
          <DraggableSticker key={sticker.id} sticker={sticker} boundsRef={heroRef} onMove={moveSticker} />
        ))}

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1280px] items-center gap-8 px-4 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7 }}
          >
            {/* Studio Badge Ribbon */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3.5 py-1 font-display text-[0.68rem] font-black uppercase text-[#FAF3E5] shadow-[2.5px_2.5px_0_#141414]">
                <Sparkles className="size-3" /> Next Scale Studio ✦
              </span>
              <span className="rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-3 py-1 font-display text-[0.68rem] font-black uppercase text-[#141414] shadow-[2.5px_2.5px_0_#141414]">
                🟢 Shipped in 7 Days
              </span>
            </div>

            {/* Zero-Layout-Shift Rotating Text Headline */}
            <h1 className="max-w-[760px] font-display text-[clamp(2.6rem,7.2vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#141414]">
              We cook <br />
              <span className="inline-block whitespace-nowrap overflow-hidden text-[#FF4D00]">
                <RotatingText
                  texts={["Websites.", "AI Agents.", "Web Apps.", "Software."]}
                  mainClassName="text-[#FF4D00] inline-block whitespace-nowrap overflow-hidden"
                  staggerFrom="last"
                  rotationInterval={2800}
                />
              </span>
              <span className="block">That Make Money.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base font-medium leading-7 text-[#141414] sm:text-xl">
              Sub-second Next.js web applications, 24/7 WhatsApp AI receptionists, and local SEO engines. No bloated agency retainers. Just clean, compounding revenue.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Hi Next Scale! I'd like to discuss building a website and AI system for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-6 py-3.5 font-display text-sm font-black uppercase tracking-[0.06em] text-[#FAF3E5] shadow-[4px_4px_0_#FF4D00] transition duration-150 hover:-translate-y-1 hover:bg-[#FF4D00]"
              >
                Start a Project <ArrowRight className="size-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-6 py-3.5 font-display text-sm font-black uppercase tracking-[0.06em] shadow-[3px_3px_0_#141414] transition duration-150 hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                Explore Systems <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-6 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#5B5146] sm:flex">
              <Move className="size-4" /> Stickers are draggable · Swirl your mouse over the dot grid ↗
            </div>
          </motion.div>

          {/* Iconic Studio Browser Mockup with Integrated Live Widgets */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92, rotate: reducedMotion ? 0 : 2 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: mockupTilt.rotateX,
              rotateY: mockupTilt.rotateY,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ perspective: 1000 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            {/* Hand-placed Floating Sticker Badge */}
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -6, 0], rotate: [6, 4, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -top-4 z-30 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3.5px_3.5px_0_#141414]"
            >
              ✦ Live Preview
            </motion.div>

            <div className="hard-shadow overflow-hidden rounded-[1.8rem] border-2 border-[#141414] bg-[#FFFCF5]">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b-2 border-[#141414] bg-[#FFC72E] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FF4D00]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FAF3E5]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#B8E986]" />
                </div>
                <div className="flex items-center gap-1 rounded-md border border-[#141414]/20 bg-white/50 px-2.5 py-0.5">
                  <span className="size-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
                  <span className="font-display text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#141414]">
                    nextscale.co.in
                  </span>
                </div>
              </div>

              {/* Window Content */}
              <div className="grid gap-4 p-5 sm:p-6">
                {/* Main Hero Tile */}
                <div className="rounded-2xl border-2 border-[#141414] bg-[#141414] p-5 text-[#FAF3E5] shadow-[3px_3px_0_#FFC72E]">
                  <p className="font-display text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#FFC72E]">
                    Your new digital kitchen
                  </p>
                  <p className="mt-2 max-w-sm font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl text-white">
                    Less chaos. More customers.
                  </p>
                </div>

                {/* 2 Interactive Feature Cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Web Card */}
                  <motion.div
                    whileHover={reducedMotion ? undefined : { y: -4, rotate: -1.5 }}
                    className="rounded-2xl border-2 border-[#141414] bg-[#FFB7C5] p-4 shadow-[3px_3px_0_#141414]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-black text-[#141414]">01</span>
                      <span className="rounded-full border border-[#141414] bg-[#FFFCF5] px-2 py-0.5 font-display text-[0.58rem] font-black text-[#141414]">
                        99/100 PSI
                      </span>
                    </div>
                    <p className="mt-3 font-display text-sm font-black uppercase text-[#141414]">Sharp Websites</p>
                    <span className="mt-1 block text-[0.68rem] font-medium text-[#141414]/80">Sub-second Next.js</span>
                  </motion.div>

                  {/* AI Card with Live Interactive Test */}
                  <motion.div
                    whileHover={reducedMotion ? undefined : { y: -4, rotate: 1.5 }}
                    className="rounded-2xl border-2 border-[#141414] bg-[#9DD9FF] p-4 shadow-[3px_3px_0_#141414]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-black text-[#141414]">02</span>
                      <span className="rounded-full border border-[#141414] bg-[#141414] px-2 py-0.5 font-display text-[0.58rem] font-black uppercase text-[#FAF3E5]">
                        {simStep === "greeting" ? "24/7 AI" : "Booked! ✓"}
                      </span>
                    </div>
                    <p className="mt-3 font-display text-sm font-black uppercase text-[#141414]">Helpful AI</p>
                    <button
                      type="button"
                      onClick={() => setSimStep(simStep === "greeting" ? "booking" : "greeting")}
                      className="mt-1 inline-flex items-center gap-1 font-display text-[0.65rem] font-black uppercase text-[#FF4D00] hover:underline cursor-pointer"
                    >
                      {simStep === "greeting" ? "⚡ Test instant reply ↘" : "↺ Reset test"}
                    </button>
                  </motion.div>
                </div>

                {/* Turnaround Bottom Bar */}
                <div className="flex items-center justify-between rounded-2xl border-2 border-[#141414] bg-[#B8E986] px-4 py-3 font-bold shadow-[3px_3px_0_#141414]">
                  <span className="font-display text-xs font-black uppercase tracking-[0.08em] text-[#141414]">
                    Live in 3–7 days · 100% Code Ownership
                  </span>
                  <motion.span
                    animate={reducedMotion ? undefined : { x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="font-display text-xl text-[#141414]"
                  >
                    ↗
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip with Custom Icon Glyphs */}
      <div className="overflow-hidden border-b-2 border-[#141414] bg-[#141414] py-3.5 text-[#FAF3E5]">
        <div className="animate-marquee gap-8 whitespace-nowrap font-display text-sm font-black uppercase tracking-[0.14em]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => {
            const Icon = item.icon;
            return (
              <span key={`${item.text}-${index}`} className="inline-flex items-center gap-6">
                <span>{item.text}</span>
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#FAF3E5] bg-[#FF4D00] text-[#FAF3E5]">
                  <Icon className="size-3.5" />
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* What We Do — Scratch Card Offering */}
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <Label>Core Offerings</Label>
              <h2 className="max-w-xl font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.07em] sm:text-7xl">
                Good ideas deserve good plumbing.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-7 text-[#5B5146]">
                Your website, your customer conversations, and your follow-up should work like one clever little machine.
              </p>
              <div className="mt-7 flex items-center gap-2 font-display text-xs font-black uppercase tracking-[0.08em] text-[#FF4D00]">
                <Sparkles className="size-4 animate-bounce" /> Scratch colorful foil to reveal key offerings ↘
              </div>
            </Reveal>

            <ScratchToReveal className="min-h-[300px]">
              <div className="grid gap-5 sm:grid-cols-3">
                {services.map(([number, title, body, color, stamp, href], index) => (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, scale: 0.85, y: 35, rotate: index === 1 ? 2 : -2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.5,
                      delay: reducedMotion ? 0 : index * 0.12,
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    whileHover={reducedMotion ? undefined : { y: -8, rotate: index === 1 ? 1.5 : -1.5 }}
                    style={{ backgroundColor: color }}
                    className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#141414] p-6 shadow-[5px_5px_0_#141414]"
                  >
                    <Link href={href} className="absolute inset-0 z-10" aria-label={`Explore ${title}`} />

                    {/* Metallic Foil Shimmer Corner Stamp */}
                    <div className="absolute -right-7 -top-7 rotate-12 bg-[#FFFCF5] px-8 py-1.5 font-display text-[0.58rem] font-black uppercase text-[#141414] border-2 border-[#141414] shadow-[2px_2px_0_#141414]">
                      {stamp}
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-4xl font-black text-[#141414]">{number}</span>
                        <span className="rounded-full border border-[#141414] bg-[#141414] px-2.5 py-0.5 font-display text-[0.6rem] font-black uppercase text-[#FAF3E5]">
                          Foil Cleared
                        </span>
                      </div>
                      <h3 className="mt-8 font-display text-2xl font-black uppercase leading-[0.95] text-[#141414] group-hover:text-[#FF4D00] transition-colors">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-6 text-[#141414]/85">{body}</p>
                    </div>

                    <div className="relative z-20 mt-6 flex items-center justify-between">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-4 py-2 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#141414] transition-all group-hover:bg-[#FF4D00] group-hover:shadow-[3px_3px_0_#FFC72E] group-hover:text-white"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScratchToReveal>
          </div>
        </div>
      </section>

      {/* Live Animated CountUp Metrics Strip */}
      <section className="border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { to: 50, suffix: "+", label: "Deployed Systems", icon: Rocket },
              { to: 7, suffix: " Days", label: "Launch Velocity", icon: Zap },
              { to: 3.2, suffix: "x", label: "Lead Capture Lift", icon: MessageCircle, decimals: 1 },
              { to: 8, suffix: "+", label: "Countries Served", icon: Globe },
            ].map(({ to, suffix, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.08 }}
                className="border-l-2 border-[#141414] pl-5 first:border-l-0 first:pl-0 md:pl-8"
              >
                <div className="flex size-9 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#141414] text-[#FFC72E] mb-3 shadow-[2px_2px_0_#FAF3E5]">
                  <Icon className="size-4" />
                </div>
                <div className="font-display text-5xl font-black leading-none tracking-[-0.08em] sm:text-7xl text-[#141414]">
                  <CountUp to={to} duration={2} />
                  {suffix}
                </div>
                <p className="mt-2 max-w-28 font-display text-xs font-black uppercase leading-4 tracking-[0.06em] text-[#141414]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* The Next Scale Engine — Bento Grid */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <Label>Engineered For Revenue</Label>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              The Next Scale Engine
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#5B5146]">
              Every system is built to eliminate friction, capture high-intent leads, and turn passive traffic into paid appointments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENTO_FEATURES.map((bento) => {
              const Icon = bento.icon;
              return (
                <div
                  key={bento.title}
                  className="flex flex-col justify-between rounded-3xl border-2 border-[#141414] bg-[#FAF3E5] p-7 shadow-[6px_6px_0_#141414] transition hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex size-11 items-center justify-center rounded-xl border-2 border-[#141414] shadow-[2px_2px_0_#141414]"
                        style={{ backgroundColor: bento.color }}
                      >
                        <Icon className="size-5 text-[#141414]" />
                      </div>
                      <span className="rounded-full border border-[#141414] bg-white px-2.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase text-[#141414]">
                        {bento.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-black uppercase leading-[0.95] text-[#141414]">
                      {bento.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-[#5B5146]">{bento.desc}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[#141414]/15 pt-4">
                    <span className="font-display text-[0.65rem] font-black uppercase text-[#5B5146]">
                      {bento.statLabel}
                    </span>
                    <span className="font-display text-lg font-black text-[#FF4D00]">
                      {bento.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Revenue & ROI Estimator */}
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 text-center">
            <Label>ROI Calculator</Label>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Estimate Your Revenue Lift
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-[#5B5146]">
              See how many missed leads our 24/7 WhatsApp AI and sub-second site will recover for you.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-7 shadow-[8px_8px_0_#141414] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-black uppercase text-[#141414]">
                    Monthly Website Visitors / Enquiries:
                  </span>
                  <span className="rounded-full border-2 border-[#141414] bg-[#FFC72E] px-4 py-1 font-display text-sm font-black text-[#141414]">
                    {inquiries} leads/mo
                  </span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={inquiries}
                  onChange={(e) => setInquiries(Number(e.target.value))}
                  className="mt-6 w-full accent-[#FF4D00] cursor-pointer h-2 bg-[#FAF3E5] rounded-lg border border-[#141414]"
                />

                <div className="mt-6 space-y-2 text-xs font-medium text-[#5B5146]">
                  <p className="flex items-center gap-2">
                    <Check className="size-4 text-[#FF4D00] shrink-0" />
                    <span>24/7 instant WhatsApp responses capture leads after business hours.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="size-4 text-[#FF4D00] shrink-0" />
                    <span>Automated reminders cut appointment no-shows by up to 50%.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#141414] p-6 text-[#FAF3E5] shadow-[5px_5px_0_#FF4D00]">
                <span className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                  Estimated Monthly Impact
                </span>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black sm:text-5xl text-white">
                    +{estimatedConversionLift}
                  </span>
                  <span className="font-display text-xs font-bold uppercase text-[#FAF3E5]/70">
                    Recovered Bookings / Mo
                  </span>
                </div>

                <div className="mt-4 border-t border-white/20 pt-4">
                  <span className="font-mono text-[0.65rem] uppercase text-[#FAF3E5]/60 block">
                    Estimated Revenue Value:
                  </span>
                  <span className="font-display text-2xl font-black text-[#B8E986]">
                    ₹{estimatedAddedRevenue.toLocaleString("en-IN")}+ / month
                  </span>
                </div>

                <a
                  href={waLink(`Hi Next Scale! I estimated an extra ${estimatedConversionLift} leads/month on your calculator and want to deploy this system.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#FFC72E] bg-[#FFC72E] px-4 py-2.5 font-display text-xs font-black uppercase text-[#141414] transition hover:bg-[#FF4D00] hover:text-white"
                >
                  Capture These Leads <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional Agency vs Next Scale */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 text-center">
            <Label>The Difference</Label>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Traditional Agencies vs. Next Scale
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FAF3E5] shadow-[8px_8px_0_#141414]">
            <div className="grid grid-cols-[1fr_1fr_1.1fr] border-b-2 border-[#141414] bg-[#141414] p-4 text-[#FAF3E5] sm:p-5">
              <span className="font-display text-xs font-black uppercase text-[#FAF3E5]/60">Metric / Feature</span>
              <span className="font-display text-xs font-black uppercase text-[#FFB7C5]">Old-School Agencies</span>
              <span className="font-display text-xs font-black uppercase text-[#B8E986]">Next Scale Velocity</span>
            </div>

            <div className="divide-y-2 divide-[#141414]">
              {COMPARISON_DATA.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1fr_1fr_1.1fr] p-4 text-xs sm:p-5 items-center bg-[#FFFCF5]">
                  <span className="font-display font-black uppercase text-[#141414]">{row.feature}</span>
                  <span className="font-medium text-[#5B5146] pr-2">{row.traditional}</span>
                  <span className="font-bold text-[#141414] flex items-center gap-1.5 text-[#FF4D00]">
                    <CheckCircle2 className="size-4 text-[#FF4D00] shrink-0" />
                    <span>{row.nextscale}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small Team, Big Jugaad — Unified Card Section */}
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-7 shadow-[7px_7px_0_#141414] sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
              <Reveal>
                <Label>A note from the kitchen</Label>
                <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl text-[#141414]">
                  Small team.<br />
                  <span className="text-[#FF4D00]">Big jugaad.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-7 text-[#5B5146]">
                  We are a small, sharp team from Odisha building useful digital engines for clients worldwide. Chai-powered. Curious by default.
                </p>
                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFC72E] px-5 py-2.5 font-display text-xs font-black uppercase tracking-[0.08em] text-[#141414] shadow-[3px_3px_0_#141414] transition hover:-translate-y-0.5 hover:bg-[#FF4D00] hover:text-white"
                >
                  Meet the team <ArrowRight className="size-4" />
                </Link>
              </Reveal>

              {/* Connected IN / Infinity Cards Block */}
              <div className="relative grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={reducedMotion ? undefined : { y: -8, rotate: -3 }}
                  className="rounded-2xl border-2 border-[#141414] bg-[#9DD9FF] p-6 shadow-[5px_5px_0_#141414]"
                >
                  <span className="font-display text-6xl font-black text-[#141414]">IN</span>
                  <p className="mt-12 font-display text-2xl font-black uppercase text-[#141414]">Based in India</p>
                </motion.div>

                <motion.div
                  whileHover={reducedMotion ? undefined : { y: -8, rotate: 3 }}
                  className="rounded-2xl border-2 border-[#141414] bg-[#FFB7C5] p-6 shadow-[5px_5px_0_#141414]"
                >
                  <span className="font-display text-6xl font-black text-[#141414]">∞</span>
                  <p className="mt-12 font-display text-2xl font-black uppercase text-[#141414]">Working everywhere</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with Brand Orange Consistency */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Reveal>
              <Label>Questions, answered</Label>
              <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-6xl text-[#141414]">
                No smoke. Just answers.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 border-t-2 border-[#141414]">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <Reveal key={question} delay={index * 0.06}>
                  <div className={`border-b-2 border-[#141414] transition-colors ${open ? "bg-[#FAF3E5] px-4 my-2 rounded-2xl border-2 border-[#141414] shadow-[4px_4px_0_#FF4D00]" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-black uppercase text-[#141414] cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-[#141414] font-display text-xs font-black ${
                          open ? "bg-[#FF4D00] text-white" : "bg-[#FFC72E] text-[#141414]"
                        }`}>
                          ?
                        </span>
                        {question}
                      </span>
                      <div className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-[#141414] transition-all ${
                        open ? "bg-[#FF4D00] text-white rotate-180" : "bg-[#FFFCF5] text-[#141414]"
                      }`}>
                        <ChevronDown className="size-4" />
                      </div>
                    </button>
                    <div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-base leading-7 text-[#5B5146] font-medium">{answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#141414] px-5 py-24 text-[#FAF3E5] sm:px-8 sm:py-32">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FFC72E]">
              Ready To Modernize Your Business?
            </p>
            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">
              Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-[#FAF3E5]/65">
              Tell us about your business on WhatsApp and we will send a clear scope proposal with fixed numbers within 24 hours.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi Next Scale! I'd like to discuss a new website & AI automation build.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-6 py-3.5 font-display text-sm font-black uppercase text-[#141414] shadow-[5px_5px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                Start a Project on WhatsApp <ArrowRight className="size-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5]/50 px-6 py-3.5 font-display text-sm font-black uppercase transition hover:border-[#FFC72E] hover:text-[#FFC72E]"
              >
                View Pricing Tiers <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
