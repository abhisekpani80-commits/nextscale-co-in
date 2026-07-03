"use client";

import { Reveal } from "@/components/ui/reveal";
import ShinyText from "@/components/ShinyText";
import { cn } from "@/lib/utils";

/** Mono kicker + display title + optional lead, with staggered reveal. */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {kicker && (
        <Reveal>
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-primary/60" />
            <ShinyText
              text={kicker}
              color="#27d0ed"
              shineColor="rgba(255,255,255,0.85)"
              speed={4}
              className="font-mono text-xs uppercase tracking-[0.2em]"
            />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-heading text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
