"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { waLink } from "@/lib/site";

const heroTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

function BrowserPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Preview of a business growth dashboard"
      className="relative mx-auto w-full max-w-[520px]"
      initial={{ opacity: 0, y: 28, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ ...heroTransition, delay: 0.42 }}
    >
      <div className="absolute -inset-7 -z-10 rounded-[2rem] bg-[#DCE6FF] blur-3xl" />
      <motion.div
        className="absolute -right-4 top-12 z-20 hidden rounded-xl border border-[#D6E2FF] bg-white px-3 py-2 shadow-[0_18px_40px_rgba(26,86,219,0.15)] sm:block"
        animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0F0E0D]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCFCE7] text-[#0B7A56]">✓</span>
          New appointment booked
        </div>
        <p className="mt-0.5 pl-7 text-[10px] text-[#6B6860]">via your AI receptionist</p>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-[#D9E2F3] bg-white shadow-[0_30px_80px_rgba(26,86,219,0.18)]">
        <div className="flex items-center gap-3 border-b border-[#E8E6E1] bg-[#FBFCFF] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FCA5A5]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FCD34D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#86EFAC]" />
          </div>
          <div className="flex-1 rounded-md border border-[#E8E6E1] bg-white px-2.5 py-1 text-[10px] text-[#8A877F]">
            meridiandentalclinic.in/dashboard
          </div>
          <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-label="System live" />
        </div>

        <div className="p-4 sm:p-5">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1A56DB]">Meridian Dental</p>
              <h2 className="mt-1 text-lg font-extrabold tracking-tight text-[#0F0E0D]">Your growth, in motion.</h2>
            </div>
            <div className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[10px] font-semibold text-[#1A56DB]">Live system</div>
          </div>

          <div className="grid grid-cols-[1.15fr_.85fr] gap-3">
            <div className="rounded-xl border border-[#E8E6E1] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#6B6860]">Appointments this month</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#0F0E0D]">126</p>
                </div>
                <span className="rounded-md bg-[#DCFCE7] px-1.5 py-1 text-[10px] font-bold text-[#0B7A56]">+32%</span>
              </div>
              <div className="mt-4 flex h-16 items-end gap-1.5" aria-hidden="true">
                {[32, 49, 38, 60, 53, 79, 70, 91].map((height, index) => (
                  <motion.span
                    key={height}
                    className="block flex-1 rounded-t-sm bg-[#1A56DB]"
                    initial={{ height: 5 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.65, delay: 0.85 + index * 0.07, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-[#9A968D]"><span>1 Jun</span><span>30 Jun</span></div>
            </div>

            <div className="rounded-xl bg-[#F5F8FF] p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-[#0F0E0D]">AI receptionist</p>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="w-[88%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[9px] text-[#4B485F] shadow-sm">Can I book Saturday?</div>
                <motion.div
                  className="ml-auto w-[92%] rounded-lg rounded-tr-sm bg-[#1A56DB] px-2 py-1.5 text-[9px] text-white"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.45 }}
                >
                  Absolutely. 11:00 AM is available.
                </motion.div>
                <motion.div
                  className="ml-auto flex w-fit items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[8px] font-semibold text-[#0B7A56]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9, duration: 0.35 }}
                >
                  <span>✓</span> Booking confirmed
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-[#FCFCFB] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EEF2FF] text-xs">↗</span>
              <div>
                <p className="text-[10px] font-semibold text-[#0F0E0D]">Leads from WhatsApp</p>
                <p className="text-[9px] text-[#6B6860]">Your team follows up on the right conversations.</p>
              </div>
            </div>
            <span className="text-xs font-extrabold text-[#1A56DB]">+18</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function B2BHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F7F4]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 -top-56 h-[34rem] w-[34rem] rounded-full bg-[#E7EDFF] opacity-80 blur-3xl" />
        <div className="absolute right-[-11rem] top-16 h-[28rem] w-[28rem] rounded-full bg-[#EFF3FF] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.42]"
          style={{ backgroundImage: "linear-gradient(#DCE6FA 1px, transparent 1px), linear-gradient(90deg, #DCE6FA 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "linear-gradient(to bottom, black, transparent 72%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-14">
          <div className="max-w-[640px]">
            <motion.h1
              className="font-heading max-w-[620px] text-[38px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#0F0E0D] sm:text-[52px] xl:text-[70px]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.05 }}
            >
              Build a business your customers can <span className="text-[#1A56DB]">find, trust, and </span><span className="relative inline-block text-[#1A56DB]">choose.<span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#BFD0FF]" /></span>
            </motion.h1>

            <p
              className="mt-6 max-w-[550px] text-[17px] leading-8 text-[#5E5B55] sm:text-[19px]"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Websites, AI workflows, and growth systems that turn every customer conversation into measurable demand.
            </p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.3 }}
            >
              <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1A56DB] px-5 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(26,86,219,0.22)] transition-colors hover:bg-[#1447C0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A56DB]"
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Start on WhatsApp <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </motion.a>
              <Link href="/portfolio" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#B6B3AC] bg-white/70 px-5 text-[15px] font-semibold text-[#0F0E0D] transition-colors hover:border-[#1A56DB] hover:text-[#1A56DB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A56DB]">
                Explore our work <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[12px] font-medium text-[#5E5B55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              {["Live in 3–7 days", "Clear, fixed scope", "Support on WhatsApp"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E2EAFF] text-[10px] font-bold text-[#1A56DB]">✓</span>{item}</span>
              ))}
            </motion.div>
          </div>

          <BrowserPreview />
        </div>
      </div>
    </section>
  );
}
