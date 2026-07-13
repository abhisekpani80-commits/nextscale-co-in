"use client";

import CountUp from "@/components/CountUp";

const stats = [
  { value: 25, suffix: "+", label: "Businesses live", isCountUp: true },
  { value: "3–7 days", suffix: "", label: "Average delivery", isCountUp: false },
  { value: 2, suffix: " hrs", label: "Average reply time", isCountUp: true },
  { value: 8, suffix: "+", label: "AI systems deployed", isCountUp: true },
];

export function B2BStats() {
  return (
    <section style={{ background: "#1A56DB" }} className="scroll-fade">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Divider */}
              {i > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 1,
                    height: 48,
                    background: "rgba(255,255,255,0.2)",
                  }}
                  className="hidden md:block"
                />
              )}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif",
                }}
              >
                {s.isCountUp ? (
                  <>
                    <CountUp to={s.value as number} duration={1.5} />
                    {s.suffix}
                  </>
                ) : (
                  s.value
                )}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
