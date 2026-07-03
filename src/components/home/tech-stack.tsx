"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGreensock,
  SiOpenai,
  SiAnthropic,
  SiNodedotjs,
  SiSupabase,
  SiStripe,
  SiThreedotjs,
  SiWhatsapp,
  SiGoogle,
  SiFramer,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import { SectionHeading } from "@/components/ui/section-heading";

const LOGOS = [
  { node: <SiNextdotjs />, title: "Next.js", ariaLabel: "Next.js" },
  { node: <SiReact />, title: "React" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiGreensock />, title: "GSAP" },
  { node: <SiThreedotjs />, title: "Three.js" },
  { node: <SiAnthropic />, title: "Anthropic Claude" },
  { node: <SiOpenai />, title: "OpenAI" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiStripe />, title: "Stripe" },
  { node: <SiWhatsapp />, title: "WhatsApp Cloud API" },
  { node: <SiGoogle />, title: "Google Business" },
];

export function TechStack() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-card/10">
      {/* Premium static ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <SectionHeading
            align="center"
            className="mx-auto items-center"
            kicker="The stack"
            title={
              <>
                Tools we wield.{" "}
                <span className="text-primary">Battle-tested in production.</span>
              </>
            }
          />
        </div>

        <div className="relative">
          <LogoLoop
            logos={LOGOS}
            speed={60}
            direction="left"
            logoHeight={44}
            gap={64}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="oklch(0.171 0.014 258 / 0.6)"
            ariaLabel="Technology stack"
            className="[&_svg]:text-foreground/65 [&_svg]:transition-colors [&_svg]:duration-300 [&_a:hover_svg]:text-primary [&_a:hover_svg]:drop-shadow-[0_0_12px_#27d0ed]"
          />
        </div>
      </div>
    </section>
  );
}
