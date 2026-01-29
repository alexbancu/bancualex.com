"use client";

import { useState } from "react";

export default function Annotation({
  children,
  note,
}: {
  children: React.ReactNode;
  note: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span
        onClick={() => setOpen(!open)}
        style={{
          borderBottom: "1px dashed var(--color-brand)",
          cursor: "pointer",
        }}
      >
        {children}
      </span>
      {open && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--color-foreground)",
            color: "var(--color-background)",
            fontSize: "0.75rem",
            lineHeight: 1.5,
            padding: "0.5rem 0.75rem",
            borderRadius: "8px",
            width: "max-content",
            maxWidth: "260px",
            zIndex: 30,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          {note}
        </span>
      )}
    </span>
  );
}
