import Link from "next/link";
import { Fragment } from "react";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { LEGAL_LINKS, SITE } from "@/lib/site";
import type { LegalDoc } from "@/lib/legal";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

/** Render a section body, grouping consecutive "- " lines into a single list. */
function Body({ body }: { body: string[] }) {
  const blocks: { type: "p" | "ul"; items: string[] }[] = [];
  for (const line of body) {
    const isBullet = line.startsWith("- ");
    const text = isBullet ? line.slice(2) : line;
    const last = blocks[blocks.length - 1];
    if (isBullet && last?.type === "ul") last.items.push(text);
    else blocks.push({ type: isBullet ? "ul" : "p", items: [text] });
  }

  return (
    <>
      {blocks.map((b, i) =>
        b.type === "ul" ? (
          <ul key={i} className="my-3 flex flex-col gap-2">
            {b.items.map((t, j) => (
              <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="my-3 text-muted-foreground leading-relaxed">
            {b.items[0]}
          </p>
        ),
      )}
    </>
  );
}

export function LegalDocView({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: doc.title, path: `/legal/${doc.slug}` },
        ])}
      />

      <PageHero
        kicker="Legal"
        title={doc.title}
        description={doc.summary}
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Last updated · {formatDate(SITE.legalUpdated)}
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sticky table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <FileText className="size-3.5" /> On this page
              </p>
              <nav className="flex flex-col gap-2 border-l border-border">
                {doc.sections.map((s) => (
                  <a
                    key={s.heading}
                    href={`#${slugify(s.heading)}`}
                    className="-ml-px border-l border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document body */}
          <div className="max-w-2xl">
            {doc.sections.map((s, i) => (
              <Reveal key={s.heading} delay={Math.min(i * 0.04, 0.2)}>
                <section id={slugify(s.heading)} className="scroll-mt-28 py-5 first:pt-0">
                  <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                    <span className="mr-2 font-mono text-sm text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  <Body body={s.body} />
                </section>
              </Reveal>
            ))}

            {/* Cross-links to the other policies */}
            <Reveal>
              <div className="mt-12 border-t border-border pt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  More legal
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {LEGAL_LINKS.filter((l) => l.href !== `/legal/${doc.slug}`).map((l) => (
                    <Fragment key={l.href}>
                      <Link
                        href={l.href}
                        className="rounded-full border border-[#E8E6E1] bg-white px-4 py-2 text-sm text-[#6B6860] transition-colors hover:border-[#1A56DB]/50 hover:text-[#0F0E0D]"
                      >
                        {l.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
