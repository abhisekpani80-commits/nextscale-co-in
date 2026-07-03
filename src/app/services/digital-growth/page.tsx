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
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Before</p>
                {["Page 3+ on Google", "No reviews (or old bad ones)", "No social media presence", "Patients can't find your hours or address", "Depending on word-of-mouth only"].map((b) => (
                  <div key={b} className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                    <span className="text-destructive">✗</span> {b}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">After</p>
                {["Top 3 in Google Maps for your area", "4.8★ with 50+ reviews", "Consistent branded social content", "Complete, optimised Google Business", "Steady stream of inbound enquiries"].map((a) => (
                  <div key={a} className="flex items-center gap-2 py-1.5 text-sm text-foreground/90">
                    <span className="text-primary">✓</span> {a}
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">What we do</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">Six growth levers, one team.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div className="glow-card flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 h-full">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-heading text-base font-semibold">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={waLink("Hi! I'd like to grow my clinic's online presence.")} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "h-12 gap-2 px-7 text-base")}>
            Get a free audit <ArrowRight className="size-4" />
          </a>
          <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-7 text-base")}>
            View pricing
          </Link>
        </Reveal>
      </section>
    </>
  );
}
