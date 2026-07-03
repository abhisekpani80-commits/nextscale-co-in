import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { STEPS } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="relative border-t border-border">
      {/* px-4 minimum on mobile */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-32">
        <SectionHeading
          align="center"
          className="mx-auto"
          kicker="How it works"
          title={
            <>
              Live in days, <span className="text-primary">not months</span>.
            </>
          }
          description="No drawn-out proposals. We move fast, ship real things, and keep you in the loop on WhatsApp."
        />

        {/*
          Steps grid:
          - Single column on mobile (default flex-col stacking via grid-cols-1)
          - 3 columns on md — original layout

          Connector lines:
          - Desktop (md+): horizontal line across top of the row (absolute, hidden on mobile)
          - Mobile: vertical dotted line between steps drawn via a pseudo border on each
            step's left side, centred through the number circle
        */}
        <div className="relative mt-12 grid gap-0 md:mt-16 md:grid-cols-3 md:gap-8">
          {/* Horizontal connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.12}
              className="relative flex gap-5 pb-10 last:pb-0 md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center"
            >
              {/*
                Mobile vertical connector: a thin line running from the centre of
                the number down through the card body, hidden on the last step.
                md:hidden keeps it off desktop where the horizontal line is used.
              */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent md:hidden" />
              )}

              {/*
                Number circle:
                - size-12 on mobile (48px) — comfortably touchable & visible
                - size-14 on md+ — original desktop size
                shrink-0 prevents flex squishing on mobile
              */}
              <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-primary/30 bg-background font-heading text-base font-semibold text-primary shadow-[0_0_30px_-8px_var(--primary)] md:size-14 md:text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Text block — left-aligned on mobile, centred on desktop */}
              <div className="md:mt-5 md:flex md:flex-col md:items-center">
                {/*
                  Step title:
                  - text-lg (18px) on mobile — above 16px minimum, readable
                  - text-xl on md+ — original size
                */}
                <h3 className="font-heading text-lg font-semibold md:text-xl">{step.title}</h3>
                {/*
                  Description: text-base (16px) on mobile — meets minimum.
                  text-sm can be used on md where there's more context width.
                */}
                <p className="mt-2 max-w-xs text-base leading-relaxed text-muted-foreground sm:text-sm md:text-sm">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
