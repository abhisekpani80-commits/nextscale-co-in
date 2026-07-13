import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  TrendingUp,
  Bot,
  Shield,
  Check,
  MapPin,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { VALUES, TIMELINE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { founderPersonSchema, profilePageSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Abhisek Pani — Founder of Next Scale | AI Builder",
  description: "Abhisek Pani is the founder and CEO of Next Scale, a premium AI automation and software development company. Read about Abhisek's journey building custom AI agents and digital infrastructure.",
  path: "/about",
  keywords: [
    "Abhisek Pani",
    "founder of Next Scale",
    "Next Scale founder",
    "AI builder India",
    "tech startup India",
    "software development India",
  ]
});


const GLOBAL_STATS = [
  { value: "25+", label: "Businesses served" },
  { value: "12+", label: "AI agents deployed" },
  { value: "8+", label: "Countries reached" },
  { value: "48h", label: "Avg. delivery time" },
];

const GLOBAL_REACH = [
  { region: "India", note: "Primary market — clinics, SMBs, startups" },
  { region: "UAE & Gulf", note: "Healthcare & real estate clients" },
  { region: "UK & Europe", note: "Digital transformation projects" },
  { region: "USA & Canada", note: "SaaS integrations & AI consulting" },
  { region: "Southeast Asia", note: "EdTech & e-commerce solutions" },
];

const WHY_NEXTSCALE = [
  {
    icon: Zap,
    title: "Shipped in days, not months",
    description:
      "While agencies plan sprints, we deliver. AI agents in 48 hours, full websites in 7 days — guaranteed.",
  },
  {
    icon: Globe,
    title: "Built for a global standard",
    description:
      "Every product we build meets the same quality bar as tools used by teams in San Francisco and London.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-first approach",
    description:
      "We don't measure success in code — we measure it in your bookings, leads, and Google ratings.",
  },
  {
    icon: Bot,
    title: "AI-native from day one",
    description:
      "Not retrofitted. Every solution we build has intelligence baked in using the latest models — Claude, Deepgram, OpenAI.",
  },
  {
    icon: Shield,
    title: "Radical transparency",
    description:
      "Pricing is public. No surprises. No NDAs on process. We tell you exactly what we can — and can't — do.",
  },
  {
    icon: Users,
    title: "Async & timezone-ready",
    description:
      "Fully remote, async-first team. We work across IST, GMT, EST — wherever your business is.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={[profilePageSchema()]} />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E8E6E1] pt-32 pb-20">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #1A56DB 0%, #702BDE 60%, transparent 100%)" }} />

        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ background: "rgba(26,86,219,0.06)", color: "#1A56DB", border: "1px solid rgba(26,86,219,0.12)" }}>
              <MapPin className="size-3" /> Remote-First · Serving All of India & Globally
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.0] text-[#0F0E0D]">
              We build the AI stack<br />
              <span style={{
                background: "linear-gradient(90deg, #1A56DB 0%, #702BDE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ambitious businesses run on.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl mx-auto text-[1.05rem] leading-relaxed text-[#6B6860] tracking-[-0.01em]">
              From a small office in Bhubaneswar to clients across India, the Gulf, Europe, and North America —
              Next Scale delivers AI products and digital infrastructure that would cost 10× more anywhere else.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl px-7 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(26,86,219,0.25)] bg-[#1A56DB] text-white hover:bg-[#1447C0]"
              >
                Work with us <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#E8E6E1] bg-white px-7 text-[13px] font-semibold text-[#0F0E0D] hover:bg-[#F4F3F0] transition-all duration-200"
              >
                See our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global stats bar */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {GLOBAL_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold tracking-[-0.04em] text-[#1A56DB]">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B6860]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Founder narrative */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A56DB]">Our story</span>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] leading-[1.08] sm:text-5xl text-[#0F0E0D]">
                  The world doesn't need<br />
                  <span className="text-[#6B6860]/70">another big agency.</span>
                </h2>
                <div className="mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-[#6B6860] tracking-[-0.01em]">
                  <p>
                    I'm <strong className="text-[#0F0E0D]">Abhisek Pani</strong> — the founder and CEO of Next Scale. A self-taught builder from Bhubaneswar, Odisha who started Next Scale without a computer science degree, VC funding, or a fancy co-working space. Just curiosity, and a conviction that the best tools in the world shouldn't be exclusive to billion-dollar companies.
                  </p>
                  <p>
                    What started as building websites for local clinics evolved into a full AI infrastructure company — deploying intelligent agents, SaaS products, and digital systems for businesses from Bhubaneswar to Birmingham.
                  </p>
                  <p>
                    We don't compete on size. We compete on <span className="text-[#0F0E0D] font-medium">speed, quality, and outcomes.</span> Every client — whether they're a solo GP in Puri or a startup in Dubai — gets the same standard of work that Silicon Valley teams expect.
                  </p>
                  <p className="text-[13px] text-[#6B6860]/60">
                    Abhisek Pani · Founder of Next Scale · Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Global reach */}
            <Reveal delay={0.1}>
              <div
                className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="size-4 text-[#1A56DB]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A56DB]">Where we operate</span>
                </div>
                <div className="flex flex-col gap-4">
                  {GLOBAL_REACH.map((r, i) => (
                    <div key={r.region} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <Check className="size-3 text-[#1A56DB]" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold tracking-[-0.02em] text-[#0F0E0D]">{r.region}</p>
                        <p className="text-[12px] text-[#6B6860] tracking-[-0.01em]">{r.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-xl p-4 bg-blue-50/50 border border-blue-100">
                  <Clock className="size-4 text-[#1A56DB] shrink-0" />
                  <p className="text-[12px] text-[#6B6860] tracking-[-0.01em]">
                    <span className="text-[#0F0E0D] font-medium">Async-first.</span> We respond within 4 hours across all timezones.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Next Scale */}
        <section className="py-10 pb-24 sm:pb-32 border-t border-[#E8E6E1]">
          <Reveal>
            <div className="mt-16 mb-14 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A56DB]">Why us</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl text-[#0F0E0D]">
                Built different. By design.
              </h2>
              <p className="mt-4 text-[#6B6860] max-w-lg mx-auto text-[15px] tracking-[-0.01em]">
                Every decision we make comes from one question: what would a world-class team do here?
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_NEXTSCALE.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div
                  className="group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 border border-[#E8E6E1] bg-white shadow-sm hover:border-[#1A56DB]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    <w.icon className="size-5 text-[#1A56DB]" />
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#0F0E0D]">{w.title}</h3>
                  <p className="text-[13px] text-[#6B6860] leading-relaxed tracking-[-0.01em]">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-10 pb-24 sm:pb-32 border-t border-[#E8E6E1]">
          <Reveal>
            <div className="mt-16 mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A56DB]">Milestones</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#0F0E0D]">The journey so far.</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-0 w-px bg-gradient-to-b from-[#1A56DB]/40 to-transparent" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year + t.title} delay={i * 0.08} className="pl-10 relative">
                  <div className="absolute left-0 top-1 size-6 rounded-full grid place-items-center bg-white border border-[#1A56DB]/50 shadow-sm">
                    <div className="size-2 rounded-full bg-[#1A56DB]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1A56DB]">{t.year}</span>
                  <h4 className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-[#0F0E0D]">{t.title}</h4>
                  <p className="mt-1.5 text-[13px] text-[#6B6860] leading-relaxed tracking-[-0.01em]">{t.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-10 pb-24 sm:pb-32 border-t border-[#E8E6E1]">
          <Reveal>
            <div className="mt-16 mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A56DB]">Principles</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#0F0E0D]">What we believe in.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07}>
                <div className="flex flex-col gap-4 rounded-2xl p-6 h-full border border-[#E8E6E1] bg-white shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    <v.icon className="size-5 text-[#1A56DB]" />
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-[#0F0E0D]">{v.name}</h3>
                  <p className="text-[13px] text-[#6B6860] leading-relaxed tracking-[-0.01em]">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl border border-[#E8E6E1] bg-white p-10 py-14 text-center shadow-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_65%)]" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider mb-5 bg-blue-50 text-[#1A56DB] border border-blue-100">
                  <Star className="size-3" /> Serving clients worldwide
                </span>
                <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl text-[#0F0E0D]">
                  Ready to work together?
                </h2>
                <p className="mt-5 text-[15px] text-[#6B6860] max-w-lg mx-auto leading-relaxed tracking-[-0.01em]">
                  Whether you're a clinic in Bhubaneswar or a startup in Dubai — if you need AI that works and a team that ships, we're your call.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-xl px-7 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(26,86,219,0.25)] bg-[#1A56DB] text-white hover:bg-[#1447C0]"
                  >
                    Start a project <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#E8E6E1] bg-white px-7 text-[13px] font-semibold text-[#0F0E0D] hover:bg-[#F4F3F0] transition-all duration-200"
                  >
                    View our work
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
