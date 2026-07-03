"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PORTFOLIO } from "@/lib/site";
import CircularGallery from "@/components/CircularGallery";

export function PortfolioHighlight() {
  const featured = PORTFOLIO.filter((item) => item.featured).map((item) => ({
    image: item.image,
    text: item.title,
  }));

  const handleItemClick = (item: any) => {
    // Find the corresponding item in the main portfolio list
    const project = PORTFOLIO.find((p) => p.title === item.text);
    if (project?.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      // Redirect to the main portfolio page and highlight the correct category
      window.location.href = `/portfolio?category=${encodeURIComponent(project?.category || "All")}`;
    }
  };

  return (
    <section className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between text-left">
          <SectionHeading
            kicker="Proof of work"
            title={
              <>
                Real businesses. <span className="text-primary">Real results.</span>
              </>
            }
            description="A selection of websites, AI agents and growth work we've shipped across India. Click and drag or scroll to rotate. Click any card to view details."
          />
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-foreground mb-4 sm:mb-0 hover:text-primary transition-colors duration-200"
            >
              View all work
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Circular Gallery container */}
        <div className="relative mt-14 h-[420px] sm:h-[520px] w-full overflow-hidden border border-border/40 rounded-3xl bg-[#080a0d] shadow-[inset_0_4px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-radial-fade opacity-30 pointer-events-none" />
          <CircularGallery
            items={featured}
            bend={2.5}
            textColor="#27d0ed"
            borderRadius={0.06}
            scrollEase={0.03}
            scrollSpeed={2.5}
            font="bold 22px 'Inter'"
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </section>
  );
}
