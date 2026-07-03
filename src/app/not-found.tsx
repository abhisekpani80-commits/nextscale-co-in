import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import { buttonVariants } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
      {/* Interactive dot field */}
      <DotGridBackdrop maskClassName="[mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_25%,transparent_80%)]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-5 bg-primary/60" />
          Error 404
        </span>

        <h1 className="mt-6 font-heading text-7xl font-semibold leading-none tracking-tight sm:text-8xl md:text-9xl">
          <span className="text-foreground/40">4</span>
          <span className="text-primary text-glow">0</span>
          <span className="text-foreground/40">4</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          This page took a wrong turn. The link may be broken, or the page may
          have moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className={cn(buttonVariants(), "group h-12 gap-2 px-6 text-base")}>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-6 text-base backdrop-blur")}
          >
            <Compass className="size-4" />
            Talk to us
          </Link>
        </div>

        {/* Quick links */}
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border/40 pt-7 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
