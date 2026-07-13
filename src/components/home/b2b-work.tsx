"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Lumière Skin Clinic",
    type: "Dermatology Clinic",
    result: "↑ 40% more appointment bookings in 60 days",
    desc: "Built a clinic website + WhatsApp AI agent that handles inquiries 24/7. The booking rate jumped within the first month.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vantage Realty",
    type: "Real Estate Agency",
    result: "↑ 3× more enquiry submissions",
    desc: "Custom website with lead capture forms and WhatsApp integration. Went from 10 monthly inquiries to 30+ in 45 days.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Meridian Dental",
    type: "Dental Clinic",
    result: "↑ Google rating 4.2 → 4.8 in 60 days",
    desc: "Digital growth package: Google Business optimization, SEO, and automated review requests. Results in under 2 months.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
];

export function B2BWork() {
  return (
    <section style={{ background: "#F8F7F4", padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 }} className="scroll-fade">
            <div style={{ width: 24, height: 2, backgroundColor: "#1A56DB", flexShrink: 0 }} />
            <p className="section-label" style={{ margin: 0 }}>REAL RESULTS</p>
          </div>
          <h2
            className="scroll-fade"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#0F0E0D",
              lineHeight: 1.2,
            }}
          >
            Businesses that saw results, not just deliverables.
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="case-study-card scroll-fade"
            >
              {/* Image */}
              <div style={{ width: "100%", height: 180, position: "relative", overflow: "hidden" }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="case-study-image"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0F0E0D" }}>{p.title}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#6B6860",
                      background: "#F4F3F0",
                      borderRadius: 999,
                      padding: "2px 8px",
                    }}
                  >
                    {p.type}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0B7A56",
                    marginBottom: 10,
                  }}
                >
                  {p.result}
                </p>

                <p style={{ fontSize: 13, color: "#6B6860", lineHeight: 1.6, marginBottom: 16 }}>
                  {p.desc}
                </p>

                <Link
                  href="/portfolio"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A56DB",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1447C0"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#1A56DB"; }}
                >
                  View case study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div
          className="scroll-fade"
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <Link
            href="/portfolio"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#1A56DB",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1447C0"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#1A56DB"; }}
          >
            View all 25+ projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
