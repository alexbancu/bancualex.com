import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Blog post by Alex Bancu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#eef0ee",
          fontFamily: "Georgia, serif",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "#1a5c2e",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Alex Bancu
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#1e2e20",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#4d5e4f",
            marginTop: 24,
          }}
        >
          bancualex.com
        </div>
      </div>
    ),
    { ...size }
  );
}
