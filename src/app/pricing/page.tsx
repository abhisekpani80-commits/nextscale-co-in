"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Zap, Globe, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PricingCard } from "@/components/pricing/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PRICING_AGENTS,
  PRICING_WEBSITES,
  PRICING_ADDONS,
  PRICING_FAQ,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [isINR, setIsINR] = useState<boolean>(true);
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  const [currencyReady, setCurrencyReady] = useState<boolean>(false);

  useEffect(() => {
    async function initCurrency() {
      const saved = localStorage.getItem("currencyPreference");
      if (saved) {
        setIsINR(saved === "INR");
        setCurrencyReady(true);
        return;
      }

      try {
        const res = await fetch("https://ip-api.com/json/?fields=countryCode");
        if (res.ok) {
          const data = await res.json();
          if (data && data.countryCode) {
            setIsINR(data.countryCode === "IN");
          }
        }
      } catch (err) {
        console.error("Geo IP failed, defaulting to INR", err);
      } finally {
        setCurrencyReady(true);
      }
    }

    initCurrency();
  }, []);

  const toggleCurrency = (currency: "INR" | "USD") => {
    setIsINR(currency === "INR");
    localStorage.setItem("currencyPreference", currency);
  };

  return (
    <>
      <PageHero
        kicker="Pricing"
        title={<>Transparent pricing. <span className="text-primary">No surprises.</span></>}
        description="Everything is public. Pick what your business needs, upgrade anytime, cancel anytime."
      />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20 flex flex-col gap-24">

        {/* Toggles */}
        <div className="flex flex-col items-center justify-center gap-8 mb-4">
          <div className="flex items-center rounded-full border border-[#E8E6E1] bg-white p-1 shadow-sm">
            <button
              onClick={() => toggleCurrency("INR")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                isINR ? "bg-[#1A56DB] text-white shadow-md" : "text-[#6B6860] hover:text-[#0F0E0D]"
              )}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => toggleCurrency("USD")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5",
                !isINR ? "bg-[#1A56DB] text-white shadow-md" : "text-[#6B6860] hover:text-[#0F0E0D]"
              )}
            >
              <Globe className="w-4 h-4" />
              USD ($)
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-[#0F0E0D]" : "text-[#6B6860]")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#E8E6E1] transition-colors focus:outline-none"
              style={{ background: isAnnual ? "#1A56DB" : "#E8E6E1" }}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={cn(
                  "inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm",
                  isAnnual ? "translate-x-8" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-2 transition-colors", isAnnual ? "text-[#0F0E0D]" : "text-[#6B6860]")}>
              Annually
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 tracking-wider uppercase">
                Save 17%
              </span>
            </span>
          </div>
        </div>

        {/* ROI Stats */}
        <Reveal>
          <div className="mb-8">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#0F0E0D]">What our clients get back</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "3.2x", desc: "more leads captured via AI agent vs contact form" },
                { title: "18 hours", desc: "saved per month on follow-ups and scheduling" },
                { title: "6 weeks", desc: "average time to first paid ROI on automation" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl border border-[#E8E6E1] bg-white shadow-sm text-center">
                  <span className="text-4xl font-extrabold text-[#1A56DB] mb-2">{stat.title}</span>
                  <span className="text-sm font-medium text-[#6B6860] leading-relaxed max-w-[200px]">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* AI Agent Bundles (Recurring) */}
        <Reveal>
          <div id="recurring">
            <div className="mb-10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">AI Automation Plans</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0F0E0D]">Monthly recurring systems</h2>
              <p className="mt-3 text-base text-[#6B6860] max-w-md mx-auto tracking-tight">
                Full AI automation for your business. Cancel any time.
              </p>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-3">
              {PRICING_AGENTS.tiers.map((tier) => {
                const currencyObj = isINR ? tier.pricing.inr : tier.pricing.usd;
                const rawPrice = isAnnual ? (currencyObj.annual ?? currencyObj.monthly) : currencyObj.monthly;
                const displayPrice = String(rawPrice);
                const isCustomPrice = displayPrice === "Custom";
                const displayPeriod = isCustomPrice ? undefined : "/month";
                const displaySetupFee = isAnnual && currencyObj.annualBilled
                  ? `Billed ${currencyObj.annualBilled}/year`
                  : currencyObj.setupFee ?? undefined;

                const currencyLabel = isINR ? "INR" : "USD";
                const billingCycle = isAnnual ? "Annual" : "Monthly";
                
                // Detailed text message for the WhatsApp/Email click
                const ctaMessage = isCustomPrice
                  ? `Hi Next Scale! I'm interested in the Enterprise AI Automation Plan. Let's discuss custom integration needs, volume, and specifications for my business.`
                  : `Hi Next Scale! I'm interested in subscribing to the ${tier.name} AI Automation Plan. [Details: ${currencyLabel} pricing, ${displayPrice}/month under ${billingCycle} billing]. Please let me know how to proceed.`;

                // Handle ctaHref dynamically if Enterprise or custom links exist
                let ctaHref = undefined;
                if (isCustomPrice) {
                  ctaHref = isINR 
                    ? `https://wa.me/919556436685?text=${encodeURIComponent(ctaMessage)}`
                    : `mailto:hello@nextscale.co.in?subject=Enterprise%20AI%20Automation%20Plan%20Inquiry&body=${encodeURIComponent(ctaMessage)}`;
                }

                return (
                  <PricingCard
                    key={tier.name}
                    tier={tier}
                    isEnterprise={tier.name === "Enterprise"}
                    loading={!currencyReady}
                    displayPrice={displayPrice}
                    displayPeriod={displayPeriod}
                    displaySetupFee={displaySetupFee}
                    ctaLabel={currencyObj.ctaLabel ?? "Get started"}
                    ctaHref={ctaHref}
                    ctaMessage={ctaMessage}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Website Packages (One-Time) */}
        <Reveal>
          <div id="one-time">
            <div className="mb-10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Website Packages</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0F0E0D]">One-time investment</h2>
              <p className="mt-3 text-base text-[#6B6860] max-w-md mx-auto tracking-tight">
                Live in 7 days. Mobile-first, SEO-ready, built to convert.
              </p>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-3">
              {PRICING_WEBSITES.tiers.map((tier) => {
                const displayPrice = isINR ? tier.pricing.inr : tier.pricing.usd;
                const currencyLabel = isINR ? "INR" : "USD";
                
                const ctaMessage = `Hi Next Scale! I'm interested in building a website with you using the ${tier.name} Website Package. [Details: ${currencyLabel} pricing, ${displayPrice} one-time investment]. Please share the next steps.`;

                return (
                  <PricingCard
                    key={tier.name}
                    tier={tier}
                    loading={!currencyReady}
                    displayPrice={String(displayPrice)}
                    displayPeriod={tier.pricing.period}
                    ctaLabel="Build my website"
                    ctaMessage={ctaMessage}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Add-ons */}
        <Reveal>
          <div>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Add-ons</p>
              <h2 className="text-2xl font-bold tracking-tight text-[#0F0E0D]">Individual Add-ons</h2>
            </div>
            <div
              className="rounded-2xl overflow-hidden border border-[#E8E6E1] bg-white shadow-sm"
            >
              {PRICING_ADDONS.map((a, i) => (
                <div
                  key={a.name}
                  className={cn(
                    "flex items-center justify-between px-6 py-4",
                    i < PRICING_ADDONS.length - 1 && "border-b border-[#E8E6E1]"
                  )}
                >
                  <span className="text-sm text-[#0F0E0D] font-medium tracking-[-0.01em]">{a.name}</span>
                  {!currencyReady ? (
                    <span className="h-5 w-24 rounded bg-gray-100 animate-pulse" />
                  ) : (
                    <span className="font-mono text-sm font-semibold text-[#1A56DB] animate-in fade-in">
                      {isINR ? a.inr : a.usd}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Custom */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-[#E8E6E1] bg-white p-10 text-center shadow-sm"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_65%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider mb-4 bg-blue-50 text-[#1A56DB] border border-blue-100"
              >
                <Zap className="size-3" />
                Enterprise
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#0F0E0D]">Need something custom?</h3>
              <p className="mt-3 text-[#6B6860] max-w-sm mx-auto text-sm leading-relaxed tracking-tight">
                Multi-location, high volume, or something we haven't thought of yet — let's talk.
              </p>
              <a
                href={
                  isINR
                    ? `https://wa.me/919556436685?text=${encodeURIComponent("Hi Next Scale! I'm interested in a custom enterprise solution. I would like to talk about custom automation integrations and scaling digital presence for my business.")}`
                    : `mailto:hello@nextscale.co.in?subject=Custom%20Enterprise%20Integration%20Inquiry&body=${encodeURIComponent("Hi Next Scale! I'm interested in a custom enterprise solution. I would like to talk about custom automation integrations and scaling digital presence for my business.")}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl px-6 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(26,86,219,0.25)] bg-[#1A56DB] text-white hover:bg-[#1447C0]"
              >
                {isINR ? <MessageCircle className="size-4" /> : <Globe className="size-4" />}
                {isINR ? "Chat on WhatsApp" : "Contact Sales"}
              </a>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <div>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">FAQ</p>
              <h2 className="text-2xl font-bold tracking-tight text-[#0F0E0D]">Frequently asked questions</h2>
            </div>
            <Accordion className="flex flex-col gap-2">
              {PRICING_FAQ.map((item, i) => (
                <AccordionItem
                  key={i.toString()}
                  value={i.toString()}
                  className="rounded-2xl px-5 overflow-hidden border border-[#E8E6E1] bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-[15px] font-semibold py-5 text-left tracking-[-0.02em] text-[#0F0E0D] hover:text-[#1A56DB]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6B6860] leading-relaxed pb-5 tracking-[-0.01em]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </>
  );
}
