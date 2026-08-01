"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import Link from "next/link";
import { waLink } from "@/lib/site";

type Answers = { business?: string; goal?: string; urgency?: string };

const questions = [
  {
    key: "business" as const,
    eyebrow: "01 / context",
    title: "What kind of business are we helping?",
    options: [
      ["clinic", "Clinic or healthcare", "Appointments, trust, and fewer missed calls."],
      ["service", "Salon, studio, or local service", "More enquiries, bookings, and repeat customers."],
      ["property", "Real estate or property", "Better listings, leads, and follow-up."],
      ["other", "Something else", "We will shape the right system around you."],
    ],
  },
  {
    key: "goal" as const,
    eyebrow: "02 / ambition",
    title: "What would make the biggest difference right now?",
    options: [
      ["leads", "More qualified enquiries", "Turn attention into a clear next step."],
      ["presence", "A better website", "Make your offer easier to trust and choose."],
      ["automation", "Less manual follow-up", "Let helpful AI handle the repetitive bits."],
      ["visibility", "More Google visibility", "Show up when the right people are looking."],
    ],
  },
  {
    key: "urgency" as const,
    eyebrow: "03 / timing",
    title: "When do you want this working?",
    options: [
      ["now", "This week", "We need a fast, focused launch."],
      ["soon", "This month", "We want it done properly and moving soon."],
      ["explore", "I am exploring", "Help me understand the smartest next step."],
    ],
  },
];

const recommendations = {
  website: { eyebrow: "your best first move", title: "A sharp business website", body: "A fast, mobile-first website with WhatsApp, trust signals, maps, and one obvious next step.", href: "/services/websites", label: "Explore websites", color: "#FFC72E" },
  ai: { eyebrow: "your best first move", title: "A 24/7 AI receptionist", body: "An AI agent that answers questions, qualifies enquiries, books appointments, and follows up on WhatsApp.", href: "/services/ai-agents", label: "Explore AI agents", color: "#9DD9FF" },
  growth: { eyebrow: "your best first move", title: "A digital growth system", body: "SEO, Google Business, content, and conversion fixes that make your existing attention work harder.", href: "/services/digital-growth", label: "Explore digital growth", color: "#B8E986" },
  suite: { eyebrow: "your best-fit system", title: "Website + AI + growth", body: "A connected starter system: look credible, get found, and respond before the lead goes cold.", href: "/contact", label: "Talk through the suite", color: "#FFB7C5" },
};

function chooseRecommendation(answers: Answers) {
  if (answers.goal === "automation") return recommendations.ai;
  if (answers.goal === "visibility") return recommendations.growth;
  if (answers.goal === "presence") return recommendations.website;
  if (answers.business === "clinic" || answers.goal === "leads") return recommendations.suite;
  return recommendations.website;
}

export function ServiceFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const complete = step >= questions.length;
  const recommendation = useMemo(() => chooseRecommendation(answers), [answers]);
  const question = questions[step];

  const selectOption = (value: string) => {
    if (!question) return;
    setAnswers((current) => ({ ...current, [question.key]: value }));
    setStep((current) => current + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="overflow-hidden rounded-[1.5rem] border-2 border-[#141414] bg-[#FFFCF5] shadow-[8px_8px_0_#141414]">
      <div className="flex items-center justify-between border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-4 sm:px-7">
        <div><p className="font-display text-[0.68rem] font-black uppercase tracking-[0.14em]">The Next Scale fit finder</p><p className="mt-1 text-xs font-semibold text-[#5B5146]">Three tiny questions. One useful answer.</p></div>
        <span className="font-display text-sm font-black">{complete ? "DONE" : `${step + 1} / ${questions.length}`}</span>
      </div>

      <div className="p-5 sm:p-8">
        {!complete ? (
          <div key={question.key} className="animate-[finder-in_350ms_ease-out]">
            <p className="section-label">{question.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-6xl">{question.title}</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {question.options.map(([value, label, description]) => (
                <button key={value} type="button" onClick={() => selectOption(value)} className="group rounded-xl border-2 border-[#141414] bg-[#FAF3E5] p-4 text-left transition duration-200 hover:-translate-y-1 hover:bg-[#FFB7C5] hover:shadow-[4px_4px_0_#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D00]">
                  <span className="flex items-start justify-between gap-3"><span className="font-display text-lg font-black uppercase leading-tight">{label}</span><ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" /></span>
                  <span className="mt-2 block text-sm leading-5 text-[#5B5146]">{description}</span>
                </button>
              ))}
            </div>
            {step > 0 && <button type="button" onClick={() => setStep((current) => current - 1)} className="mt-6 text-xs font-black uppercase tracking-[0.1em] text-[#5B5146] hover:text-[#FF4D00]">← Go back</button>}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div><p className="section-label">{recommendation.eyebrow}</p><h2 className="mt-3 max-w-xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl">{recommendation.title}</h2><p className="mt-5 max-w-xl text-lg leading-7 text-[#5B5146]">{recommendation.body}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href={recommendation.href} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-5 py-3 font-display text-sm font-black uppercase text-[#FAF3E5] shadow-[4px_4px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FF4D00]">{recommendation.label} <ArrowRight className="size-4" /></Link><a href={waLink(`Hi Next Scale! I used the fit finder and think I need ${recommendation.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] px-5 py-3 font-display text-sm font-black uppercase transition hover:-translate-y-1 hover:bg-[#FFC72E]"><MessageCircle className="size-4" /> Ask a human</a></div><button type="button" onClick={reset} className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-[#5B5146] hover:text-[#FF4D00]"><RotateCcw className="size-3.5" /> Start again</button></div>
            <div style={{ backgroundColor: recommendation.color }} className="rounded-2xl border-2 border-[#141414] p-5 shadow-[5px_5px_0_#141414]"><p className="font-display text-xs font-black uppercase tracking-[0.12em]">Why this fits</p><ul className="mt-5 space-y-3 text-sm font-bold"><li className="flex gap-2"><Check className="size-4 shrink-0" /> Based on your answers</li><li className="flex gap-2"><Check className="size-4 shrink-0" /> Designed for mobile first</li><li className="flex gap-2"><Check className="size-4 shrink-0" /> Clear next step, no hard sell</li></ul></div>
          </div>
        )}
      </div>
    </div>
  );
}
