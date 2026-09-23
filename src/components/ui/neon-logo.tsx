import Link from "next/link";

/**
 * Neon wordmark logo: stylized "N" arrow icon + "NextScale" text.
 * The icon has a cyan neon glow + subtle flicker animation.
 */
export function NeonLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`} aria-label="NextScale — home">
      {/* Icon — glowing arrow-N mark */}
      <div className="relative flex-shrink-0">
        <div
          className="grid place-items-center size-9 rounded-lg"
          style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-neon)",
            boxShadow:
              "0 0 10px var(--color-neon-dim), 0 0 25px var(--color-neon-dim), inset 0 0 8px var(--color-neon-dim)",
          }}
        >
          {/* N arrow mark */}
          <svg
            viewBox="0 0 20 20"
            className="size-5"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 17V3h2l8 9.5V3h2v14h-2L5 7.5V17H3z"
              fill="var(--color-neon)"
              style={{
                filter: "drop-shadow(0 0 4px var(--color-neon))",
              }}
            />
          </svg>
        </div>
        {/* Corner accent dot */}
        <span
          className="absolute -top-1 -right-1 size-2 rounded-full"
          style={{
            background: "var(--color-neon)",
            boxShadow: "0 0 6px var(--color-neon), 0 0 12px var(--color-neon-mid)",
            animation: "glow-ping 2s ease-out infinite",
          }}
          aria-hidden
        />
      </div>

      {/* Wordmark */}
      <span
        className="font-semibold text-[15px] tracking-tight"
        style={{ color: "var(--color-text)" }}
      >
        Next
        <span style={{ color: "var(--color-neon)", textShadow: "0 0 8px var(--color-neon-mid)" }}>
          Scale
        </span>
      </span>
    </Link>
  );
}
