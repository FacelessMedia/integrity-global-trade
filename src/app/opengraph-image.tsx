import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Integrity Global Trade & Commodities Corp — Global Precious Metals Trading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative top line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #d97706, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 60px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 50,
              background: "rgba(217, 119, 6, 0.15)",
              border: "1px solid rgba(217, 119, 6, 0.3)",
              marginBottom: 32,
              fontSize: 14,
              color: "#fbbf24",
              fontWeight: 600,
            }}
          >
            ● Verified Trading Firm
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              marginBottom: 16,
              maxWidth: 800,
            }}
          >
            Integrity Global Trade & Commodities Corp
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: 700,
              marginBottom: 40,
            }}
          >
            Global Precious Metals & Commodities Trading — Ethically Sourced, KYC/AML Verified
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "$3B+", label: "Contract Volume" },
              { value: "50+", label: "Countries" },
              { value: "100%", label: "KYC Compliant" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#d97706" }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ fontSize: 13, color: "#64748b" }}>integritygtc.com</div>
          <div style={{ fontSize: 13, color: "#64748b" }}>Sheridan, Wyoming, USA</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
