"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How fast can Next Scale build and launch our system?",
    a: "We operate on guaranteed 5–7 business day sprint cycles. Websites are deployed live on edge servers within 7 days, and WhatsApp AI agents go live within 48–72 hours after connecting business context.",
  },
  {
    q: "How much does a project typically cost?",
    a: "Projects start at ₹19,999 ($249) for a 5-page sub-second starter platform and scale up to ₹79,999 ($999) for full enterprise suites with 24/7 autonomous WhatsApp agents, custom CRM integration, and local SEO domination.",
  },
  {
    q: "What is a WhatsApp AI receptionist and how does it help?",
    a: "It is an autonomous conversational agent connected to the official Meta Cloud WhatsApp API. It answers client questions, qualifies budgets, syncs appointments with Google Calendar, and sends reminders automatically without staff intervention.",
  },
  {
    q: "Do we get 100% ownership of our code?",
    a: "Yes, 100%. Unlike agencies that trap you in proprietary platforms, we hand over full GitHub repository ownership, domain DNS records, and hosting credentials upon project completion.",
  },
];

export function GravityFAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#07090e] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff3ba1] flex items-center justify-center gap-1.5">
            <HelpCircle className="size-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
            Clear Answers. <br />
            <span className="text-gravity-gradient">Zero Agency Fluff.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`card-gravity overflow-hidden transition-all ${
                  isOpen ? "border-[#ff3ba1]/50 bg-[#141722]" : "bg-[#12151e]"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 text-[#ffa011] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
