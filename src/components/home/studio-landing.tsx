"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Move, Sparkles, TouchpadIcon } from "lucide-react";
import { waLink } from "@/lib/site";

// ...
const services = [
  { number: "01", title: "Websites", body: "Fast, expressive websites that make your business look as good as it actually is.", color: "bg-[#FFB7C5]" },
  { number: "02", title: "AI automation", body: "WhatsApp agents and workflows that answer, qualify, book, and follow up while you sleep.", color: "bg-[#9DD9FF]" },
  { number: "03", title: "Digital growth", body: "SEO, Google visibility, and practical systems that turn attention into action.", color: "bg-[#B8E986]" },
];

const work = [
  { initials: "MD", title: "Meridian Dental", type: "Website + AI", result: "More bookings. Fewer no-shows.", color: "bg-[#FFC72E]" },
  { initials: "LS", title: "Lumière Skin", type: "Brand + Website", result: "A glow-up with a conversion path.", color: "bg-[#FFB7C5]" },
  { initials: "VR", title: "Vintage Realty", type: "Lead system", result: "Listings that do the talking.", color: "bg-[#9DD9FF]" },
  { initials: "EA", title: "ExamOS", type: "Product design", result: "Exam prep, minus the panic.", color: "bg-[#B8E986]" },
];

const faqs = [
  ["How quickly can we launch?", "Most websites go live in 3–7 days. AI agents usually take 48–72 hours once we have the right business context."],
  ["Do you only work with Indian businesses?", "We are based in Odisha and work with businesses everywhere. Time zones are just another workflow to automate."],
  ["What does a project cost?", "Starter websites begin at ₹19,999. We scope the work first, then give you a clear fixed price before anything starts."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label mb-4 flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#FF4D00]" /> {children}</p>;
}

export function StudioLanding() {
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <section className="dot-grid relative border-b-2 border-[#141414]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF3E5] to-transparent" />
        <div className="absolute left-[3%] top-[20%] hidden rotate-[-6deg] rounded-full border-2 border-[#141414] bg-[#FFC72E] px-3 py-1.5 font-display text-[0.63rem] font-black tracking-[0.12em] shadow-[3px_3px_0_#141414] sm:block">WEBSITES</div>
        <div className="absolute right-[3%] top-[18%] hidden rotate-6 rounded-full border-2 border-[#141414] bg-[#FFB7C5] px-3 py-1.5 font-display text-[0.63rem] font-black tracking-[0.12em] shadow-[3px_3px_0_#141414] sm:block">AI JUGAAD</div>
        <div className="absolute bottom-[13%] left-[7%] hidden rotate-3 rounded-full border-2 border-[#141414] bg-[#B8E986] px-3 py-1.5 font-display text-[0.63rem] font-black tracking-[0.12em] shadow-[3px_3px_0_#141414] sm:block">NO BORING STUFF</div>
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-3 py-1.5 font-display text-[0.68rem] font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#141414]"><Sparkles className="size-3.5 text-[#FF4D00]" /> Next Scale studio</div>
            <h1 className="max-w-[760px] font-display text-[clamp(3.8rem,10vw,8.4rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">We cook<span className="block text-[#FF4D00]">websites.</span><span className="block">And AI.</span></h1>
            <p className="mt-7 max-w-[560px] text-lg leading-7 text-[#5B5146] sm:text-xl">Digital systems for businesses that want more customers and fewer tabs open. Clever design, useful automation, zero corporate fog.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-5 py-3 font-display text-sm font-black uppercase tracking-[0.06em] text-[#FAF3E5] shadow-[5px_5px_0_#FF4D00] transition duration-150 hover:-translate-y-0.5 hover:bg-[#FF4D00]">Start a project <ArrowRight className="size-4" /></a><Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-5 py-3 font-display text-sm font-black uppercase tracking-[0.06em] transition duration-150 hover:-translate-y-0.5 hover:bg-[#FFC72E]">See the work <ArrowRight className="size-4" /></Link></div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#5B5146]"><Move className="size-4" /> Stickers are draggable. Drag any badge!</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.16 }} className="relative mx-auto w-full max-w-[560px]">
            <motion.div
              drag
              dragConstraints={{ left: -120, right: 120, top: -60, bottom: 120 }}
              whileHover={{ scale: 1.08 }}
              whileDrag={{ scale: 1.18, rotate: 12, zIndex: 30 }}
              className="absolute -right-4 -top-5 z-20 cursor-grab active:cursor-grabbing rotate-6 rounded-lg border-2 border-[#141414] bg-[#FF4D00] px-3 py-2 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[4px_4px_0_#141414]"
            >
              Made in Odisha ✌️
            </motion.div>
            <div className="hard-shadow overflow-hidden rounded-[1.5rem] border-2 border-[#141414] bg-[#FFFCF5]"><div className="flex items-center justify-between border-b-2 border-[#141414] bg-[#FFC72E] px-4 py-3"><div className="flex gap-1.5"><span className="size-3 rounded-full border-2 border-[#141414] bg-[#FF4D00]" /><span className="size-3 rounded-full border-2 border-[#141414] bg-[#FAF3E5]" /><span className="size-3 rounded-full border-2 border-[#141414] bg-[#B8E986]" /></div><span className="font-display text-[0.65rem] font-black uppercase tracking-[0.12em]">nextscale.co.in</span></div><div className="grid gap-5 p-5 sm:p-7"><div className="rounded-xl border-2 border-[#141414] bg-[#141414] p-5 text-[#FAF3E5]"><p className="font-display text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#FFC72E]">Your new digital kitchen</p><p className="mt-3 max-w-sm font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl">Less chaos. More customers.</p></div><div className="grid grid-cols-2 gap-4"><div className="rounded-xl border-2 border-[#141414] bg-[#FFB7C5] p-4"><span className="font-display text-3xl font-black">01</span><p className="mt-5 text-sm font-bold">Sharp websites</p></div><div className="rounded-xl border-2 border-[#141414] bg-[#9DD9FF] p-4"><span className="font-display text-3xl font-black">02</span><p className="mt-5 text-sm font-bold">Helpful AI</p></div></div><div className="flex items-center justify-between rounded-xl border-2 border-[#141414] bg-[#B8E986] px-4 py-3 font-bold"><span>Live in 3–7 days</span><span className="font-display text-2xl">↗</span></div></div></div>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-b-2 border-[#141414] bg-[#141414] py-3 text-[#FAF3E5]"><div className="animate-marquee gap-10 whitespace-nowrap font-display text-sm font-black uppercase tracking-[0.12em]">{["LOGO DESIGN", "WEBSITES", "AI AUTOMATION", "BRANDING", "WHATSAPP BOTS", "DIGITAL GROWTH", "LOGO DESIGN", "WEBSITES", "AI AUTOMATION", "BRANDING"].map((item, index) => <span key={`${item}-${index}`} className="inline-flex items-center gap-10">{item}<b className="text-[#FF4D00]">✳</b></span>)}</div></div>

      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="max-w-xl font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.07em] sm:text-7xl">Good ideas deserve good plumbing.</h2>
              <p className="mt-6 max-w-md text-lg leading-7 text-[#5B5146]">Your website, your customer conversations, and your follow-up should work like one clever little machine.</p>
              <button
                type="button"
                onClick={() => setRevealed((value) => !value)}
                className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-4 py-2 font-display text-xs font-black uppercase tracking-[0.08em] shadow-[3px_3px_0_#141414] transition hover:-translate-y-0.5 hover:bg-[#FFC72E]"
              >
                {revealed ? "Cover up ✕" : "Scratch to reveal 🪄"} <span className="text-[#FF4D00]">↗</span>
              </button>
            </div>

            <div className="relative min-h-[320px] grid gap-4 sm:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative min-h-64 rounded-2xl border-2 border-[#141414] p-5 shadow-[4px_4px_0_#141414] transition duration-300 ${service.color}`}
                >
                  <span className="font-display text-4xl font-black">{service.number}</span>
                  <h3 className="mt-16 font-display text-2xl font-black uppercase leading-[0.95]">{service.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6">{service.body}</p>
                </motion.div>
              ))}

              <AnimatePresence>
                {!revealed && (
                  <motion.button
                    type="button"
                    key="scratch-card"
                    initial={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: 90, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    onClick={() => setRevealed(true)}
                    whileHover={{ scale: 1.02, rotate: -0.5 }}
                    whileTap={{ scale: 0.97 }}
                    className="absolute inset-0 z-20 flex flex-col justify-between rounded-2xl border-2 border-[#141414] bg-[#FF4D00] p-6 text-left text-[#FAF3E5] shadow-[7px_7px_0_#141414] cursor-pointer group overflow-hidden"
                  >
                    {/* Animated diagonal pattern overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#FAF3E5_2px,transparent_2px)] [background-size:16px_16px]" />

                    <div className="relative flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#FAF3E5] bg-[#141414] px-3 py-1 font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                        <Sparkles className="size-3.5 text-[#FFC72E] animate-pulse" /> Scratch &amp; Reveal Card
                      </span>
                      <span className="rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-2.5 py-1 font-display text-[0.62rem] font-black uppercase text-[#141414] group-hover:scale-105 transition-transform">
                        TAP TO UNLOCK ↗
                      </span>
                    </div>

                    <div className="relative mt-8">
                      <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-[#FFC72E]">Top Secret Services</span>
                      <h3 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em]">
                        Scratch / Tap to Reveal Magic ✨
                      </h3>
                    </div>

                    <div className="relative mt-6 flex items-center justify-between border-t-2 border-[#FAF3E5]/30 pt-4 text-sm font-bold">
                      <span>There are 3 things we do best.</span>
                      <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#FFC72E] underline">Scratch Open →</span>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1280px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><SectionLabel>Selected work</SectionLabel><h2 className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl">Stuff we actually shipped.</h2></div><Link href="/portfolio" className="inline-flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.08em] hover:text-[#FF4D00]">See everything <ArrowRight className="size-4" /></Link></div><div className="mt-12 grid gap-7 md:grid-cols-2">{work.map((item, index) => <article key={item.title} className={`group overflow-hidden rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] shadow-[7px_7px_0_#141414] transition duration-200 hover:-translate-y-1 ${index === 0 ? "md:translate-y-8" : ""}`}><div className={`flex min-h-64 items-end justify-between border-b-2 border-[#141414] p-6 ${item.color}`}><span className="font-display text-[7rem] font-black leading-[0.72] tracking-[-0.12em] transition-transform duration-300 group-hover:scale-105">{item.initials}</span><span className="rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-3 py-1 font-display text-[0.62rem] font-black uppercase tracking-[0.1em]">{item.type}</span></div><div className="p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-black uppercase leading-none">{item.title}</h3><p className="mt-2 text-sm font-medium text-[#5B5146]">{item.result}</p></div><span className="font-display text-2xl">↗</span></div></div></article>)}</div></div></section>

      <section className="border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-16 sm:px-8 sm:py-20"><div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">{[["25+", "businesses live"], ["3–7", "days to launch"], ["2h", "average reply"], ["8+", "AI systems"]].map(([value, label]) => <div key={label} className="border-l-2 border-[#141414] pl-4 first:border-l-0 first:pl-0 md:pl-7"><div className="font-display text-5xl font-black leading-none tracking-[-0.08em] sm:text-7xl">{value}</div><p className="mt-2 max-w-28 text-xs font-black uppercase leading-4 tracking-[0.06em]">{label}</p></div>)}</div></section>

      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1280px]"><SectionLabel>How it works</SectionLabel><div className="grid gap-8 md:grid-cols-3">{[["01", "Brief", "Tell us the messy version. We will find the useful bit."], ["02", "Build", "We design, write, and ship with the work visible as we go."], ["03", "Launch", "You go live with a system your team can actually use."]].map(([number, title, body]) => <div key={number} className="border-t-2 border-[#141414] pt-5"><span className="font-display text-5xl font-black text-[#FF4D00]">{number}</span><h3 className="mt-8 font-display text-3xl font-black uppercase">{title}</h3><p className="mt-3 max-w-xs text-base leading-6 text-[#5B5146]">{body}</p></div>)}</div></div></section>

      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1280px]"><div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><SectionLabel>A note from the kitchen</SectionLabel><h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl">Small team.<br />Big jugaad.</h2><p className="mt-6 max-w-md text-lg leading-7 text-[#5B5146]">We are a small, sharp team from India building useful digital things for people everywhere. Chai-powered. Curious by default.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.08em] hover:text-[#FF4D00]">Meet the team <ArrowRight className="size-4" /></Link></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border-2 border-[#141414] bg-[#9DD9FF] p-6 shadow-[5px_5px_0_#141414]"><span className="font-display text-6xl font-black">IN</span><p className="mt-16 font-display text-2xl font-black uppercase">Based in India</p></div><div className="rounded-2xl border-2 border-[#141414] bg-[#FFB7C5] p-6 shadow-[5px_5px_0_#141414]"><span className="font-display text-6xl font-black">∞</span><p className="mt-16 font-display text-2xl font-black uppercase">Working everywhere</p></div></div></div></div></section>

      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto max-w-3xl"><div className="text-center"><SectionLabel>Questions, answered</SectionLabel><h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-6xl">No smoke. Just answers.</h2></div><div className="mt-10 border-t-2 border-[#141414]">{faqs.map(([question, answer], index) => { const open = openFaq === index; return <div key={question} className="border-b-2 border-[#141414]"><button type="button" onClick={() => setOpenFaq(open ? null : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-black uppercase"><span>{question}</span><ChevronDown className={`size-5 shrink-0 transition-transform ${open ? "rotate-180 text-[#FF4D00]" : ""}`} /></button><div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}><p className="overflow-hidden text-base leading-7 text-[#5B5146]">{answer}</p></div></div>; })}</div></div></section>

      <section className="bg-[#141414] px-5 py-24 text-[#FAF3E5] sm:px-8 sm:py-32"><div className="mx-auto max-w-[900px] text-center"><p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FFC72E]">Got an idea?</p><h2 className="mt-4 font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">Let&apos;s build it.</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-[#FAF3E5]/65">Tell us what you are trying to make better. We will bring the good questions and a very practical plan.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-6 py-3 font-display text-sm font-black uppercase text-[#141414] shadow-[5px_5px_0_#FF4D00] transition hover:-translate-y-0.5 hover:bg-[#FFC72E]">Start a project <ArrowRight className="size-4" /></a><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5]/50 px-6 py-3 font-display text-sm font-black uppercase transition hover:border-[#FFC72E] hover:text-[#FFC72E]">Say hello <ArrowRight className="size-4" /></Link></div></div></section>
    </div>
  );
}
