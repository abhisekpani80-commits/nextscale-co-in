"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Globe, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";

const plans = [
  {
    id: "starter",
    name: "Starter website",
    kicker: "For getting credible online",
    inr: { old: "₹39,999", price: "₹19,999" },
    usd: { old: "$499", price: "$249" },
    save: "50% off",
    description: "A sharp, mobile-first 5-page website with everything a local business needs to look trustworthy and get contacted.",
    features: ["5 custom pages", "WhatsApp + enquiry CTA", "Google Maps + reviews", "SEO setup + analytics", "Domain, hosting + SSL", "Live in 7 days"],
  },
  {
    id: "growth",
    name: "Growth system",
    kicker: "For businesses ready to move",
    inr: { old: "₹69,999", price: "₹34,999" },
    usd: { old: "$899", price: "$449" },
    save: "50% off",
    popular: true,
    description: "A conversion-focused website plus the local growth setup that helps the right customers find you and take action.",
    features: ["Everything in Starter", "Up to 10 custom pages", "Google Business optimisation", "Conversion copy + SEO plan", "Lead capture dashboard", "30 days launch support"],
  },
  {
    id: "ai",
    name: "AI receptionist",
    kicker: "For fewer missed opportunities",
    inr: { old: "₹49,999 setup", price: "₹24,999 setup", recurring: "From ₹4,999/month after setup" },
    usd: { old: "$599 setup", price: "$299 setup", recurring: "From $59/month after setup" },
    save: "50% off",
    description: "A WhatsApp AI agent trained on your business to answer questions, qualify leads, book appointments, and follow up.",
    features: ["Custom WhatsApp AI agent", "FAQs, services + pricing trained", "Appointment / lead capture", "Follow-up sequences", "Human handoff rules"],
  },
  {
    id: "suite",
    name: "Full jugaad suite",
    kicker: "For the whole connected machine",
    inr: { old: "₹1,19,999", price: "₹59,999" },
    usd: { old: "$1,499", price: "$749" },
    save: "50% off",
    description: "Website, AI receptionist, and growth foundations working together as one practical customer system.",
    features: ["Everything in Growth", "Everything in AI Receptionist", "Custom customer journey", "Priority build queue", "90 days optimisation", "One team, one clear outcome"],
  },
];

export function PricingStudio() {
  const [selected, setSelected] = useState("growth");
  const [currency, setCurrency] = useState<"INR" | "USD">(() => {
    if (typeof window === "undefined") return "INR";
    const saved = localStorage.getItem("currencyPreference");
    if (saved === "USD" || saved === "INR") return saved;
    return "INR";
  });

  const handleCurrencyChange = (curr: "INR" | "USD") => {
    setCurrency(curr);
    localStorage.setItem("currencyPreference", curr);
  };

  const isUSD = currency === "USD";

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-700">
                <Sparkles className="size-3.5" /> Launch Pricing
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Save 50%</span>
            </div>

            {/* Currency Selector Pill */}
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-xs">
              <button
                type="button"
                onClick={() => handleCurrencyChange("INR")}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-bold uppercase transition-all ${
                  !isUSD ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🇮🇳 INR (₹)
              </button>
              <button
                type="button"
                onClick={() => handleCurrencyChange("USD")}
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 font-mono text-xs font-bold uppercase transition-all ${
                  isUSD ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Globe className="size-3.5" /> USD ($)
              </button>
            </div>
          </div>

          <h1 className="mt-5 max-w-5xl font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl md:text-7xl">
            Good work.<br />
            <span className="text-blue-600">Fair numbers.</span>
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
              Transparent pricing for websites, AI automation, and digital growth systems. Pick your baseline, then we will refine the scope together.
            </p>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-xs">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-900">No mystery math</p>
              <p className="mt-1 text-slate-500 text-xs">
                {isUSD ? "Prices shown in USD ($) · No hidden fees" : "Prices shown in INR (₹) · GST extra if applicable"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Choose your starting point</p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                Pick a lane.
              </h2>
            </div>
            <span className="hidden font-mono text-xs font-medium text-slate-500 sm:block">
              Click to select plan
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {plans.map((plan) => {
              const active = selected === plan.id;
              const pricingObj = isUSD ? plan.usd : plan.inr;

              return (
                <article
                  key={plan.id}
                  onClick={() => setSelected(plan.id)}
                  className={`group relative flex cursor-pointer flex-col rounded-2xl border p-6 transition duration-200 ${
                    active
                      ? "border-blue-600 bg-blue-50/40 shadow-lg shadow-blue-500/5 -translate-y-1"
                      : "border-slate-200 bg-white shadow-xs hover:-translate-y-0.5 hover:border-blue-300"
                  }`}
                >
                  <div className="flex min-h-24 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-blue-600">{plan.kicker}</span>
                      {plan.popular && (
                        <span className="rounded-full bg-blue-600 px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase text-white shadow-xs">
                          Most picked
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-slate-900">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.description}</p>

                  <div className="mt-6 border-y border-slate-200 py-4">
                    <p className="text-xs font-bold text-slate-400 line-through">{pricingObj.old}</p>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <span className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">{pricingObj.price}</span>
                      <span className="font-mono text-[0.65rem] font-bold uppercase rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-emerald-800">
                        {plan.save}
                      </span>
                    </div>
                    {pricingObj.recurring && (
                      <p className="mt-2 text-xs font-semibold text-blue-700 bg-blue-50 rounded px-2.5 py-1 border border-blue-200">
                        {pricingObj.recurring}
                      </p>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-slate-600">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(`Hi Next Scale! I am interested in the ${plan.name} plan at ${pricingObj.price}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider transition ${
                      active
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    Start here <ArrowRight className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">What every plan has in common</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl text-slate-900">
              No fluff.<br />No hidden trapdoors.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-xs">✓ Mobile-first by default</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-xs">✓ WhatsApp-ready CTAs</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-xs">✓ Clear scope before build</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-xs">✓ Human support when needed</div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-blue-400">Still unsure?</p>
            <h2 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl text-white">
              We can help you pick.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              Tell us what you are trying to fix or build. We will point you to the sensible starting line.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" /> Ask on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Find my fit <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
