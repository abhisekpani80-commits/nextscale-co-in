"use client";

const testimonials = [
  {
    quote: "Our no-shows dropped 55% and the WhatsApp agent books appointments while we sleep. It paid for itself in the first month.",
    author: "Dr. R. Mishra",
    role: "Dermatology Clinic",
    stars: 5,
  },
  {
    quote: "Website was live in 5 days and looks better than agencies that quoted 5× the price. Patients actually find us on Google now.",
    author: "Priya S.",
    role: "Cosmetic Therapist",
    stars: 5,
  },
  {
    quote: "I was sceptical about AI, but the review manager doubled our Google rating activity. NextScale just delivers.",
    author: "A. Patnaik",
    role: "Dental Clinic",
    stars: 5,
  },
];

export function B2BTestimonials() {
  return (
    <section style={{ background: "#F8F7F4", padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }} className="scroll-fade">
            <div style={{ width: 24, height: 2, backgroundColor: "#1A56DB", flexShrink: 0 }} />
            <p className="section-label" style={{ margin: 0 }}>WHAT CLIENTS SAY</p>
          </div>
          <h2
            className="scroll-fade"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#0F0E0D",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Clients who saw results, not just deliverables.
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="scroll-fade"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderLeft: "3px solid #1A56DB",
                borderRadius: 12,
                padding: 24,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} style={{ color: "#1A56DB", fontSize: 14 }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "#0F0E0D",
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#0F0E0D" }}>{t.author}</p>
                <p style={{ fontSize: 13, color: "#6B6860", marginTop: 2 }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
