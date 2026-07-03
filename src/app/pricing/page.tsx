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
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing — AI Agents from ₹5,999/mo, Websites from ₹4,999",
  description: "Transparent pricing for AI agent bundles, website packages, and digital growth services. No hidden fees.",
};

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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">AI Agent Bundles</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Monthly recurring plans</h2>
              <p className="mt-3 text-base text-white/45 max-w-md mx-auto tracking-tight">
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Website Packages</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">One-time investment</h2>
              <p className="mt-3 text-base text-white/45 max-w-md mx-auto tracking-tight">
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Add-ons</p>
              <h2 className="text-2xl font-bold tracking-tight">À la carte extras</h2>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(16,20,30,0.6)",
              }}
            >
              {PRICING_ADDONS.map((a, i) => (
                <div
                  key={a.name}
                  className={cn(
                    "flex items-center justify-between px-6 py-4",
                    i < PRICING_ADDONS.length - 1 && "border-b"
                  )}
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-sm text-white/70 tracking-[-0.01em]">{a.name}</span>
                  <span className="font-mono text-sm font-semibold text-primary">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Custom */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(39,208,237,0.3) 0%, rgba(224,64,251,0.25) 100%)",
            }}
          >
            <div
              className="relative rounded-[22px] p-10 text-center overflow-hidden"
              style={{ background: "linear-gradient(160deg, rgba(14,18,28,0.98) 0%, rgba(10,12,18,0.99) 100%)" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,208,237,0.07),transparent_65%)]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider mb-4"
                  style={{ background: "rgba(39,208,237,0.1)", color: "#27d0ed", border: "1px solid rgba(39,208,237,0.2)" }}
                >
                  <Zap className="size-3" />
                  Enterprise
                </span>
                <h3 className="text-2xl font-bold tracking-tight">Need something custom?</h3>
                <p className="mt-3 text-white/45 max-w-sm mx-auto text-sm leading-relaxed tracking-tight">
                  Multi-location, high volume, or something we haven't thought of yet — let's talk.
                </p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl px-6 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(39,208,237,0.25)]"
                  style={{
                    background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 100%)",
                    color: "#06080c",
                  }}
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <div>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
              <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
            </div>
            <Accordion className="flex flex-col gap-2">
              {PRICING_FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="rounded-2xl px-5 overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(16,20,30,0.6)",
                  }}
                >
                  <AccordionTrigger className="text-[15px] font-semibold py-5 text-left tracking-[-0.02em]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/50 leading-relaxed pb-5 tracking-[-0.01em]">
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
