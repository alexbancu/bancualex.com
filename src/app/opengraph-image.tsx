import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alex Bancu — Software Engineer, Dad, Writer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef0ee",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#1e2e20",
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Alex Bancu
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#4d5e4f",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Software engineer figuring things out in public.
        </div>
      </div>
    ),
    { ...size }
  );
}
