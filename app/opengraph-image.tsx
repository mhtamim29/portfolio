import { ImageResponse } from "next/og";
import { siteConfig } from "./data/portfolio";

export const alt =
  "Makibul Hossain Tamim — CEO & Co-Founder at Zentura. Product strategy, design, and engineering.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f4f2ee",
        color: "#0a0a0a",
        padding: "55px 65px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 20,
        }}
      >
        <span style={{ fontWeight: 700 }}>MHT</span>
        <span style={{ color: "#68645f" }}>DHAKA, BANGLADESH</span>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 24, color: "#68645f", marginBottom: 18 }}>
            {siteConfig.name}
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -3,
            }}
          >
            STRATEGY.
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -3,
            }}
          >
            DESIGN.
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -3,
            }}
          >
            ENGINEERING.
          </span>
        </div>
        <div
          style={{
            width: 270,
            height: 270,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #b4b8ac",
            borderRadius: 150,
          }}
        >
          <div
            style={{
              width: 195,
              height: 195,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #a0a895",
              borderRadius: 100,
            }}
          >
            <div
              style={{
                width: 125,
                height: 125,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#cbd0c1",
                border: "1px solid #0a0a0a",
                borderRadius: 70,
                fontSize: 48,
              }}
            >
              ↗
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #d8d5cf",
          paddingTop: 20,
          fontSize: 20,
          justifyContent: "space-between",
        }}
      >
        <span>{siteConfig.role}</span>
        <span style={{ color: "#68645f" }}>PORTFOLIO</span>
      </div>
    </div>,
    size,
  );
}
