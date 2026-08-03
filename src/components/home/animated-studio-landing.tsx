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
} from "lucide-react";
import { waLink } from "@/lib/site";
import { ScratchToReveal } from "@/components/ui/ScratchToReveal";

const services = [
  ["01", "Websites", "Fast, expressive websites that make your business look as good as it actually is.", "#FFB7C5", "★ UNLOCKED", "/services/websites"],
  ["02", "AI automation", "WhatsApp agents and workflows that answer, qualify, book, and follow up while you sleep.", "#9DD9FF", "✦ TOP SECRET", "/services/ai-agents"],
  ["03", "Digital growth", "SEO, Google visibility, reels & social content systems that turn attention into action.", "#B8E986", "🚀 REVEALED", "/services/digital-growth"],
];

const faqs = [
  ["How quickly can we launch?", "Most websites go live in 3–7 days. AI agents usually take 48–72 hours once we have the right business context."],
  ["Do you only work with Indian businesses?", "We are based in Odisha and work with businesses everywhere. Time zones are just another workflow to automate."],
  ["What does a project cost?", "Starter websites begin at ₹19,999 / $249. We scope the work first, then give you a clear fixed price before anything starts."],
];

type Sticker = { id: string; label: string; x: number; y: number; rotate: number; color: string };

const initialStickers: Sticker[] = [
  { id: "drag", label: "DRAG ME ✦", x: 28, y: 13, rotate: -7, color: "#FF4D00" },
  { id: "websites", label: "WEBSITES 🚀", x: 7, y: 22, rotate: 8, color: "#FFC72E" },
  { id: "ai", label: "AI JUGAAD 🤖", x: 91, y: 18, rotate: -5, color: "#FFB7C5" },
  { id: "boring", label: "NO BORING STUFF ⚡", x: 12, y: 84, rotate: 6, color: "#B8E986" },
];

const marqueeItems = [
  { text: "WEBSITES", icon: Rocket },
  { text: "AI AUTOMATION", icon: Bot },
  { text: "WHATSAPP BOTS", icon: MessageCircle },
  { text: "LOCAL SEO", icon: Zap },
  { text: "BRANDING", icon: Star },
  { text: "SERVICES", icon: Wrench },
  { text: "DIGITAL GROWTH", icon: Sparkles },
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 5 : 2;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    onMove(
      sticker.id,
      sticker.x + (event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0),
      sticker.y + (event.key === "ArrowDown" ? step : event.key === "ArrowUp" ? -step : 0)
    );
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
      onKeyDown={handleKeyDown}
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

  const moveSticker = (id: string, x: number, y: number) => {
    setStickers((current) => current.map((sticker) => (sticker.id === id ? { ...sticker, x, y } : sticker)));
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !mockupRef.current) return;
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

  return (
    <div className="home-studio overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="dot-grid relative border-b-2 border-[#141414] overflow-hidden"
      >
        {/* Subtle Ambient Radial Backdrop Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.14),transparent_65%)] blur-2xl" />

        {stickers.map((sticker) => (
          <DraggableSticker key={sticker.id} sticker={sticker} boundsRef={heroRef} onMove={moveSticker} />
        ))}

        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7 }}
          >
            <h1 className="max-w-[760px] font-display text-[clamp(3.8rem,10vw,8.4rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
              We cook<span className="block text-[#FF4D00]">websites.</span>
              <span className="block">And AI.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-lg font-medium leading-7 text-[#141414] sm:text-xl">
              Digital systems for businesses that want more customers and fewer tabs open. Clever design, useful automation, zero corporate fog.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-6 py-3.5 font-display text-sm font-black uppercase tracking-[0.06em] text-[#FAF3E5] shadow-[5px_5px_0_#FF4D00] transition duration-150 hover:-translate-y-1 hover:bg-[#FF4D00]"
              >
                Start a project <ArrowRight className="size-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-6 py-3.5 font-display text-sm font-black uppercase tracking-[0.06em] shadow-[3px_3px_0_#141414] transition duration-150 hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                See what we do <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#5B5146]">
              <Move className="size-4" /> Stickers are draggable. The rest is not.
            </div>
          </motion.div>

          {/* Interactive Parallax Browser Mockup */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92, rotate: reducedMotion ? 0 : 3 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: mockupTilt.rotateX,
              rotateY: mockupTilt.rotateY,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ perspective: 1000 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Hand-placed Sticker Badge */}
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [7, 4, 7] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-5 z-30 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[4px_4px_0_#141414]"
            >
              Made in Odisha 📍
            </motion.div>

            <div className="hard-shadow overflow-hidden rounded-[1.8rem] border-2 border-[#141414] bg-[#FFFCF5]">
              <div className="flex items-center justify-between border-b-2 border-[#141414] bg-[#FFC72E] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FF4D00]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#FAF3E5]" />
                  <span className="size-3 rounded-full border-2 border-[#141414] bg-[#B8E986]" />
                </div>
                <span className="font-display text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#141414]">
                  nextscale.co.in
                </span>
              </div>

              <div className="grid gap-5 p-5 sm:p-7">
                <div className="rounded-2xl border-2 border-[#141414] bg-[#141414] p-5 text-[#FAF3E5] shadow-[3px_3px_0_#FFC72E]">
                  <p className="font-display text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#FFC72E]">
                    Your new digital kitchen
                  </p>
                  <p className="mt-2 max-w-sm font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl">
                    Less chaos. More customers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={reducedMotion ? undefined : { y: -6, rotate: -2 }}
                    className="rounded-2xl border-2 border-[#141414] bg-[#FFB7C5] p-5 shadow-[3px_3px_0_#141414]"
                  >
                    <span className="font-display text-3xl font-black text-[#141414]">01</span>
                    <p className="mt-4 text-sm font-bold text-[#141414]">Sharp websites</p>
                  </motion.div>

                  <motion.div
                    whileHover={reducedMotion ? undefined : { y: -6, rotate: 2 }}
                    className="rounded-2xl border-2 border-[#141414] bg-[#9DD9FF] p-5 shadow-[3px_3px_0_#141414]"
                  >
                    <span className="font-display text-3xl font-black text-[#141414]">02</span>
                    <p className="mt-4 text-sm font-bold text-[#141414]">Helpful AI</p>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border-2 border-[#141414] bg-[#B8E986] px-4 py-3.5 font-bold shadow-[3px_3px_0_#141414]">
                  <span className="font-display text-xs font-black uppercase tracking-[0.08em] text-[#141414]">
                    Live in 3–7 days
                  </span>
                  <motion.span
                    animate={reducedMotion ? undefined : { x: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="font-display text-2xl text-[#141414]"
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
              <Label>What we do</Label>
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
                    <div className="absolute -right-7 -top-7 rotate-12 bg-[#FFC72E] px-8 py-1.5 font-display text-[0.58rem] font-black uppercase text-[#141414] border-2 border-[#141414] shadow-[2px_2px_0_#141414]">
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

      {/* Stats Bar with Icons & Dividers */}
      <section className="border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "25+", label: "businesses live", icon: Rocket },
              { value: "3–7", label: "days to launch", icon: Zap },
              { value: "2h", label: "average reply", icon: MessageCircle },
              { value: "8+", label: "AI systems", icon: Bot },
            ].map(({ value, label, icon: Icon }, index) => (
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
                  {value}
                </div>
                <p className="mt-2 max-w-28 font-display text-xs font-black uppercase leading-4 tracking-[0.06em] text-[#141414]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How It Works */}
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Label>How it works</Label>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["01", "Brief", "Tell us the messy version. We will find the useful bit."],
              ["02", "Build", "We design, write, and ship with the work visible as we go."],
              ["03", "Launch", "You go live with a system your team can actually use."],
            ].map(([number, title, body], index) => (
              <Reveal key={number} delay={index * 0.1}>
                <motion.div whileHover={reducedMotion ? undefined : { x: 6 }} className="border-t-2 border-[#141414] pt-5">
                  <span className="font-display text-5xl font-black text-[#FF4D00]">{number}</span>
                  <h3 className="mt-8 font-display text-3xl font-black uppercase text-[#141414]">{title}</h3>
                  <p className="mt-3 max-w-xs text-base leading-6 text-[#5B5146]">{body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Small Team, Big Jugaad — Unified Card Section */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-3xl border-2 border-[#141414] bg-[#FAF3E5] p-7 shadow-[7px_7px_0_#141414] sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
              <Reveal>
                <Label>A note from the kitchen</Label>
                <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl text-[#141414]">
                  Small team.<br />
                  <span className="text-[#FF4D00]">Big jugaad.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-7 text-[#5B5146]">
                  We are a small, sharp team from Odisha building useful digital things for people everywhere. Chai-powered. Curious by default.
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
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-24">
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
                  <div className={`border-b-2 border-[#141414] transition-colors ${open ? "bg-[#FFFCF5] px-4 my-2 rounded-2xl border-2 border-[#141414] shadow-[4px_4px_0_#FF4D00]" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-black uppercase text-[#141414]"
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
                        open ? "bg-[#FF4D00] text-white rotate-180" : "bg-[#FAF3E5] text-[#141414]"
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
              Got an idea?
            </p>
            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">
              Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-[#FAF3E5]/65">
              Tell us what you are trying to make better. We will bring the good questions and a very practical plan.
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
                Say hello <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
