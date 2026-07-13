"use client";

import { motion, useReducedMotion } from "framer-motion";

const sectionEase = [0.22, 1, 0.36, 1] as const;

function WhatsAppMockup() {
  const shouldReduceMotion = useReducedMotion();
  const messages = [
    { from: "customer", text: "Can I book for Saturday?" },
    { from: "agent", text: "Yes — 11:00 AM is available." },
    { from: "customer", text: "That works, thank you!" },
  ];

  return (
    <div className="w-[196px] rounded-2xl border border-[#D8E0D5] bg-[#EDE7DE] p-2.5 shadow-[0_15px_35px_rgba(31,41,55,0.12)]">
      <div className="mb-2 flex items-center justify-between rounded-xl bg-[#075E54] px-2.5 py-2 text-[9px] font-semibold text-white">
        <span>NextScale AI assistant</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#A7F3D0]" />
      </div>
      <div className="space-y-2 px-1 pb-1">
        {messages.map((message, index) => (
          <motion.div
            key={message.text}
            className={message.from === "customer" ? "mr-auto max-w-[82%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[9px] leading-[1.45] text-[#303030]" : "ml-auto max-w-[82%] rounded-lg rounded-tr-sm bg-[#DCF8C6] px-2 py-1.5 text-[9px] leading-[1.45] text-[#303030]"}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.16 }}
          >
            {message.text}
          </motion.div>
        ))}
        <motion.div
          className="ml-auto flex w-fit items-center gap-1 rounded-full bg-[#DCF8C6] px-2 py-1 text-[8px] font-semibold text-[#0B7A56]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.58 }}
        >
          <span>✓</span> Appointment booked
        </motion.div>
      </div>
    </div>
  );
}

function ServiceIcon({ type }: { type: "web" | "growth" }) {
  return (
    <div className={type === "web" ? "flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#1A56DB]" : "flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9F2] text-[#0B7A56]"} aria-hidden="true">
      {type === "web" ? "⌘" : "↗"}
    </div>
  );
}

export function B2BServices() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#F8F7F4] py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mb-12 max-w-[650px]"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: sectionEase }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#1A56DB]" />
            <p className="section-label">OUR SERVICES</p>
          </div>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-[1.13] tracking-[-0.035em] text-[#0F0E0D]">
            Every growth lever, connected.
          </h2>
          <p className="mt-4 max-w-[570px] text-[16px] leading-7 text-[#6B6860]">
            We connect the website, the customer conversation, and the follow-up system so none of your demand gets left behind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.div
            className="service-card-white col-span-1 flex flex-col justify-between gap-7 overflow-hidden lg:col-span-8 lg:flex-row lg:items-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: sectionEase, delay: shouldReduceMotion ? 0 : 0.04 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <div className="max-w-[430px]">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6860]">AI WhatsApp agents</p>
              </div>
              <h3 className="font-heading text-[25px] font-extrabold leading-[1.16] tracking-[-0.03em] text-[#0F0E0D]">Your business responds before the lead goes cold.</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#6B6860]">We build AI agents that answer questions, book appointments, and follow up automatically — while your team focuses on the work only people can do.</p>
              <span className="mt-5 inline-flex rounded-full bg-[#1A56DB] px-2.5 py-1 text-[11px] font-semibold text-white">Most popular</span>
            </div>
            <div className="hidden shrink-0 lg:block"><WhatsAppMockup /></div>
          </motion.div>

          <motion.div
            className="service-card-white col-span-1 lg:col-span-4"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: sectionEase, delay: shouldReduceMotion ? 0 : 0.12 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <ServiceIcon type="web" />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6860]">Websites</p>
            <h3 className="font-heading mt-2 text-[21px] font-extrabold tracking-[-0.025em] text-[#0F0E0D]">Built to earn the next click.</h3>
            <p className="mt-3 text-[14px] leading-6 text-[#6B6860]">Fast, mobile-first websites that put your credibility and next step in one clear place.</p>
          </motion.div>

          <motion.div
            className="service-card-white col-span-1 lg:col-span-4"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: sectionEase, delay: shouldReduceMotion ? 0 : 0.08 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <ServiceIcon type="growth" />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6860]">Digital growth</p>
            <h3 className="font-heading mt-2 text-[21px] font-extrabold tracking-[-0.025em] text-[#0F0E0D]">Demand that compounds.</h3>
            <p className="mt-3 text-[14px] leading-6 text-[#6B6860]">SEO, Google Business, and local visibility set up to bring qualified customers — not vanity metrics.</p>
          </motion.div>

          <motion.div
            className="relative col-span-1 overflow-hidden rounded-xl border border-[#1A56DB] bg-[#1A56DB] p-7 text-white lg:col-span-8"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: sectionEase, delay: shouldReduceMotion ? 0 : 0.16 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full border-[28px] border-white/10" aria-hidden="true" />
            <div className="relative max-w-[590px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#D7E2FF]">One connected team</p>
              <h3 className="font-heading mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.03em]">From the first WhatsApp message to the moment a customer converts.</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#D7E2FF]">Strategy, design, technology, and growth all share one outcome: a business system that is easy to trust and easy to act on.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
