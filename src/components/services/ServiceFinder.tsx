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
  website: { eyebrow: "your best first move", title: "A sharp business website", body: "A fast, mobile-first website with WhatsApp, trust signals, maps, and one obvious next step.", href: "/services/websites", label: "Explore websites", color: "#EFF6FF" },
  ai: { eyebrow: "your best first move", title: "A 24/7 AI receptionist", body: "An AI agent that answers questions, qualifies enquiries, books appointments, and follows up on WhatsApp.", href: "/services/ai-agents", label: "Explore AI agents", color: "#F0FDF4" },
  growth: { eyebrow: "your best first move", title: "A digital growth system", body: "SEO, Google Business, content, and conversion fixes that make your existing attention work harder.", href: "/services/digital-growth", label: "Explore digital growth", color: "#FAF5FF" },
  suite: { eyebrow: "your best-fit system", title: "Website + AI + growth", body: "A connected starter system: look credible, get found, and respond before the lead goes cold.", href: "/contact", label: "Talk through the suite", color: "#EFF6FF" },
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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-500/5">
      <div className="flex items-center justify-between border-b border-slate-100 bg-blue-50/70 px-5 py-4 sm:px-7">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">The Next Scale fit finder</p>
          <p className="mt-0.5 text-xs text-slate-600">Three quick questions. One useful recommendation.</p>
        </div>
        <span className="font-mono text-xs font-bold text-blue-700 bg-white border border-blue-200 rounded-full px-2.5 py-0.5">
          {complete ? "DONE" : `${step + 1} / ${questions.length}`}
        </span>
      </div>

      <div className="p-6 sm:p-10">
        {!complete ? (
          <div key={question.key} className="animate-[finder-in_350ms_ease-out]">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">{question.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {question.title}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {question.options.map(([value, label, description]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => selectOption(value)}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-5 min-h-[52px] text-left transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-[0.98] touch-manipulation"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {label}
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-slate-500">{description}</span>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((current) => current - 1)}
                className="mt-6 min-h-[36px] font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition touch-manipulation"
              >
                ← Go back
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">{recommendation.eyebrow}</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {recommendation.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{recommendation.body}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={recommendation.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 min-h-[48px] font-semibold text-xs text-white uppercase tracking-wider shadow-md shadow-blue-500/20 transition hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
                >
                  {recommendation.label} <ArrowRight className="size-4" />
                </Link>
                <a
                  href={waLink(`Hi Next Scale! I used the fit finder and think I need ${recommendation.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 min-h-[48px] font-semibold text-xs text-slate-800 uppercase tracking-wider transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 active:scale-95"
                >
                  <MessageCircle className="size-4" /> Ask a human
                </a>
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition"
              >
                <RotateCcw className="size-3.5" /> Start again
              </button>
            </div>
            <div
              style={{ backgroundColor: recommendation.color }}
              className="rounded-2xl border border-slate-200/80 p-6 shadow-sm"
            >
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">Why this fits</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-blue-600" /> Based on your current priorities
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-blue-600" /> Engineered for mobile conversion
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-blue-600" /> Fast delivery with zero lock-in
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
