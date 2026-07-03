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

export const metadata: Metadata = {
  title: "About — Nextscale | AI Products & Digital Infrastructure",
  description:
    "Nextscale builds AI products and digital infrastructure for ambitious businesses worldwide. Founded in India, serving globally.",
};

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-36 pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #27d0ed 0%, #e040fb 60%, transparent 100%)" }} />

        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ background: "rgba(39,208,237,0.08)", color: "#27d0ed", border: "1px solid rgba(39,208,237,0.2)" }}>
              <MapPin className="size-3" /> Founded in Odisha · Operating globally
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.0]">
              We build the AI stack<br />
              <span style={{
                background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 50%, #e040fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ambitious businesses run on.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl mx-auto text-[1.05rem] leading-relaxed text-white/45 tracking-[-0.01em]">
              From a small office in Bhubaneswar to clients across India, the Gulf, Europe, and North America —
              Nextscale delivers AI products and digital infrastructure that would cost 10× more anywhere else.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl px-7 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(39,208,237,0.25)]"
                style={{ background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 100%)", color: "#06080c" }}
              >
                Work with us <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/portfolio"
                className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-7 text-[13px] tracking-[-0.01em]")}
              >
                See our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global stats bar */}
      <section className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(16,20,30,0.6)" }}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {GLOBAL_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold tracking-[-0.04em]"
                  style={{ background: "linear-gradient(90deg, #27d0ed, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">{s.label}</div>
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
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Our story</span>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] leading-[1.08] sm:text-5xl">
                  The world doesn't need<br />
                  <span className="text-white/35">another big agency.</span>
                </h2>
                <div className="mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-white/50 tracking-[-0.01em]">
                  <p>
                    I'm Abhisek — a self-taught builder from Odisha who started Nextscale without a computer science degree, VC funding, or a fancy co-working space. Just curiosity, and a conviction that the best tools in the world shouldn't be exclusive to billion-dollar companies.
                  </p>
                  <p>
                    What started as building websites for local clinics evolved into a full AI infrastructure company — deploying intelligent agents, SaaS products, and digital systems for businesses from Bhubaneswar to Birmingham.
                  </p>
                  <p>
                    We don't compete on size. We compete on <span className="text-white/80 font-medium">speed, quality, and outcomes.</span> Every client — whether they're a solo GP in Puri or a startup in Dubai — gets the same standard of work that Silicon Valley teams expect.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Global reach */}
            <Reveal delay={0.1}>
              <div
                className="rounded-2xl p-px"
                style={{ background: "linear-gradient(135deg, rgba(39,208,237,0.2) 0%, rgba(167,139,250,0.15) 100%)" }}
              >
                <div className="rounded-[22px] p-8" style={{ background: "rgba(14,18,28,0.97)" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Globe className="size-4 text-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Where we operate</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {GLOBAL_REACH.map((r, i) => (
                      <div key={r.region} className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: i === 0 ? "rgba(39,208,237,0.15)" : "rgba(255,255,255,0.06)" }}>
                          <Check className="size-3" style={{ color: i === 0 ? "#27d0ed" : "rgba(255,255,255,0.3)" }} strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold tracking-[-0.02em]">{r.region}</p>
                          <p className="text-[12px] text-white/35 tracking-[-0.01em]">{r.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3 rounded-xl p-4" style={{ background: "rgba(39,208,237,0.06)", border: "1px solid rgba(39,208,237,0.12)" }}>
                    <Clock className="size-4 text-primary shrink-0" />
                    <p className="text-[12px] text-white/50 tracking-[-0.01em]">
                      <span className="text-white/80 font-medium">Async-first.</span> We respond within 4 hours across all timezones.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Nextscale */}
        <section className="py-10 pb-24 sm:pb-32 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal>
            <div className="mt-16 mb-14 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Why us</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Built different. By design.
              </h2>
              <p className="mt-4 text-white/40 max-w-lg mx-auto text-[15px] tracking-[-0.01em]">
                Every decision we make comes from one question: what would a world-class team do here?
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_NEXTSCALE.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div
                  className="group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(16,20,30,0.6)",
                  }}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(39,208,237,0.1)", border: "1px solid rgba(39,208,237,0.15)" }}>
                    <w.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em]">{w.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed tracking-[-0.01em]">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-10 pb-24 sm:pb-32 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal>
            <div className="mt-16 mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Milestones</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">The journey so far.</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(39,208,237,0.4), rgba(39,208,237,0.05), transparent)" }} />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year + t.title} delay={i * 0.08} className="pl-10 relative">
                  <div className="absolute left-0 top-1 size-6 rounded-full grid place-items-center"
                    style={{ background: "rgba(14,18,28,0.97)", border: "1px solid rgba(39,208,237,0.25)" }}>
                    <div className="size-2 rounded-full" style={{ background: "#27d0ed" }} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{t.year}</span>
                  <h4 className="mt-2 text-[16px] font-semibold tracking-[-0.02em]">{t.title}</h4>
                  <p className="mt-1.5 text-[13px] text-white/45 leading-relaxed tracking-[-0.01em]">{t.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-10 pb-24 sm:pb-32 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal>
            <div className="mt-16 mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Principles</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">What we believe in.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07}>
                <div className="flex flex-col gap-4 rounded-2xl p-6 h-full"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(16,20,30,0.5)" }}>
                  <div className="flex size-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(39,208,237,0.08)", border: "1px solid rgba(39,208,237,0.12)" }}>
                    <v.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em]">{v.name}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed tracking-[-0.01em]">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, rgba(39,208,237,0.4) 0%, rgba(167,139,250,0.3) 50%, rgba(224,64,251,0.3) 100%)" }}
            >
              <div
                className="relative rounded-[22px] px-10 py-14 text-center overflow-hidden"
                style={{ background: "linear-gradient(160deg, rgba(14,18,28,0.98) 0%, rgba(10,12,18,0.99) 100%)" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,208,237,0.08),transparent_65%)]" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider mb-5"
                    style={{ background: "rgba(39,208,237,0.1)", color: "#27d0ed", border: "1px solid rgba(39,208,237,0.2)" }}>
                    <Star className="size-3" /> Serving clients worldwide
                  </span>
                  <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                    Ready to work together?
                  </h2>
                  <p className="mt-5 text-[15px] text-white/40 max-w-lg mx-auto leading-relaxed tracking-[-0.01em]">
                    Whether you're a clinic in Bhubaneswar or a startup in Dubai — if you need AI that works and a team that ships, we're your call.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center gap-2 rounded-xl px-7 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(39,208,237,0.3)]"
                      style={{ background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 100%)", color: "#06080c" }}
                    >
                      Start a project <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/portfolio"
                      className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-7 text-[13px] tracking-[-0.01em]")}
                    >
                      View our work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
