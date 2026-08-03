"use client";

import { useEffect, useState } from "react";
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
    color: "#FFC72E",
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
    color: "#FFB7C5",
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
    color: "#9DD9FF",
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
    color: "#B8E986",
    description: "Website, AI receptionist, and growth foundations working together as one practical customer system.",
    features: ["Everything in Growth", "Everything in AI Receptionist", "Custom customer journey", "Priority build queue", "90 days optimisation", "One team, one clear outcome"],
  },
];

export function PricingStudio() {
  const [selected, setSelected] = useState("growth");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  useEffect(() => {
    const saved = localStorage.getItem("currencyPreference");
    if (saved === "USD" || saved === "INR") {
      setCurrency(saved);
    }
  }, []);

  const handleCurrencyChange = (curr: "INR" | "USD") => {
    setCurrency(curr);
    localStorage.setItem("currencyPreference", curr);
  };

  const isUSD = currency === "USD";

  return (
    <div className="overflow-hidden">
      <section className="dot-grid-soft border-b-2 border-[#141414] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3 py-1.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#141414]">
                <Sparkles className="size-3.5" /> Launch Pricing
              </span>
              <span className="font-display text-xs font-black uppercase tracking-[0.12em] text-[#5B5146]">Save 50%</span>
            </div>

            {/* Currency Selector Pill */}
            <div className="inline-flex items-center rounded-full border-2 border-[#141414] bg-[#FFFCF5] p-1 shadow-[3px_3px_0_#141414]">
              <button
                type="button"
                onClick={() => handleCurrencyChange("INR")}
                className={`rounded-full px-3.5 py-1.5 font-display text-xs font-black uppercase transition-all ${
                  !isUSD ? "bg-[#141414] text-[#FAF3E5]" : "text-[#141414] hover:bg-[#FAF3E5]"
                }`}
              >
                🇮🇳 INR (₹)
              </button>
              <button
                type="button"
                onClick={() => handleCurrencyChange("USD")}
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 font-display text-xs font-black uppercase transition-all ${
                  isUSD ? "bg-[#1A56DB] text-white" : "text-[#141414] hover:bg-[#FAF3E5]"
                }`}
              >
                <Globe className="size-3.5" /> USD ($)
              </button>
            </div>
          </div>

          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.5rem,8vw,7.8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
            Good work.<br />
            <span className="text-[#FF4D00]">Fair numbers.</span>
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-lg font-medium leading-7 text-[#141414] sm:text-xl">
              Transparent pricing for websites, AI automation, and digital growth systems. Pick your baseline, then we will refine the scope together.
            </p>
            <div className="rounded-xl border-2 border-[#141414] bg-[#FFFCF5] p-4 text-sm shadow-[4px_4px_0_#141414]">
              <p className="font-display text-xs font-black uppercase tracking-[0.1em]">No mystery math</p>
              <p className="mt-1 text-[#5B5146]">
                {isUSD ? "Prices shown in USD ($) · No hidden fees" : "Prices shown in INR (₹) · GST extra if applicable"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF3E5] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Choose your starting point</p>
              <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
                Pick a lane.
              </h2>
            </div>
            <span className="hidden font-display text-xs font-black uppercase tracking-[0.1em] text-[#5B5146] sm:block">
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
                  style={{ backgroundColor: active ? plan.color : "#FFFCF5" }}
                  className={`group relative flex cursor-pointer flex-col rounded-2xl border-2 border-[#141414] p-5 transition duration-200 ${
                    active ? "-translate-y-2 shadow-[7px_7px_0_#141414]" : "shadow-[3px_3px_0_#141414] hover:-translate-y-1"
                  }`}
                >
                  <div className="flex min-h-28 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display text-xs font-black uppercase tracking-[0.08em]">{plan.kicker}</span>
                      {plan.popular && (
                        <span className="rounded-full border-2 border-[#141414] bg-[#141414] px-2 py-1 font-display text-[0.58rem] font-black uppercase text-[#FAF3E5]">
                          Most picked
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-[#5B5146]">{plan.description}</p>

                  <div className="mt-6 border-y-2 border-[#141414] py-4">
                    <p className="text-xs font-bold text-[#5B5146] line-through">{pricingObj.old}</p>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <span className="font-display text-3xl font-black tracking-[-0.06em]">{pricingObj.price}</span>
                      <span className="font-display text-[0.65rem] font-black uppercase rounded-full border border-[#141414] bg-[#FF4D00] px-2 py-0.5 text-white">
                        {plan.save}
                      </span>
                    </div>
                    {pricingObj.recurring && (
                      <p className="mt-2 text-xs font-bold text-[#141414] bg-white/60 rounded px-2 py-1 border border-[#141414]/20">
                        {pricingObj.recurring}
                      </p>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm font-medium">
                        <Check className="mt-0.5 size-4 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(`Hi Next Scale! I am interested in the ${plan.name} plan at ${pricingObj.price}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-4 py-3 font-display text-xs font-black uppercase text-[#FAF3E5] transition hover:bg-[#FF4D00]"
                  >
                    Start here <ArrowRight className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dot-grid-yellow border-y-2 border-[#141414] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label text-[#141414]">What every plan has in common</p>
            <h2 className="mt-3 max-w-xl font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-6xl">
              No fluff.<br />No hidden trapdoors.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-[#141414] bg-[#FFFCF5] p-4 font-bold">✓ Mobile-first by default</div>
            <div className="rounded-xl border-2 border-[#141414] bg-[#FFFCF5] p-4 font-bold">✓ WhatsApp-ready CTAs</div>
            <div className="rounded-xl border-2 border-[#141414] bg-[#FFFCF5] p-4 font-bold">✓ Clear scope before build</div>
            <div className="rounded-xl border-2 border-[#141414] bg-[#FFFCF5] p-4 font-bold">✓ Human support when needed</div>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] px-5 py-20 text-[#FAF3E5] sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.15em] text-[#FFC72E]">Still unsure?</p>
            <h2 className="mt-3 max-w-2xl font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl">
              We can help you pick.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[#FAF3E5]/65">
              Tell us what you are trying to fix or build. We will point you to the sensible starting line.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-5 py-3 font-display text-xs font-black uppercase text-[#141414] transition hover:bg-[#FFC72E]"
            >
              <MessageCircle className="size-4" /> Ask on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5]/50 px-5 py-3 font-display text-xs font-black uppercase transition hover:border-[#FFC72E] hover:text-[#FFC72E]"
            >
              Find my fit <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

