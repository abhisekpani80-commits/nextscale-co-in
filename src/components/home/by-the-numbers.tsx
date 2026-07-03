"use client";

import { Reveal } from "@/components/ui/reveal";
import CountUp from "@/components/CountUp";
import { STATS } from "@/lib/site";

export function ByTheNumbers() {
  return (
    <section
      className="relative isolate overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Grid dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* Center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(39,208,237,0.04)" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:gap-x-6 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group flex flex-col items-center text-center">
                {/* Number */}
                <div className="relative">
                  <span
                    className="flex items-baseline font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                      letterSpacing: "-0.04em",
                      background:
                        "linear-gradient(135deg, #27d0ed 0%, #a78bfa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <CountUp
                      to={stat.value}
                      duration={1.8}
                      separator=","
                      className="tabular-nums"
                    />
                    {stat.suffix && (
                      <span style={{ fontSize: "0.75em" }}>{stat.suffix}</span>
                    )}
                  </span>
                  {/* Subtle glow under number */}
                  <div
                    className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-16 blur-xl opacity-50"
                    style={{ background: "#27d0ed" }}
                  />
                </div>
                {/* Label */}
                <span
                  className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
