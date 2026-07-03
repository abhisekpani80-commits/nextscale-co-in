"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ParticleCard } from "@/components/MagicBento";

type Service = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  points: string[];
};

type Agent = {
  name: string;
  description: string;
  icon: LucideIcon;
  startingPrice: string;
};

/** Service card using ParticleCard with premium GSAP interactive animations */
export function ServiceCardElectric({ service, index }: { service: Service; index: number }) {
  const accentColor = index % 2 === 0 ? "#27d0ed" : "#e040fb";
  const glowColorRGB = index % 2 === 0 ? "39, 208, 237" : "224, 64, 251";

  return (
    <ParticleCard
      glowColor={glowColorRGB}
      particleCount={8}
      enableTilt={true}
      clickEffect={true}
      enableMagnetism={true}
      className="group relative h-full rounded-[20px] border border-border/60 bg-[#0d1016]/95 hover:shadow-[0_0_28px_rgba(39,208,237,0.12)] overflow-hidden transition-all duration-300"
    >
      <Link
        href={service.href}
        className="flex h-full flex-col gap-5 p-7 backdrop-blur transition-all duration-300"
      >
        <div className="flex items-start justify-between">
          <div
            className="grid size-12 place-items-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: `${accentColor}12`,
              color: accentColor,
              boxShadow: `0 0 20px -8px ${accentColor}`,
              borderColor: `${accentColor}25`,
            }}
          >
            <service.icon className="size-6" />
          </div>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold transition-colors duration-300 group-hover:text-foreground">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        </div>
        <ul className="mt-auto flex flex-col gap-2 border-t border-border/60 pt-4">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1 rounded-full" style={{ backgroundColor: accentColor }} />
              {pt}
            </li>
          ))}
        </ul>
      </Link>
    </ParticleCard>
  );
}

/** Smaller AI-agent card with ParticleCard */
export function AgentCardSpot({ agent }: { agent: Agent }) {
  return (
    <ParticleCard
      glowColor="39, 208, 237"
      particleCount={6}
      enableTilt={true}
      clickEffect={true}
      enableMagnetism={true}
      className="h-full rounded-2xl border border-border bg-[#0d1016]/95 transition-all duration-300"
    >
      <div className="flex h-full flex-col gap-3 p-6">
        <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
          <agent.icon className="size-5" />
        </div>
        <h4 className="font-heading text-base font-semibold">{agent.name}</h4>
        <p className="text-sm text-muted-foreground">{agent.description}</p>
        <p className="mt-auto pt-2 font-mono text-xs text-primary/80">{agent.startingPrice}</p>
      </div>
    </ParticleCard>
  );
}
