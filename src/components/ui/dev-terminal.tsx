"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "info"; text: string };

const DEFAULT_LINES: Line[] = [
  { kind: "cmd", text: "buildora deploy lumiere-clinic --prod" },
  { kind: "info", text: "→ provisioning whatsapp ai agent" },
  { kind: "info", text: "→ tuning intents · 24 flows · 1.4s" },
  { kind: "ok",   text: "✓ ai agent live · wa.me/lumiere" },
  { kind: "info", text: "→ shipping site · next 16 · vercel edge" },
  { kind: "ok",   text: "✓ deployed in 6.2s · lumiere.in" },
  { kind: "cmd", text: "buildora ship --to=meridian-dental" },
  { kind: "info", text: "→ google business · gmb sync ok" },
  { kind: "ok",   text: "✓ no-shows ↓ 55% · revenue ↑ 32%" },
];

export function DevTerminal({
  title = "buildora@odisha:~",
  lines = DEFAULT_LINES,
  className,
  typingSpeedMs = 14,
  lineDelayMs = 320,
  loop = true,
}: {
  title?: string;
  lines?: Line[];
  className?: string;
  typingSpeedMs?: number;
  lineDelayMs?: number;
  loop?: boolean;
}) {
  const [printed, setPrinted] = useState<{ line: Line; full: string; partial: string }[]>([]);
  const [cycle, setCycle] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px) or (pointer: coarse)").matches;
    setShouldAnimate(!isMobile);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      setPrinted(lines.map((line) => ({ line, full: line.text, partial: line.text })));
      return;
    }

    let cancelled = false;
    let idx = 0;
    const queue = [...lines];

    async function run() {
      setPrinted([]);
      for (const line of queue) {
        if (cancelled) return;
        // push new empty line
        setPrinted((p) => [...p, { line, full: line.text, partial: "" }]);
        for (let i = 1; i <= line.text.length; i++) {
          if (cancelled) return;
          await sleep(typingSpeedMs);
          setPrinted((p) => {
            const next = [...p];
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, partial: line.text.slice(0, i) };
            return next;
          });
        }
        await sleep(lineDelayMs);
      }
      if (loop && !cancelled) {
        await sleep(1500);
        setCycle((c) => c + 1);
      }
      idx++;
    }
    run();
    return () => {
      cancelled = true;
    };
    // re-run when cycle bumps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle, typingSpeedMs, lineDelayMs, loop, shouldAnimate]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0d12]/95 font-mono text-[12px] leading-relaxed text-white/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-3 py-2">
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-yellow-500/80" />
        <span className="size-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
          {title}
        </span>
      </div>

      {/* Stream */}
      <div className="min-h-[180px] px-3 py-3">
        {printed.map((p, i) => (
          <div key={i} className="whitespace-pre">
            {p.line.kind === "cmd" && (
              <>
                <span className="text-primary">$ </span>
                <span className="text-white">{p.partial}</span>
              </>
            )}
            {p.line.kind === "out" && <span className="text-white/70">{p.partial}</span>}
            {p.line.kind === "info" && <span className="text-cyan-300/80">{p.partial}</span>}
            {p.line.kind === "ok" && <span className="text-emerald-400">{p.partial}</span>}
            {p.line.kind === "warn" && <span className="text-amber-400">{p.partial}</span>}
            {i === printed.length - 1 && p.partial.length < p.full.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="ml-0.5 inline-block h-3 w-1.5 translate-y-[2px] bg-primary"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}
