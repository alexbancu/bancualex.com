"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyPostHeader({ title }: { title: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-surface)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
        padding: "0.65rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link
          href="/blog"
          style={{
            fontSize: "0.8rem",
            color: "var(--color-muted)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          &larr; All posts
        </Link>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--color-foreground)",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
