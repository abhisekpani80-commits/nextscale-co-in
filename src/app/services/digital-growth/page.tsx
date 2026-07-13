import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Star, MapPin, Users, BarChart3, Share2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES.find((s) => s.href === "/services/digital-growth")!;

export const metadata: Metadata = {
  title: "Digital Growth — Google Business, SEO & Social Presence",
  description: "Google Business, local SEO and social presence that brings clients to your door.",
};

const services = [
  { icon: MapPin, name: "Google Business Profile", description: "Complete setup and optimisation. Correct categories, photos, hours, services and Q&A — so you rank for local searches that matter." },
  { icon: TrendingUp, name: "Local SEO", description: "On-page SEO, local citations, schema markup, and keyword targeting so your clinic appears when patients search nearby." },
  { icon: Star, name: "Reputation Management", description: "Systematic review acquisition strategy, response templates, and reputation monitoring. Turn happy patients into 5-star reviews." },
  { icon: Share2, name: "Social Media Setup", description: "Profile creation, branded templates, first-month content calendar. Everything you need to look professional on Instagram and Facebook." },
  { icon: Users, name: "Audience Building", description: "Organic growth strategies tailored to clinics and small businesses — not generic follower-farming tactics." },
  { icon: BarChart3, name: "Monthly Growth Reports", description: "Clear, non-technical reports showing what's working: impressions, calls, direction requests, and lead sources." },
];

export default function DigitalGrowthPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: service.href },
          ]),
          serviceSchema(service),
        ]}
      />
      <PageHero
        kicker="Service — Digital Growth"
        title={<>Get found. Get <span className="text-primary">chosen</span>. Get clients.</>}
        description="Most clinics are invisible online. We fix that — Google Business, local SEO, social presence — so your next client finds you, not a competitor."
      />

      {/* Before / after callout */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[#B91C1C] font-bold mb-4">Before</p>
                {["Page 3+ on Google", "No reviews (or old bad ones)", "No social media presence", "Patients can't find your hours or address", "Depending on word-of-mouth only"].map((b) => (
                  <div key={b} className="flex items-center gap-2 py-1.5 text-sm text-[#7F1D1D] font-medium">
                    <span className="text-[#B91C1C] font-bold">✗</span> {b}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[#1A56DB] font-bold mb-4">After</p>
                {["Top 3 in Google Maps for your area", "4.8★ with 50+ reviews", "Consistent branded social content", "Complete, optimised Google Business", "Steady stream of inbound enquiries"].map((a) => (
                  <div key={a} className="flex items-center gap-2 py-1.5 text-sm text-[#1E3A8A] font-medium">
                    <span className="text-[#1A56DB] font-bold">✓</span> {a}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">What we do</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-[#0F0E0D]">Six growth levers, one team.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div className="flex flex-col gap-4 rounded-2xl border border-[#E8E6E1] bg-white p-6 h-full shadow-sm hover:border-[#1A56DB]/30 transition-all duration-300">
                <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-[#1A56DB] border border-blue-100">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-[#0F0E0D]">{s.name}</h3>
                <p className="text-sm text-[#6B6860] leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={waLink("Hi! I'd like to grow my clinic's online presence.")} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-7 text-base font-semibold shadow-sm transition-all duration-200">
            Get a free audit <ArrowRight className="size-4" />
          </a>
          <Link href="/pricing" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#E8E6E1] bg-white text-[#0F0E0D] hover:bg-[#F4F3F0] px-7 text-base font-semibold transition-all duration-200">
            View pricing
          </Link>
        </Reveal>
      </section>
    </>
  );
}
