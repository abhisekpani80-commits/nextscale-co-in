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
          backgroundColor: "#FAF3E5",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "#141414",
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
                background: "#FF4D00",
                border: "3px solid #141414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "3px 3px 0 #141414",
              }}
            >
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#FAF3E5" }}>✦</span>
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "1px",
                color: "#141414",
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
                lineHeight: 1.05,
                color: "#141414",
                letterSpacing: "-2px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              We cook <span style={{ color: "#FF4D00" }}>websites.</span>
              <br />
              And AI agents.
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#5B5146",
                lineHeight: 1.4,
                margin: 0,
                fontWeight: 600,
              }}
            >
              Sub-second Next.js web applications and 24/7 WhatsApp AI receptionists. Live in 7 days flat.
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
                  background: "#FFC72E",
                  border: "2px solid #141414",
                  color: "#141414",
                  fontSize: "13px",
                  fontWeight: 800,
                  boxShadow: "2px 2px 0 #141414",
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
                  background: "#9DD9FF",
                  border: "2px solid #141414",
                  color: "#141414",
                  fontSize: "13px",
                  fontWeight: 800,
                  boxShadow: "2px 2px 0 #141414",
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
                  background: "#B8E986",
                  border: "2px solid #141414",
                  color: "#141414",
                  fontSize: "13px",
                  fontWeight: 800,
                  boxShadow: "2px 2px 0 #141414",
                }}
              >
                <span>🔒 100% Code Handover</span>
              </div>
            </div>

            <span style={{ fontSize: "16px", fontWeight: 800, color: "#141414", letterSpacing: "1px" }}>
              NEXTSCALE.CO.IN · SERVING 8+ COUNTRIES
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
            background: "#FFFCF5",
            border: "3px solid #141414",
            borderRadius: "28px",
            padding: "24px",
            boxShadow: "8px 8px 0 #141414",
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
              borderBottom: "2px solid #141414",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#FF4D00",
                  border: "2px solid #141414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FAF3E5",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                AI
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: 900, color: "#141414", textTransform: "uppercase" }}>
                  AI Receptionist
                </span>
                <span style={{ fontSize: "11px", color: "#FF4D00", fontWeight: 800 }}>
                  ● Live 24/7
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                background: "#B8E986",
                border: "2px solid #141414",
                padding: "4px 10px",
                fontSize: "11px",
                fontWeight: 900,
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
                background: "#FAF3E5",
                border: "2px solid #141414",
                padding: "12px 14px",
                borderRadius: "16px",
                borderBottomLeftRadius: "4px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#141414",
                maxWidth: "85%",
              }}
            >
              Hi! Can I book a consultation for tomorrow afternoon?
            </div>

            <div
              style={{
                background: "#141414",
                border: "2px solid #141414",
                padding: "12px 14px",
                borderRadius: "16px",
                borderBottomRightRadius: "4px",
                fontSize: "13px",
                color: "#FAF3E5",
                fontWeight: 600,
                alignSelf: "flex-end",
                maxWidth: "90%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ color: "#FFC72E", fontWeight: 800 }}>Confirmed for 3:30 PM! 📅</span>
              <span style={{ fontSize: "11px", color: "#FAF3E5" }}>Calendar synced & WhatsApp reminder sent.</span>
            </div>
          </div>

          {/* Metric Bottom Box */}
          <div
            style={{
              background: "#FFC72E",
              border: "2px solid #141414",
              borderRadius: "16px",
              padding: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "3px 3px 0 #141414",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "11px", color: "#141414", textTransform: "uppercase", fontWeight: 900 }}>
                Lead Recovery
              </span>
              <span style={{ fontSize: "22px", fontWeight: 900, color: "#141414" }}>
                +3.2x Bookings
              </span>
            </div>
            <div
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                background: "#141414",
                color: "#FAF3E5",
                fontSize: "11px",
                fontWeight: 900,
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

