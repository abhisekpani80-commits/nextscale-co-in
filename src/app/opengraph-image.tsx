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
          backgroundColor: "#FFFFFF",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "#0F172A",
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
            maxWidth: "640px",
          }}
        >
          {/* Top Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
              }}
            >
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#FFFFFF" }}>✦</span>
            </div>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 900,
                letterSpacing: "1px",
                color: "#0F172A",
                textTransform: "uppercase",
              }}
            >
              NEXT SCALE
            </span>
          </div>

          {/* Middle Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "16px 0" }}>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 900,
                lineHeight: 1.08,
                color: "#0F172A",
                letterSpacing: "-1.5px",
                margin: 0,
              }}
            >
              High-Conversion <span style={{ color: "#2563EB" }}>Websites</span>
              <br />
              &amp; 24/7 AI Receptionists.
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#475569",
                lineHeight: 1.4,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Sub-second Next.js web platforms and autonomous WhatsApp AI agents. Shipped live in 7 days flat.
            </p>
          </div>

          {/* Badges & URL */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "#EFF6FF",
                  border: "1.5px solid #BFDBFE",
                  color: "#1D4ED8",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <span>⚡ Live in 7 Days</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "#F0FDF4",
                  border: "1.5px solid #BBF7D0",
                  color: "#15803D",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <span>🤖 24/7 WhatsApp AI</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "#FAF5FF",
                  border: "1.5px solid #E9D5FF",
                  color: "#7E22CE",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <span>🔒 100% Code Handover</span>
              </div>
            </div>

            <span style={{ fontSize: "15px", fontWeight: 700, color: "#64748B", letterSpacing: "1px" }}>
              NEXTSCALE.CO.IN · SERVING CLIENTS IN 8+ COUNTRIES
            </span>
          </div>
        </div>

        {/* Right Graphic Preview Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "380px",
            height: "460px",
            background: "#FFFFFF",
            border: "1.5px solid #E2E8F0",
            borderRadius: "28px",
            padding: "24px",
            boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 8px 10px -6px rgba(37, 99, 235, 0.1)",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "16px",
              borderBottom: "1px solid #F1F5F9",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                AI
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>
                  AI Receptionist
                </span>
                <span style={{ fontSize: "11px", color: "#16A34A", fontWeight: 600 }}>
                  ● Active 24/7
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                color: "#1D4ED8",
                padding: "4px 10px",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              &lt; 2s Reply
            </div>
          </div>

          {/* Chat Bubbles */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                padding: "12px 14px",
                borderRadius: "16px",
                borderBottomLeftRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#334155",
                maxWidth: "85%",
              }}
            >
              Hi! Can I book a consultation for tomorrow afternoon?
            </div>

            <div
              style={{
                background: "#2563EB",
                padding: "12px 14px",
                borderRadius: "16px",
                borderBottomRightRadius: "4px",
                fontSize: "13px",
                color: "#FFFFFF",
                fontWeight: 500,
                alignSelf: "flex-end",
                maxWidth: "90%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)",
              }}
            >
              <span style={{ color: "#BFDBFE", fontWeight: 700 }}>Confirmed for 3:30 PM! 📅</span>
              <span style={{ fontSize: "11px", color: "#F8FAFC" }}>Calendar synced &amp; WhatsApp reminder sent.</span>
            </div>
          </div>

          {/* Metric Bottom Box */}
          <div
            style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "11px", color: "#64748B", textTransform: "uppercase", fontWeight: 700 }}>
                Lead Recovery
              </span>
              <span style={{ fontSize: "22px", fontWeight: 900, color: "#2563EB" }}>
                +3.2x Bookings
              </span>
            </div>
            <div
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                background: "#2563EB",
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Zero Drop-Off
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

