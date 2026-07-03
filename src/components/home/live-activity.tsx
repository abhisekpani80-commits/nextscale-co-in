"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { DevTerminal } from "@/components/ui/dev-terminal";

const FEED: { time: string; tag: "ship" | "ai" | "growth"; msg: string }[] = [
  { time: "2m ago", tag: "ship", msg: "lumiere-clinic.in · v1.2 → vercel/edge" },
  { time: "14m ago", tag: "ai", msg: "trained meridian-dental whatsapp agent · 41 intents" },
  { time: "1h ago", tag: "growth", msg: "vantage-realty · gmb posts auto-scheduled (×7)" },
  { time: "3h ago", tag: "ship", msg: "studio-aperture portfolio + booking · live" },
  { time: "today", tag: "ai", msg: "aura voice coach · alpha build · 87 chars/min" },
  { time: "today", tag: "ship", msg: "examos mock-test engine · 1,240 PYQs indexed" },
];

const TAG_STYLES: Record<string, string> = {
  ship: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  ai: "border-primary/30 bg-primary/10 text-primary",
  growth: "border-accent-2/30 bg-accent-2/10 text-accent-2",
};

export function LiveActivity() {
  return (
    <section className="relative border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Live activity"
            title={
              <>
                Always shipping.{" "}
                <span className="bg-gradient-to-r from-primary to-[#e040fb] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(39,208,237,0.2)]">
                  In public.
                </span>
              </>
            }
            description="A live look at what we deployed this week — across clients, products and infrastructure."
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </span>
        </div>

        <div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Left: Activity feed */}
          <div className="flex min-w-0 flex-col gap-2.5">
            {FEED.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex w-full min-w-0 items-center gap-4 rounded-xl border border-border bg-card/50 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-card/80"
              >
                <span
                  className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${TAG_STYLES[f.tag]}`}
                >
                  {f.tag}
                </span>
                <p className="min-w-0 flex-1 truncate font-mono text-sm text-foreground/80">{f.msg}</p>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {f.time}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: Live terminal */}
          <DevTerminal
            title="nextscale-ci ⌁ deploy.log"
            typingSpeedMs={18}
            lineDelayMs={400}
            className="h-fit"
          />
        </div>
      </div>
    </section>
  );
}
