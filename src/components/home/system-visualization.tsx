"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Neon-styled system console visualization.
 * Animated ambient SVG with glowing lines and neon accents.
 * No fake data — clearly labeled as a concept render.
 */
export function SystemVisualization() {
  const [t, setT] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    let lastTick = 0;
    const FRAME_MS = 50; // ~20fps cap to save battery

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - lastTick < FRAME_MS) return;
      lastTick = now;
      setT((now - start) / 1000);
    };

    const run = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const pause = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState === "visible") run();
        else pause();
      },
      { threshold: 0.05 }
    );
    const node = wrapRef.current;
    if (node) io.observe(node);

    const onVis = () => {
      if (document.visibilityState === "visible" && node) {
        const rect = node.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) run(); else pause();
      } else {
        pause();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      pause();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const w1 = 8 * Math.sin(t * 0.5);
  const w2 = 6 * Math.cos(t * 0.4);
  const w3 = 10 * Math.sin(t * 0.3);

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{
        border: "1px solid var(--color-line-hover)",
        borderRadius: "20px",
        background:
          "radial-gradient(120% 80% at 50% 0%, rgba(0,245,255,0.05) 0%, transparent 50%), var(--color-card)",
        boxShadow:
          "0 0 40px rgba(0,245,255,0.05), 0 0 0 1px rgba(0,245,255,0.08), inset 0 1px 0 rgba(0,245,255,0.04)",
        overflow: "hidden",
      }}
    >
      {/* Corner glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "var(--color-neon)",
          filter: "blur(80px)",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <div className="p-5 sm:p-7">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            {/* Pulsing neon dot */}
            <span
              className="relative inline-block size-2.5 rounded-full"
              style={{ background: "var(--color-neon)" }}
              aria-hidden
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "var(--color-neon)",
                  animation: "glow-ping 2s ease-out infinite",
                  opacity: 0.7,
                }}
              />
            </span>
            <span className="t-eyebrow !text-[10px]">
              System · NextScale Console
            </span>
          </div>
          <span
            className="font-mono text-[10px]"
            style={{ color: "var(--color-text-dim)" }}
          >
            v2.1
          </span>
        </div>

        {/* Main panel */}
        <div
          className="rounded-xl p-4 sm:p-5"
          style={{
            border: "1px solid var(--color-line)",
            background: "var(--color-ink)",
          }}
        >
          {/* Site header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div
                className="size-8 rounded-md grid place-items-center"
                style={{
                  border: "1px solid var(--color-neon)",
                  boxShadow: "0 0 8px var(--color-neon-dim)",
                  background: "var(--color-card)",
                }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 20 20"
                  className="size-4"
                  fill="var(--color-neon)"
                >
                  <path d="M3 17V3h2l8 9.5V3h2v14h-2L5 7.5V17H3z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-medium leading-none">
                  yourbrand.com
                </div>
                <div
                  className="text-[10px] mt-1"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  Production · 99/100 PSI
                </div>
              </div>
            </div>
            <span
              className="t-eyebrow !text-[10px] font-mono"
              style={{
                color: "var(--color-neon)",
                textShadow: "0 0 6px var(--color-neon-mid)",
                animation: "neon-flicker 8s ease-in-out infinite",
              }}
            >
              Live
            </span>
          </div>

          {/* Animated chart */}
          <div
            className="relative rounded-lg overflow-hidden mb-4"
            style={{ height: "90px", background: "var(--color-surface)" }}
          >
            <svg
              viewBox="0 0 240 90"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              aria-label="System activity graph — concept visualization"
            >
              <defs>
                <linearGradient id="neonFill" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="#00f5ff"
                    stopOpacity="0.2"
                  />
                  <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`M 0 ${70 + w1} L 25 ${60 - w2} L 50 ${50 + w3} L 75 ${40 - w1} L 100 ${45 + w2} L 125 ${30 - w3} L 150 ${38 + w1} L 175 ${25 - w2} L 200 ${35 + w3} L 225 ${20 - w1} L 240 22 L 240 90 L 0 90 Z`}
                fill="url(#neonFill)"
              />
              <path
                d={`M 0 ${70 + w1} L 25 ${60 - w2} L 50 ${50 + w3} L 75 ${40 - w1} L 100 ${45 + w2} L 125 ${30 - w3} L 150 ${38 + w1} L 175 ${25 - w2} L 200 ${35 + w3} L 225 ${20 - w1} L 240 22`}
                fill="none"
                stroke="#00f5ff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                style={{
                  filter: "drop-shadow(0 0 3px #00f5ff) drop-shadow(0 0 8px rgba(0,245,255,0.5))",
                }}
              />
            </svg>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "0.7s", sub: "Load time" },
              { label: "99", sub: "PSI score" },
              { label: "24/7", sub: "AI online" },
            ].map((m) => (
              <div key={m.sub} className="text-center">
                <div
                  className="font-semibold tracking-tight"
                  style={{
                    fontSize: "18px",
                    color: "var(--color-neon)",
                    textShadow: "0 0 8px var(--color-neon-mid)",
                  }}
                >
                  {m.label}
                </div>
                <div
                  className="text-[10px] mt-1"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nodes */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {[
            {
              label: "AI Receptionist",
              status: "Booking · captured",
              time: "WhatsApp · just now",
              active: true,
            },
            {
              label: "Lead pipeline",
              status: "Calendar synced · 1 new",
              time: "CRM · just now",
              active: false,
            },
          ].map((n) => (
            <div
              key={n.label}
              className="rounded-xl p-3.5"
              style={{
                border: n.active
                  ? "1px solid var(--color-neon)"
                  : "1px solid var(--color-line)",
                background: "var(--color-card)",
                boxShadow: n.active
                  ? "0 0 12px var(--color-neon-dim), inset 0 0 8px rgba(0,245,255,0.03)"
                  : "none",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="size-1.5 rounded-full"
                  style={{
                    background: n.active
                      ? "var(--color-neon)"
                      : "var(--color-text-dim)",
                    boxShadow: n.active
                      ? "0 0 4px var(--color-neon)"
                      : "none",
                  }}
                  aria-hidden
                />
                <span className="t-eyebrow !text-[9px]">{n.label}</span>
              </div>
              <div className="text-[11px]">{n.status}</div>
              <div
                className="text-[10px] mt-1"
                style={{ color: "var(--color-text-dim)" }}
              >
                {n.time}
              </div>
            </div>
          ))}
        </div>

        {/* Footer annotation */}
        <div
          className="mt-4 flex items-center justify-between text-[10px] font-mono"
          style={{ color: "var(--color-text-dim)" }}
        >
          <span>UI · concept render</span>
          <span style={{ color: "var(--color-neon)", opacity: 0.5 }}>// ns.sys</span>
        </div>
      </div>
    </div>
  );
}
