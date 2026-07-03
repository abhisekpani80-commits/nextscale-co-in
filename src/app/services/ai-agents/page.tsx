import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { AGENTS, SERVICES, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES.find((s) => s.href === "/services/ai-agents")!;

export const metadata: Metadata = {
  title: "AI Agents — WhatsApp AI Receptionist & More",
  description: "24/7 WhatsApp AI that books, follows up, and collects reviews — trained on your clinic.",
};

export default function AIAgentsPage() {
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
        kicker="Service — AI Agents"
        title={<>Your clinic, open <span className="text-primary">24/7</span>.</>}
        description="A WhatsApp number that answers, books, reminds, reviews, and qualifies — without you touching your phone at midnight."
      >
        <a
          href={waLink("Hi! I'm interested in the AI WhatsApp agent for my clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "h-11 gap-2 px-6")}
        >
          <MessageCircle className="size-4" />
          See a live demo
        </a>
      </PageHero>

      {/* Agents */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The five agents</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">One number. Five AI specialists.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Each agent is trained on your specific business — your treatments, your pricing, your availability. They work together, seamlessly, in one WhatsApp conversation.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <div className="glow-card group flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-7 h-full">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <a.icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{a.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.detail}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">{a.startingPrice}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* WhatsApp mockup card */}
          <Reveal delay={0.4} className="md:col-span-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0a1a0f] p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_60%)]" />
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#25D366]/70 mb-4">Sample conversation</p>
              <div className="relative flex flex-col gap-3 max-w-md">
                {[
                  { side: "left", text: "Hi, I'd like to book an appointment for a skin consultation." },
                  { side: "right", text: "Hello! I'd be happy to help you book with Dr. Mishra. We have slots available on Thursday at 11 AM or Friday at 4 PM. Which works better for you?" },
                  { side: "left", text: "Thursday 11 AM please." },
                  { side: "right", text: "Perfect! Confirmed: Thursday, 10 July at 11:00 AM with Dr. Mishra. You'll receive a reminder 2 hours before. See you then! 🌿" },
                ].map((msg, i) => (
                  <div key={i} className={cn("max-w-[78%] rounded-2xl px-4 py-2.5 text-sm", msg.side === "right" ? "self-end bg-[#25D366]/20 text-white" : "self-start bg-white/10 text-white/90")}>
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "h-12 gap-2 px-7 text-base")}>
            <MessageCircle className="size-4" /> Start a 2-week free trial
          </a>
          <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-7 text-base")}>
            View pricing <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
