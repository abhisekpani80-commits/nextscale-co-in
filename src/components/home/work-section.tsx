import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/neon-reveal";
import { PORTFOLIO } from "@/lib/site";

type WorkItem = {
  n: string;
  name: string;
  category: string;
  built: string;
  outcome: string;
  href: string;
  image: string;
  result: string;
};

const WORK: WorkItem[] = (() => {
  const byTitle = new Map(PORTFOLIO.map((p) => [p.title.toLowerCase(), p]));
  const source = [
    {
      n: "01",
      name: "Lumière Skin Clinic",
      category: "Dermatology",
      built: "Website + WhatsApp AI agent",
      outcome: "Bookings captured 24/7",
      href: "/case-studies/lumiere-skin-clinic",
    },
    {
      n: "02",
      name: "Vantage Realty",
      category: "Real estate",
      built: "Custom site + lead capture",
      outcome: "Faster enquiry turnaround",
      href: "/case-studies/vantage-realty",
    },
    {
      n: "03",
      name: "Studio Aperture",
      category: "Wedding photography",
      built: "Portfolio + booking flow",
      outcome: "Calendar automated",
      href: "/case-studies/studio-aperture",
    },
    {
      n: "04",
      name: "Meridian Dental",
      category: "Digital growth",
      built: "SEO + review automation",
      outcome: "Google rating 4.2 → 4.8",
      href: "/case-studies/meridian-dental",
    },
  ];
  return source.map((w) => {
    const match = byTitle.get(w.name.toLowerCase());
    return {
      ...w,
      image: match?.image ?? "",
      result: match?.result ?? w.outcome,
    };
  });
})();

export function WorkSection() {
  return (
    <section
      id="work"
      className="container-ns py-20 md:py-32"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="neon-divider mb-14 md:mb-20" />

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div className="md:col-span-4">
          <Reveal>
            <div className="t-eyebrow flex items-center">
              <span className="neon-line" />
              Selected work
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={80}>
            <h2 className="t-display text-[36px] md:text-[56px] lg:text-[64px] heading-glow">
              Real projects.{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300, color: "var(--color-neon)" }}>
                Real outcomes.
              </span>
            </h2>
            <p className="t-body mt-6" style={{ maxWidth: "560px" }}>
              Every project below was built and shipped by us. We don&apos;t
              showcase concept work or borrowed screenshots.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Work list */}
      <ul>
        {WORK.map((w, i) => (
          <Reveal key={w.n} delay={i * 60}>
            <li
              className="border-t"
              style={{ borderColor: "var(--color-line)" }}
            >
              <Link
                href={w.href}
                className="group grid grid-cols-12 gap-4 md:gap-6 items-center py-7 md:py-9 transition-all duration-300 hover:pl-4"
                style={{ borderColor: "transparent" }}
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-[12px] tracking-wider transition-colors"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  {w.n}
                </span>
                <div className="col-span-10 sm:col-span-3 md:col-span-3">
                  {/* Portfolio thumbnail */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                    style={{
                      border: "1px solid var(--color-line-hover)",
                      boxShadow:
                        "0 0 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,245,255,0.04)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.image}
                      alt={`${w.name} case study cover`}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ background: "var(--color-card)" }}
                    />
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between"
                    >
                      <span className="t-eyebrow !text-[10px]" style={{ opacity: 0.85 }}>
                        {w.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4 md:col-span-3 mt-1 sm:mt-0">
                  <div className="text-[22px] md:text-[26px] font-semibold tracking-tight group-hover:text-[color:var(--color-neon)] transition-colors">
                    {w.name}
                  </div>
                  <div className="text-[12px] t-eyebrow mt-2">{w.category}</div>
                </div>
                <div
                  className="col-span-6 md:col-span-2 text-[14px]"
                  style={{ color: "var(--color-text-mute)" }}
                >
                  {w.built}
                </div>
                <div
                  className="col-span-6 md:col-span-3 text-[14px] flex items-center justify-between gap-3 transition-colors"
                >
                  <span
                    className="group-hover:text-[color:var(--color-neon)]"
                    style={{
                      color: "var(--color-neon)",
                      textShadow: "0 0 6px var(--color-neon-dim)",
                      fontWeight: 500,
                    }}
                  >
                    {w.result}
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    strokeWidth={1.5}
                    style={{ color: "var(--color-text-dim)" }}
                  />
                </div>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 mt-10 text-[14px] font-medium group"
            style={{ color: "var(--color-neon)" }}
          >
            View full portfolio
            <ArrowUpRight
              className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              strokeWidth={2}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
