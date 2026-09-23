"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, X, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/neon-reveal";

/** Text-to-image URL builder — prompt is URL-encoded at runtime. */
const tti = (prompt: string, size: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;

type Reference = {
  id: string;
  name: string;
  studio: string;
  award: string;
  awardUrl: string;
  liveUrl: string;
  category: "Editorial" | "Immersive" | "Conversion" | "Motion" | "Strategy";
  note: string;
  principles: string[];
  adaptFor: string;
  bg: string;
  accent: string;
  image: string;
  imageAlt: string;
};

const REFERENCES: Reference[] = [
  {
    id: "onyx",
    name: "ONYX",
    studio: "L+R",
    award: "CSSDA · Website of the Day, May 2026",
    awardUrl: "https://cssdesignawards.com/sites/onyx/49288/",
    liveUrl: "https://onyxproject.com/",
    category: "Immersive",
    note: "Non-traditional microsite navigation for an ad-tech platform — depth, atmosphere, and quiet confidence.",
    principles: [
      "Use space and silence as a design element.",
      "Let one bold interface idea carry the entire page.",
      "Treat microcopy as part of the visual system.",
    ],
    adaptFor: "Premium service businesses that want their site to feel like a product, not a brochure.",
    bg: "from-[#001a1f] to-[#000810]",
    accent: "#00f5ff",
    image: tti(
      "immersive ad-tech microsite atmosphere, deep teal to black gradient, floating neon cyan UI panels, atmospheric depth, quiet luxury, dark moody studio render, no text, cinematic composition",
      "landscape_4_3"
    ),
    imageAlt: "ONYX direction — immersive neon cyan UI panels concept preview",
  },
  {
    id: "yca",
    name: "Your Creative Agency",
    studio: "Your Creative (Melbourne)",
    award: "CSSDA · Website of the Day, Jan 2025",
    awardUrl: "https://cssdesignawards.com/sites/your-creative-agency/46837/",
    liveUrl: "https://yourcreative.com.au/",
    category: "Motion",
    note: "Independent creative agency site with confident typography and considered motion across every section.",
    principles: [
      "Strong type rhythm creates the personality.",
      "Motion should clarify hierarchy, not decorate.",
      "Editorial grids beat decorative sections.",
    ],
    adaptFor: "Brands that want a distinctive identity without resorting to gimmicks.",
    bg: "from-[#0f0c00] to-[#080600]",
    accent: "#ffd580",
    image: tti(
      "creative agency motion storyboard aesthetic, warm amber studio lighting, typographic silhouettes and kinetic fragments, deep black background, premium editorial photography mood, no text, cinematic 4:3",
      "landscape_4_3"
    ),
    imageAlt: "YCA direction — warm amber studio motion storyboard concept preview",
  },
  {
    id: "maison",
    name: "Maison AUGE",
    studio: "AUGE Experience",
    award: "CSSDA · Website of the Day, Aug 2026",
    awardUrl: "https://cssdesignawards.com/sites/maison-auge/49956/",
    liveUrl: "https://www.maisonauge.com/",
    category: "Editorial",
    note: "Beauty and luxury studio with cinematic photography, parallax storytelling, and precise spacing.",
    principles: [
      "Photography is the interface.",
      "Generous whitespace signals premium positioning.",
      "Calm scroll pacing lets the work speak.",
    ],
    adaptFor: "Clinics, premium real estate, hospitality — any business where trust is built through restraint.",
    bg: "from-[#0e0c0a] to-[#080604]",
    accent: "#e6c789",
    image: tti(
      "luxury beauty editorial photography atmosphere, soft golden highlight on black, cinematic depth of field, product placement stage, elegant minimal composition, perfume and jewelry vibes, no text, 4:3",
      "landscape_4_3"
    ),
    imageAlt: "Maison AUGE direction — editorial gold luxury concept preview",
  },
  {
    id: "higglo",
    name: "Higglo Digital",
    studio: "Higglo Digital",
    award: "Web Design Awards · Winner, March 2026",
    awardUrl: "https://www.webdesignawards.io/nominees/higglo-digital-2026",
    liveUrl: "https://higglo.io/",
    category: "Conversion",
    note: "Performance-first agency site that turns abstract SEO/GEO services into a tangible, premium story.",
    principles: [
      "Translate technical services into business outcomes.",
      "Use metric callouts sparingly and honestly.",
      "Design for the buyer's questions, not your portfolio.",
    ],
    adaptFor: "Agencies and studios selling complex services to non-technical buyers.",
    bg: "from-[#000f18] to-[#000810]",
    accent: "#5bc8f5",
    image: tti(
      "performance marketing data dashboard visualization, soft blue glowing charts and conversion funnels, dark navy to black gradient, calm business aesthetic, quiet premium, no text, 4:3 composition",
      "landscape_4_3"
    ),
    imageAlt: "Higglo direction — conversion blue data dashboard concept preview",
  },
  {
    id: "prompt",
    name: "Prompt Labs",
    studio: "Prompt Health",
    award: "CSS Winner · Site of the Day, Dec 2025",
    awardUrl: "https://www.csswinner.com/details/institute-of-health/19000",
    liveUrl: "https://www.prompthealth.com/pps/2025",
    category: "Strategy",
    note: "Conference microsite that turned a single event into an explorable, gamified experience.",
    principles: [
      "Concept-led design beats template assembly.",
      "Interactive systems can clarify, not distract.",
      "Every interaction should teach something.",
    ],
    adaptFor: "Brands that need to explain a complex product through demonstration, not description.",
    bg: "from-[#1a0010] to-[#0f0008]",
    accent: "#ff6eb4",
    image: tti(
      "gamified conference experience, magenta pink neon glow on black, interactive event map nodes, playful yet premium depth, event stage atmosphere, no text, 4:3 composition",
      "landscape_4_3"
    ),
    imageAlt: "Prompt direction — strategy magenta pink gamified concept preview",
  },
];

export function InspirationGallery() {
  const [active, setActive] = useState<Reference | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const open = (r: Reference) => {
    setActive(r);
    setActiveIdx(REFERENCES.findIndex((x) => x.id === r.id));
  };

  const close = () => setActive(null);

  const nav = (dir: 1 | -1) => {
    const next = (activeIdx + dir + REFERENCES.length) % REFERENCES.length;
    setActiveIdx(next);
    setActive(REFERENCES[next]);
  };

  return (
    <section
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
              Inspiration library
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={80}>
            <h2 className="t-display text-[36px] md:text-[56px] lg:text-[64px] heading-glow">
              Make your brand{" "}
              <span
                style={{
                  color: "var(--color-neon)",
                  textShadow: "0 0 12px var(--color-neon), 0 0 30px var(--color-neon-mid)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                look like this.
              </span>
            </h2>
            <p className="t-body mt-6" style={{ maxWidth: "600px" }}>
              Five verified award-winning reference directions — each with clear
              design principles we can adapt to your brand. We don&apos;t copy
              these sites; we apply the same thinking.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Gallery grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REFERENCES.map((r, i) => (
          <Reveal key={r.id} delay={i * 80}>
            <li>
              <button
                type="button"
                onClick={() => open(r)}
                className="w-full text-left neon-card overflow-hidden group focus:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-neon)]"
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${r.bg} overflow-hidden`}
                >
                  {/* Generated concept image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.imageAlt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ background: r.bg }}
                  />
                  {/* Vignette overlay */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.75) 100%)",
                    }}
                  />
                  {/* Subtle dot grain on top */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1.5px)",
                      backgroundSize: "14px 14px",
                      mixBlendMode: "overlay",
                    }}
                  />
                  {/* Accent blob tint */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-30px",
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      background: r.accent,
                      filter: "blur(60px)",
                      opacity: 0.28,
                    }}
                  />
                  {/* Category tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: r.accent,
                        boxShadow: `0 0 6px ${r.accent}`,
                      }}
                    />
                    <span className="t-eyebrow !text-[10px]">{r.category}</span>
                  </div>
                  {/* Initials micro-monogram bottom-right so identity still reads without needing image to load */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 14,
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 22,
                      borderRadius: 6,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(0,0,0,0.4)",
                    }}
                    aria-hidden
                  >
                    <span
                      className="t-eyebrow"
                      style={{
                        color: r.accent,
                        textShadow: `0 0 8px ${r.accent}55`,
                        fontSize: 10,
                      }}
                    >
                      {r.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="p-5" style={{ borderTop: "1px solid var(--color-line)" }}>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-[18px] font-semibold tracking-tight">{r.name}</h3>
                    <ArrowUpRight
                      className="size-4 shrink-0 transition-all duration-300 group-hover:text-[color:var(--color-neon)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                      style={{ color: "var(--color-text-dim)" }}
                    />
                  </div>
                  <div className="text-[12px] mb-3" style={{ color: "var(--color-text-mute)" }}>
                    {r.studio}
                  </div>
                  <p
                    className="text-[13px] leading-[1.55]"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    {r.note}
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid var(--color-line)" }}
                  >
                    <span className="t-eyebrow !text-[10px]" style={{ color: "var(--color-text-dim)" }}>
                      {r.award.split(" · ")[0]}
                    </span>
                    <span style={{ color: "var(--color-neon)" }}>View →</span>
                  </div>
                </div>
              </button>
            </li>
          </Reveal>
        ))}
      </ul>

      {/* Detail drawer */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
          role="dialog"
          aria-modal
          aria-labelledby="ref-title"
        >
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={close}
          />
          <div
            style={{
              position: "relative",
              zIndex: 10,
              width: "100%",
              maxWidth: "640px",
              margin: "0 16px",
              background: "var(--color-card)",
              border: "1px solid var(--color-line-hover)",
              borderRadius: "20px",
              maxHeight: "92vh",
              overflowY: "auto",
              boxShadow: "0 0 60px rgba(0,245,255,0.08), 0 0 0 1px rgba(0,245,255,0.1)",
            }}
          >
            {/* Hero */}
            <div
              className={`relative h-56 md:h-72 bg-gradient-to-br ${active.bg} overflow-hidden rounded-t-2xl`}
            >
              {/* Concept image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image}
                alt={active.imageAlt}
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ background: active.bg }}
              />
              {/* Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.88) 100%)",
                }}
                aria-hidden
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                  mixBlendMode: "overlay",
                  opacity: 0.6,
                }}
                aria-hidden
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "-40px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background: active.accent,
                  filter: "blur(90px)",
                  opacity: 0.35,
                }}
                aria-hidden
              />
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 grid place-items-center size-10 rounded-full z-10"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid var(--color-line)",
                }}
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              <div style={{ position: "absolute", bottom: 20, left: 24, right: 24, zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: active.accent,
                      boxShadow: `0 0 6px ${active.accent}`,
                    }}
                  />
                  <span className="t-eyebrow !text-[10px]">{active.category}</span>
                </div>
                <h3 id="ref-title" className="text-[28px] md:text-[32px] font-semibold tracking-tight">
                  {active.name}
                </h3>
                <div className="text-[13px] mt-1.5" style={{ color: "var(--color-text-mute)" }}>
                  {active.studio} · {active.award.split(" · ")[0]}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <p className="text-[15px] leading-[1.65]" style={{ color: "var(--color-text)" }}>
                {active.note}
              </p>

              <div className="t-eyebrow mb-3 mt-6">Design principles</div>
              <ul className="flex flex-col gap-2.5 mb-6">
                {active.principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--color-text-mute)" }}>
                    <span
                      className="mt-1.5 size-1.5 rounded-full shrink-0"
                      style={{ background: "var(--color-neon)", boxShadow: "0 0 4px var(--color-neon)" }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="t-eyebrow mb-3">Where this approach fits</div>
              <p className="text-[14px]" style={{ color: "var(--color-text-mute)", marginBottom: 32 }}>
                {active.adaptFor}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost h-12 px-5 text-[14px] justify-between flex-1"
                >
                  View live reference
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </a>
                <a
                  href={active.awardUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost h-12 px-5 text-[14px] justify-between flex-1"
                >
                  See award
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </a>
              </div>

              <div
                style={{ borderTop: "1px solid var(--color-line)", marginTop: 24, paddingTop: 24 }}
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={waLink(`Hi NextScale — I'd like a website inspired by ${active.name}. (${active.liveUrl})`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon-fill h-12 px-5 text-[14px] flex-1"
                  >
                    <Sparkles className="size-4" strokeWidth={2} />
                    Build this style for my brand
                  </a>
                  <button
                    type="button"
                    onClick={() => nav(-1)}
                    className="btn-ghost h-12 px-4"
                    aria-label="Previous reference"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => nav(1)}
                    className="btn-ghost h-12 px-4"
                    aria-label="Next reference"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
                <p className="text-[11px] mt-5" style={{ color: "var(--color-text-dim)", lineHeight: 1.6 }}>
                  NextScale is an independent studio. References shown for
                  design-direction inspiration only. We do not claim affiliation
                  with these studios and do not reproduce their work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing CTA */}
      <div
        className="border-t mt-20 pt-16 md:pt-24 text-center"
        style={{ borderColor: "var(--color-line)" }}
      >
        <Reveal>
          <h3 className="t-display text-[28px] md:text-[44px] heading-glow">
            Your brand. Your direction.{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-neon)",
                textShadow: "0 0 12px var(--color-neon), 0 0 30px var(--color-neon-mid)",
              }}
            >
              Built by NextScale.
            </span>
          </h3>
          <p className="t-body mt-4">
            Tell us which style you love and we&apos;ll turn that inspiration into
            a custom digital experience for your business.
          </p>
          <a
            href={waLink("Hi NextScale — I'd like to start a project and have a reference style in mind.")}
            target="_blank"
            rel="noreferrer"
            className="btn-neon-fill h-14 px-8 mt-8 mx-auto"
          >
            Build my brand
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
