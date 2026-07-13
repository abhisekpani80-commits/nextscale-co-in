"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    q: "How much does a custom business website cost?",
    a: "Our starter business package starts at ₹4,999 for a standard 5-page setup (live in 7 days). Complete enterprise builds with custom UI designs, full-fledged SEO setups, and database backends start from ₹12,999. All packages include secure hosting and SSL.",
  },
  {
    q: "What is a WhatsApp AI receptionist and how does it work?",
    a: "It is an AI agent trained specifically on your company's service menu, FAQs, and availability logs. Operating 24/7 inside your WhatsApp Business number, it greets users, answers pricing questions, qualifies inquiries, and logs bookings directly in your calendar without manual work.",
  },
  {
    q: "How fast can you build and launch a website?",
    a: "Next Scale guarantees websites live in 7 days. AI receptionist agents go live within 48 to 72 hours. Our structured development process runs from Discovery on Day 1 to live Deployment on Day 7.",
  },
  {
    q: "Do you build websites for medical clinics and doctors?",
    a: "Yes, we specialize in high-conversion websites for clinics, including dental offices, dermatology centers, therapy hubs, and CA practices. We bundle active review management tools, booking forms, and locations mapping coordinates as standard.",
  },
  {
    q: "Where is Next Scale located and how do you operate?",
    a: "Next Scale is a premium AI Automation and Software Development company operating on a remote-first delivery model. We serve growing businesses, clinics, and startups across all of India, keeping overhead low to deliver world-class software speed.",
  },
];

export function B2BFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="scroll-fade mx-auto max-w-4xl px-6 py-20 sm:py-28" aria-label="Frequently Asked Questions">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Questions &amp; Answers</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F0E0D] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-[#E8E6E1] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/20">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="size-4.5 text-[#1A56DB] shrink-0" />
                    <span className="font-heading text-sm font-semibold text-[#0F0E0D]">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-4 text-[#6B6860] shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-xs sm:text-sm text-[#6B6860] leading-relaxed border-t border-[#F4F3F0] pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
