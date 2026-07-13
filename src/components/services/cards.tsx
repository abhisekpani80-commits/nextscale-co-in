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
  const accentColor = index % 2 === 0 ? "#1A56DB" : "#702BDE";
  const glowColorRGB = index % 2 === 0 ? "26, 86, 219" : "112, 43, 222";

  return (
    <ParticleCard
      glowColor={glowColorRGB}
      particleCount={8}
      enableTilt={true}
      clickEffect={true}
      enableMagnetism={true}
      className="group relative h-full rounded-[20px] border border-[#E8E6E1] bg-white hover:shadow-md overflow-hidden transition-all duration-300"
    >
      <Link
        href={service.href}
        className="flex h-full flex-col gap-5 p-7 backdrop-blur transition-all duration-300"
      >
        <div className="flex items-start justify-between">
          <div
            className="grid size-12 place-items-center rounded-xl border border-blue-100 transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: `${accentColor}08`,
              color: accentColor,
              borderColor: `${accentColor}15`,
            }}
          >
            <service.icon className="size-6" />
          </div>
          <ArrowUpRight className="size-4 text-[#6B6860] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1A56DB]" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-[#0F0E0D] transition-colors duration-300 group-hover:text-[#1A56DB]">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6B6860]">{service.description}</p>
        </div>
        <ul className="mt-auto flex flex-col gap-2 border-t border-[#E8E6E1] pt-4">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-center gap-2 text-xs text-[#6B6860]">
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
      glowColor="26, 86, 219"
      particleCount={6}
      enableTilt={true}
      clickEffect={true}
      enableMagnetism={true}
      className="h-full rounded-2xl border border-[#E8E6E1] bg-white transition-all duration-300"
    >
      <div className="flex h-full flex-col gap-3 p-6">
        <div className="grid size-10 place-items-center rounded-lg bg-blue-50 text-[#1A56DB] border border-blue-100">
          <agent.icon className="size-5" />
        </div>
        <h4 className="font-heading text-base font-semibold text-[#0F0E0D]">{agent.name}</h4>
        <p className="text-sm text-[#6B6860]">{agent.description}</p>
        <p className="mt-auto pt-2 font-mono text-xs text-[#1A56DB] font-semibold">{agent.startingPrice}</p>
      </div>
    </ParticleCard>
  );
}
