import type { Metadata } from "next";
import { MessageCircle, Zap } from "lucide-react";
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
  waLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing — AI Agents from ₹5,999/mo, Websites from ₹4,999",
  description: "Transparent pricing for custom business websites and WhatsApp AI receptionists. Choose a plan that aligns with your business goals.",
  path: "/pricing",
  keywords: ["AI agent pricing", "website development cost India", "business automation packages"]
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(PRICING_FAQ),
        ]}
      />
      <PageHero
        kicker="Pricing"
        title={<>Transparent pricing. <span className="text-primary">No surprises.</span></>}
        description="Everything is public. Pick what your business needs, upgrade anytime, cancel anytime."
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 flex flex-col gap-28">

        {/* AI Agent Bundles */}
        <Reveal>
          <div>
            <div className="mb-10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">AI Agent Bundles</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0F0E0D]">Monthly recurring plans</h2>
              <p className="mt-3 text-base text-[#6B6860] max-w-md mx-auto tracking-tight">
                Full AI automation for your business. Cancel any time.
              </p>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-3">
              {PRICING_AGENTS.tiers.map((tier) => (
                <PricingCard
                  key={tier.name}
                  tier={tier}
                  ctaMessage={`Hi! I'm interested in the ${tier.name} AI agent plan.`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Website Packages */}
        <Reveal>
          <div>
            <div className="mb-10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Website Packages</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0F0E0D]">One-time investment</h2>
              <p className="mt-3 text-base text-[#6B6860] max-w-md mx-auto tracking-tight">
                Live in 7 days. Mobile-first, SEO-ready, built to convert.
              </p>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-3">
              {PRICING_WEBSITES.tiers.map((tier) => (
                <PricingCard
                  key={tier.name}
                  tier={tier}
                  ctaMessage={`Hi! I'm interested in the ${tier.name} website package.`}
                />
              ))}
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
                  <span className="font-mono text-sm font-semibold text-[#1A56DB]">{a.price}</span>
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
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl px-6 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(26,86,219,0.25)] bg-[#1A56DB] text-white hover:bg-[#1447C0]"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
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
                  key={i}
                  value={i}
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
