"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    eyebrow: "A focused start",
    title: "Tell us what success looks like.",
    desc: "Message us on WhatsApp. We reply with a clear scope, a fixed price, and the shortest path to launch.",
  },
  {
    num: "02",
    eyebrow: "Fast, visible progress",
    title: "Watch your system take shape.",
    desc: "We design, write, and build in days — with practical updates that make the work easy to review.",
  },
  {
    num: "03",
    eyebrow: "A confident launch",
    title: "Go live, then keep improving.",
    desc: "Once it is live, we help you turn the first conversations into a repeatable growth engine.",
  },
];

export function B2BProcess() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mx-auto max-w-[610px] text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 flex items-center justify-center gap-2"><span className="h-0.5 w-6 bg-[#1A56DB]" /><p className="section-label">THE PROCESS</p></div>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0F0E0D]">A clear path from first message to first result.</h2>
          <p className="mt-4 text-[16px] leading-7 text-[#6B6860]">No mystery timelines and no handoffs between disconnected teams.</p>
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            className="absolute left-[10%] right-[10%] top-[41px] hidden h-px origin-left bg-[#CCD8F5] lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.1, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
          />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="relative px-0 lg:px-6"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.18 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 mb-6 flex h-[82px] w-[82px] items-center justify-center rounded-2xl border border-[#C7D6FA] bg-[#F7F9FF] font-heading text-[27px] font-extrabold tracking-[-0.05em] text-[#1A56DB] shadow-[0_10px_22px_rgba(26,86,219,0.07)]">{step.num}</div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1A56DB]">{step.eyebrow}</p>
                <h3 className="font-heading mt-2 max-w-[320px] text-[22px] font-extrabold leading-[1.18] tracking-[-0.027em] text-[#0F0E0D]">{step.title}</h3>
                <p className="mt-3 max-w-[330px] text-[14px] leading-6 text-[#6B6860]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
