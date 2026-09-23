const STEPS = [
  {
    n: "01",
    title: "Discover",
    summary: "Understand the business",
    body: "We learn how your business actually works — your customers, the buying journey, the friction. No generic questionnaire. A real conversation.",
  },
  {
    n: "02",
    title: "Design",
    summary: "Shape the experience",
    body: "Information architecture, visual system, content direction. You see the structure before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    summary: "Engineer the system",
    body: "Custom code, AI integrations, calendars, CRM — wired together and tested in parallel before launch.",
  },
  {
    n: "04",
    title: "Launch",
    summary: "Ship & refine",
    body: "We deploy, monitor, and iterate. The product is yours from day one with full code ownership handed over.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="container-ns py-20 md:py-32 border-t"
      style={{ borderColor: "var(--color-line)", position: "relative", zIndex: 1 }}
    >
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="neon-line" />
            <span className="t-eyebrow">How we work</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <h2 className="t-display text-[36px] md:text-[56px] lg:text-[64px] text-[color:var(--color-text)] max-w-[820px]">
            Four steps from idea to{" "}
            <span className="italic font-light text-[color:var(--color-text-mute)]">
              live
            </span>
            .
          </h2>
        </div>
      </div>

      {/* Steps */}
      <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0">
        {/* Vertical connector (mobile) */}
        <div
          aria-hidden
          className="md:hidden absolute left-[19px] top-3 bottom-3 w-px"
          style={{ background: "var(--color-line)" }}
        />
        {/* Horizontal connector (desktop) */}
        <div
          aria-hidden
          className="hidden md:block absolute left-[6%] right-[6%] top-[19px] h-px"
          style={{ background: "var(--color-line)" }}
        />

        {STEPS.map((s) => (
          <li
            key={s.n}
            className="relative pl-12 md:pl-0 py-6 md:py-0 md:pr-8"
          >
            {/* Node */}
            <div
              className="absolute md:relative left-0 md:left-auto top-7 md:top-0 md:mb-6 size-10 rounded-full grid place-items-center font-mono text-[12px]"
              style={{
                border: "1px solid var(--color-line-hover)",
                background: "var(--color-card)",
                color: "var(--color-neon)",
                boxShadow: "0 0 10px var(--color-neon-dim), inset 0 0 6px var(--color-neon-dim)",
              }}
              aria-hidden
            >
              {s.n}
            </div>

            <div className="hidden md:block">
              <h3 className="text-[22px] font-medium tracking-tight">
                {s.title}
              </h3>
              <div className="text-[12px] t-eyebrow mt-2">{s.summary}</div>
              <p className="text-[14px] leading-[1.6] text-[color:var(--color-text-mute)] mt-4 max-w-[280px]">
                {s.body}
              </p>
            </div>

            <div className="md:hidden">
              <h3 className="text-[22px] font-medium tracking-tight">
                {s.title}
              </h3>
              <div className="text-[12px] t-eyebrow mt-1">{s.summary}</div>
              <p className="text-[14px] leading-[1.6] text-[color:var(--color-text-mute)] mt-3">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
