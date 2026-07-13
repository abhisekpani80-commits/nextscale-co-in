"use client";

export function B2BClientBar() {
  const clients = [
    "Meridian Dental",
    "Lumière Skin Clinic",
    "Vintage Realty",
    "Studio Aperture",
    "Pinnacle Academy",
    "Ananya Counselling",
    "Iron & Oak Fitness",
    "Sharma & Associates",
    "Lotus & Ember Salon",
    "Saffron & Smoke",
  ];

  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E8E6E1",
        borderBottom: "1px solid #E8E6E1",
        padding: "32px 0",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: 500,
          color: "#6B6860",
          marginBottom: 20,
          letterSpacing: "0.02em",
        }}
      >
        Trusted by businesses across industries
      </p>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="animate-marquee-ltr"
          style={{ gap: 48, whiteSpace: "nowrap" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#6B6860",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {name}
              <span style={{ color: "#E8E6E1", fontSize: 18 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
