import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Next Scale — Custom Websites & WhatsApp AI Agents";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0B0F17",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(26, 86, 219, 0.25) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 40%)",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            maxWidth: "680px",
          }}
        >
          {/* Top Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(26, 86, 219, 0.5)",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: 900, color: "#ffffff" }}>N</span>
            </div>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#ffffff",
              }}
            >
              NEXT SCALE
            </span>
          </div>

          {/* Middle Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "20px 0" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Custom Websites & <span style={{ color: "#38BDF8" }}>WhatsApp AI Agents</span>
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#94A3B8",
                lineHeight: 1.4,
                margin: 0,
                fontWeight: 500,
              }}
            >
              We build high-performance digital engines for clinics, real estate & SMBs. Live in 3–7 days.
            </p>
          </div>

          {/* Badges & Footer URL */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "rgba(26, 86, 219, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38BDF8",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <span>⚡ Live in 7 Days</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "rgba(124, 58, 237, 0.15)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  color: "#C084FC",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <span>🤖 24/7 AI Receptionist</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  color: "#4ADE80",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <span>📈 Verified Business ROI</span>
              </div>
            </div>

            <span style={{ fontSize: "16px", fontWeight: 600, color: "#64748B" }}>
              nextscale.co.in
            </span>
          </div>
        </div>

        {/* Right Graphic Preview Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "360px",
            height: "460px",
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            justifyContent: "space-between",
          }}
        >
          {/* Mock Chat Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              WA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
                WhatsApp AI Receptionist
              </span>
              <span style={{ fontSize: "12px", color: "#4ADE80", fontWeight: 600 }}>
                ● Active 24/7
              </span>
            </div>
          </div>

          {/* Mock Chat Bubbles */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              margin: "20px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                padding: "12px 16px",
                borderRadius: "16px",
                borderBottomLeftRadius: "4px",
                fontSize: "14px",
                color: "#CBD5E1",
                maxWidth: "85%",
              }}
            >
              Hi! I'd like to book an appointment for tomorrow afternoon.
            </div>

            <div
              style={{
                background: "rgba(26, 86, 219, 0.3)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                padding: "12px 16px",
                borderRadius: "16px",
                borderBottomRightRadius: "4px",
                fontSize: "14px",
                color: "#ffffff",
                alignSelf: "flex-end",
                maxWidth: "90%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span>Slot confirmed for 3:30 PM! 📅</span>
              <span style={{ fontSize: "11px", color: "#93C5FD" }}>Calendar invite & reminder sent.</span>
            </div>
          </div>

          {/* Stats Card at bottom of preview */}
          <div
            style={{
              marginTop: "auto",
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "#94A3B8", textTransform: "uppercase", fontWeight: 600 }}>
                Booking Conversion
              </span>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#4ADE80" }}>
                +300%
              </span>
            </div>
            <div
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                background: "rgba(74, 222, 128, 0.15)",
                color: "#4ADE80",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Zero Missed Leads
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
