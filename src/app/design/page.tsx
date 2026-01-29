"use client";

import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   FONT PAIRINGS
   ───────────────────────────────────────────── */
const fontPairings = [
  {
    name: "Mono + Serif",
    label: "(raw, anti-polish, developer)",
    heading: "'Libre Baskerville', Georgia, serif",
    body: "'IBM Plex Mono', 'SF Mono', monospace",
    headingUrl: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    bodyUrl: "family=IBM+Plex+Mono:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "14px",
  },
  {
    name: "Instrument + DM Sans",
    label: "(editorial, refined, magazine)",
    heading: "'Instrument Serif', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    headingUrl: "family=Instrument+Serif:ital@0;1",
    bodyUrl: "family=DM+Sans:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Fraunces + Karla",
    label: "(organic, quirky, artisan)",
    heading: "'Fraunces', Georgia, serif",
    body: "'Karla', system-ui, sans-serif",
    headingUrl: "family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300",
    bodyUrl: "family=Karla:wght@300;400;500",
    headingWeight: "300",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Syne + Space Mono",
    label: "(technical, futuristic, loud)",
    heading: "'Syne', system-ui, sans-serif",
    body: "'Space Mono', monospace",
    headingUrl: "family=Syne:wght@400;500;600;700",
    bodyUrl: "family=Space+Mono:wght@400;700",
    headingWeight: "600",
    bodyWeight: "400",
    bodySize: "14px",
  },
  {
    name: "Cormorant + Outfit",
    label: "(elegant, sophisticated, airy)",
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Outfit', system-ui, sans-serif",
    headingUrl: "family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400",
    bodyUrl: "family=Outfit:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Playfair + Source Sans",
    label: "(bold authority, premium, timeless)",
    heading: "'Playfair Display', Georgia, serif",
    body: "'Source Sans 3', system-ui, sans-serif",
    headingUrl: "family=Playfair+Display:ital,wght@0,400;0,500;1,400",
    bodyUrl: "family=Source+Sans+3:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Cormorant + Jost",
    label: "(literary, elegant, newsletter OG)",
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Jost', system-ui, sans-serif",
    headingUrl: "family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400",
    bodyUrl: "family=Jost:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "EB Garamond + Josefin Sans",
    label: "(bookish, geometric, airy)",
    heading: "'EB Garamond', Georgia, serif",
    body: "'Josefin Sans', system-ui, sans-serif",
    headingUrl: "family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400",
    bodyUrl: "family=Josefin+Sans:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "David Libre + Karla",
    label: "(distinctive, cultural, grounded)",
    heading: "'David Libre', Georgia, serif",
    body: "'Karla', system-ui, sans-serif",
    headingUrl: "family=David+Libre:wght@400;500;700",
    bodyUrl: "family=Karla:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Charter Stack",
    label: "(bookish, quiet authority, old web)",
    heading: "Charter, 'Bitstream Charter', Georgia, 'Times New Roman', serif",
    body: "Charter, 'Bitstream Charter', Georgia, 'Times New Roman', serif",
    headingUrl: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    bodyUrl: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    headingWeight: "700",
    bodyWeight: "400",
    bodySize: "15px",
  },
  {
    name: "Libre Baskerville + Outfit",
    label: "(trust + warmth, credible, human)",
    heading: "'Libre Baskerville', Georgia, serif",
    body: "'Outfit', system-ui, sans-serif",
    headingUrl: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    bodyUrl: "family=Outfit:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "DM Serif Display + Outfit",
    label: "(bold, polished, impactful)",
    heading: "'DM Serif Display', Georgia, serif",
    body: "'Outfit', system-ui, sans-serif",
    headingUrl: "family=DM+Serif+Display:ital@0;1",
    bodyUrl: "family=Outfit:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Lora + IBM Plex Mono",
    label: "(warm heading, nerdy body, hybrid)",
    heading: "'Lora', Georgia, serif",
    body: "'IBM Plex Mono', 'SF Mono', monospace",
    headingUrl: "family=Lora:ital,wght@0,400;0,500;0,600;1,400",
    bodyUrl: "family=IBM+Plex+Mono:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "14px",
  },
  {
    name: "Lora + Inter",
    label: "(sophisticated trust + screen clarity)",
    heading: "'Lora', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Lora:ital,wght@0,400;0,500;0,600;1,400",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Georgia + Inter",
    label: "(traditional authority, clean modern body)",
    heading: "Georgia, 'Times New Roman', serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Inter:wght@300;400;500",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "700",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "DM Serif Display + Inter",
    label: "(commanding serif + invisible body)",
    heading: "'DM Serif Display', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=DM+Serif+Display:ital@0;1",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Libre Baskerville + Inter",
    label: "(deep trust + crisp modern)",
    heading: "'Libre Baskerville', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Inter + Inter",
    label: "(neutral, invisible, SaaS-clean)",
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Inter:wght@300;400;500;600;700",
    bodyUrl: "family=Inter:wght@300;400;500;600;700",
    headingWeight: "600",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Poppins + Inter",
    label: "(friendly energy, geometric, approachable)",
    heading: "'Poppins', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Poppins:wght@400;500;600",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Cormorant + Inter",
    label: "(high elegance + screen neutral)",
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Georgia + Georgia",
    label: "(traditional, bookish, old-school trust)",
    heading: "Georgia, 'Times New Roman', serif",
    body: "Georgia, 'Times New Roman', serif",
    headingUrl: "family=Inter:wght@400",
    bodyUrl: "family=Inter:wght@400",
    headingWeight: "700",
    bodyWeight: "400",
    bodySize: "16px",
  },
  {
    name: "Playfair + Inter",
    label: "(premium authority + invisible body)",
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Playfair+Display:ital,wght@0,400;0,500;1,400",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  // ── Trust + Energy pairings ──
  {
    name: "Montserrat + Lato",
    label: "(confident energy, modern trust)",
    heading: "'Montserrat', system-ui, sans-serif",
    body: "'Lato', system-ui, sans-serif",
    headingUrl: "family=Montserrat:wght@400;500;600;700",
    bodyUrl: "family=Lato:wght@300;400;700",
    headingWeight: "600",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Oswald + Nunito",
    label: "(impactful heading, warm friendly body)",
    heading: "'Oswald', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    headingUrl: "family=Oswald:wght@400;500;600;700",
    bodyUrl: "family=Nunito:wght@300;400;600",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Manrope + Inter",
    label: "(tech-friendly, approachable, precise)",
    heading: "'Manrope', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Manrope:wght@400;500;600;700",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "600",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Space Grotesk + Inter",
    label: "(distinctive, modern energy, sharp)",
    heading: "'Space Grotesk', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Space+Grotesk:wght@400;500;600;700",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Nunito + Nunito",
    label: "(warm, rounded, approachable energy)",
    heading: "'Nunito', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    headingUrl: "family=Nunito:wght@300;400;600;700",
    bodyUrl: "family=Nunito:wght@300;400;600;700",
    headingWeight: "700",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Playfair + Nunito",
    label: "(premium authority + warm energy)",
    heading: "'Playfair Display', Georgia, serif",
    body: "'Nunito', system-ui, sans-serif",
    headingUrl: "family=Playfair+Display:ital,wght@0,400;0,500;1,400",
    bodyUrl: "family=Nunito:wght@300;400;600",
    headingWeight: "400",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Lora + Manrope",
    label: "(warm credibility + tech warmth)",
    heading: "'Lora', Georgia, serif",
    body: "'Manrope', system-ui, sans-serif",
    headingUrl: "family=Lora:ital,wght@0,400;0,500;0,600;1,400",
    bodyUrl: "family=Manrope:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Oswald + Inter",
    label: "(bold impact, clean neutral body)",
    heading: "'Oswald', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl: "family=Oswald:wght@400;500;600;700",
    bodyUrl: "family=Inter:wght@300;400;500",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
  {
    name: "Space Grotesk + Nunito",
    label: "(future energy + human warmth)",
    heading: "'Space Grotesk', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    headingUrl: "family=Space+Grotesk:wght@400;500;600;700",
    bodyUrl: "family=Nunito:wght@300;400;600",
    headingWeight: "500",
    bodyWeight: "300",
    bodySize: "15px",
  },
];

/* ─────────────────────────────────────────────
   COLOR PALETTES
   ───────────────────────────────────────────── */
const palettes = [
  {
    name: "Paper & Sage",
    bg: "#f5f2eb",
    text: "#1c1c1a",
    mid: "#555550",
    light: "#8c8c84",
    accent: "#2c452d",
    cta: "#2c452d",
  },
  {
    name: "Warm White",
    bg: "#fafaf8",
    text: "#1a1a18",
    mid: "#4a4a46",
    light: "#8a8a84",
    accent: "#2c452d",
    cta: "#2c452d",
  },
  {
    name: "Cool Stone",
    bg: "#f4f5f3",
    text: "#1b1d1c",
    mid: "#4e5250",
    light: "#8b8f8c",
    accent: "#2d4a3e",
    cta: "#2d4a3e",
  },
  {
    name: "Cream",
    bg: "#faf8f2",
    text: "#2a2520",
    mid: "#5e574e",
    light: "#9a9388",
    accent: "#6b4c2f",
    cta: "#6b4c2f",
  },
  {
    name: "Bone & Ink",
    bg: "#f0ede6",
    text: "#111111",
    mid: "#444444",
    light: "#888888",
    accent: "#111111",
    cta: "#111111",
  },
  {
    name: "Slate & Green",
    bg: "#eef0ee",
    text: "#1e2e20",
    mid: "#4d5e4f",
    light: "#8a9a8c",
    accent: "#1a5c2e",
    cta: "#1a5c2e",
  },
  {
    name: "Dark Mode",
    bg: "#141413",
    text: "#e8e6e1",
    mid: "#a8a69e",
    light: "#6b6960",
    accent: "#7cb680",
    cta: "#7cb680",
  },
  {
    name: "Midnight Sage",
    bg: "#0f1a12",
    text: "#dce3dd",
    mid: "#8fa392",
    light: "#5a7060",
    accent: "#8cc99a",
    cta: "#8cc99a",
  },
  // Brand Identity palettes
  {
    name: "Brand: Sage Light",
    bg: "#f4f5f0",
    text: "#4D5D53",
    mid: "#738276",
    light: "#98A869",
    accent: "#6A760C",
    cta: "#D9741A",
  },
  {
    name: "Brand: Warm Sage",
    bg: "#f2f0e8",
    text: "#4D5D53",
    mid: "#738276",
    light: "#B2AC88",
    accent: "#4D5D53",
    cta: "#D9741A",
  },
  {
    name: "Brand: Explorer Dark",
    bg: "#1e2820",
    text: "#e8e6df",
    mid: "#B2AC88",
    light: "#738276",
    accent: "#98A869",
    cta: "#D9741A",
  },
  {
    name: "Brand: Teal & Orange",
    bg: "#f0f2f0",
    text: "#2a3530",
    mid: "#4D5D53",
    light: "#738276",
    accent: "#34788C",
    cta: "#D9741A",
  },
  // Research-informed palettes (60-30-10 rule)
  {
    name: "60-30-10: Beige Base",
    bg: "#f0ece0",
    text: "#4D5D53",
    mid: "#738276",
    light: "#98A869",
    accent: "#4D5D53",
    cta: "#D9741A",
  },
  {
    name: "60-30-10: White + Sage",
    bg: "#faf9f6",
    text: "#4D5D53",
    mid: "#738276",
    light: "#B2AC88",
    accent: "#6A760C",
    cta: "#D9741A",
  },
  {
    name: "60-30-10: Sage + Blue CTA",
    bg: "#f4f5f0",
    text: "#4D5D53",
    mid: "#738276",
    light: "#B2AC88",
    accent: "#98A869",
    cta: "#34788C",
  },
  {
    name: "Trust + Energy",
    bg: "#faf8f4",
    text: "#3a3a35",
    mid: "#4D5D53",
    light: "#738276",
    accent: "#34788C",
    cta: "#D9741A",
  },
  {
    name: "Dark: Charcoal Base",
    bg: "#2d3830",
    text: "#e8e6df",
    mid: "#B2AC88",
    light: "#6B7A54",
    accent: "#98A869",
    cta: "#C86B15",
  },
  {
    name: "Dark: Deep Forest",
    bg: "#1a2418",
    text: "#e2dfd6",
    mid: "#98A869",
    light: "#5a7060",
    accent: "#B2AC88",
    cta: "#D9741A",
  },
];

/* ─────────────────────────────────────────────
   LAYOUTS
   ───────────────────────────────────────────── */
const layoutOptions = [
  { name: "Single Column", value: "single" },
  { name: "Two Column", value: "twocol" },
  { name: "Masthead", value: "masthead" },
];

/* ─────────────────────────────────────────────
   PAGE TABS
   ───────────────────────────────────────────── */
const pageTabs = [
  { name: "Hub", value: "hub" },
  { name: "Coaching", value: "coaching" },
  { name: "Blog", value: "blog" },
];

/* ─────────────────────────────────────────────
   PREVIEW COMPONENTS
   ───────────────────────────────────────────── */
function HubPreview({
  f,
  p,
  layout,
}: {
  f: (typeof fontPairings)[0];
  p: (typeof palettes)[0];
  layout: string;
}) {
  return (
    <div
      className={`dp-page dp-layout-${layout}`}
      style={{
        background: p.bg,
        color: p.text,
        fontFamily: f.body,
        fontSize: f.bodySize,
        fontWeight: f.bodyWeight,
      }}
    >
      {/* Masthead */}
      {layout === "masthead" && (
        <div style={{ textAlign: "center", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.7em", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4, margin: "0 0 0.8rem" }}>
            Engineer &middot; Dad &middot; Writer
          </p>
          <h1 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "3.5rem", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 0.5rem" }}>
            Alex Bancu
          </h1>
          <p style={{ fontSize: "0.8em", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 1rem" }}>
            Figuring things out in public
          </p>
          <hr style={{ border: "none", height: "2px", background: p.text, margin: 0 }} />
        </div>
      )}

      <div style={layout === "twocol" ? { display: "grid", gridTemplateColumns: "1fr 220px", gap: "2.5rem" } : { maxWidth: "560px" }}>
        <div>
          {layout !== "masthead" && (
            <>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: p.mid, opacity: 0.3, marginBottom: "1.5rem" }} />
              <h1 style={{ fontFamily: f.heading, fontWeight: f.headingWeight === "600" ? "600" : "700", fontSize: f.headingWeight === "300" ? "2.2rem" : "2rem", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 0.6rem" }}>
                Alex Bancu
              </h1>
              <p style={{ color: p.mid, margin: "0 0 2.5rem", lineHeight: 1.8 }}>
                Software engineer. Dad. I write about overthinking, decisions, and getting unstuck.
              </p>
            </>
          )}

          <p style={{ fontSize: "0.75em", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: p.light, margin: "0 0 1rem" }}>Writing</p>

          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.15em", lineHeight: 1.3, margin: "0 0 0.2rem" }}>
              Feeling Stuck in Life and Career?
            </h2>
            <p style={{ color: p.mid, margin: 0, lineHeight: 1.7, opacity: 0.7 }}>
              You&apos;re not lazy. Something real is happening underneath the stuckness.
            </p>
            <p style={{ color: p.light, margin: "0.2rem 0 0", fontSize: "0.85em" }}>Jan 2026 &middot; Blog</p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.15em", lineHeight: 1.3, margin: "0 0 0.2rem" }}>
              Bancu Writes
            </h2>
            <p style={{ color: p.mid, margin: 0, lineHeight: 1.7, opacity: 0.7 }}>
              Weekly newsletter on energy, decision-making, and ending overthinking.
            </p>
            <p style={{ color: p.light, margin: "0.2rem 0 0", fontSize: "0.85em" }}>Substack</p>
          </div>

          <hr style={{ border: "none", height: 1, background: p.text, opacity: 0.15, margin: "2rem 0" }} />

          <p style={{ fontSize: "0.75em", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: p.light, margin: "0 0 1rem" }}>Projects</p>

          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.15em", lineHeight: 1.3, margin: "0 0 0.2rem" }}>Mind Design Studio</h2>
            <p style={{ color: p.mid, margin: 0, lineHeight: 1.7, opacity: 0.7 }}>1-on-1 coaching for high-performers stuck in mental fog.</p>
          </div>

          <div style={{ marginBottom: "1.5rem", opacity: 0.4 }}>
            <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.15em", lineHeight: 1.3, margin: "0 0 0.2rem" }}>Software &amp; Side Projects</h2>
            <p style={{ color: p.mid, margin: 0, lineHeight: 1.7, opacity: 0.7 }}>8+ years building software. More here soon.</p>
          </div>

          <hr style={{ border: "none", height: 1, background: p.text, opacity: 0.15, margin: "2rem 0" }} />
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", opacity: 0.4, fontSize: "0.85em", color: p.light }}>
            {["X", "LinkedIn", "Instagram", "Substack", "Blog"].map((s) => (
              <span key={s} style={{ textDecoration: "underline", textUnderlineOffset: 2, cursor: "default" }}>{s}</span>
            ))}
          </div>
        </div>

        {layout === "twocol" && (
          <div>
            <div style={{ width: "100%", aspectRatio: "1", borderRadius: 4, background: p.mid, opacity: 0.2, marginBottom: "1rem" }} />
            <p style={{ color: p.mid, lineHeight: 1.7, fontSize: "0.9em", opacity: 0.65, margin: 0 }}>
              Software engineer. I write about overthinking, decisions, and getting unstuck.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CoachingPreview({
  f,
  p,
}: {
  f: (typeof fontPairings)[0];
  p: (typeof palettes)[0];
}) {
  const symptoms = [
    "Looping thoughts that won't stop",
    "Stuck between two options",
    "Beating yourself up weekly",
    "Tired in a way sleep doesn't fix",
  ];

  const services = [
    "Find the emotion underneath the overthinking",
    "Stop using self-criticism as fuel",
    "Make decisions from clarity, not fear",
    "Notice the patterns you keep repeating",
  ];

  return (
    <div
      className="dp-page"
      style={{
        background: p.bg,
        color: p.text,
        fontFamily: f.body,
        fontSize: f.bodySize,
        fontWeight: f.bodyWeight,
      }}
    >
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.75em", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: p.accent, margin: "0 0 1rem" }}>
          Mind Design Studio
        </p>
        <h1 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 1rem" }}>
          The overthinking isn&apos;t the problem. It&apos;s a smoke signal.
        </h1>
        <p style={{ color: p.mid, maxWidth: 480, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
          Coaching for people in tech who look fine on the outside but feel stuck, foggy, or running on empty.
        </p>
        <div style={{ display: "inline-block", background: p.cta, color: p.bg, padding: "0.7rem 2rem", borderRadius: 6, fontSize: "0.88em", fontWeight: 500 }}>
          Book a Call
        </div>
      </div>

      {/* Problem */}
      <div style={{ maxWidth: 520, marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.4em", lineHeight: 1.2, margin: "0 0 0.8rem" }}>
          You&apos;re managing your emotions. <span style={{ color: p.accent }}>That&apos;s what&apos;s draining you.</span>
        </h2>
        <p style={{ color: p.mid, lineHeight: 1.7, margin: 0 }}>
          You run mental loops all day. Pros and cons lists that go nowhere. The fog, the stuckness, the exhaustion. Those are smoke signals.
        </p>
      </div>

      {/* Symptoms */}
      <div style={{ background: p.text === "#e8e6e1" || p.text === "#dce3dd" || p.text === "#e8e6df" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", padding: "1.5rem", borderRadius: 8, marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.2em", lineHeight: 1.2, margin: "0 0 1rem" }}>
          These are smoke signals
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {symptoms.map((s) => (
            <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.6rem", color: p.mid, lineHeight: 1.6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, marginTop: "0.5em", flexShrink: 0 }} />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.2em", lineHeight: 1.2, margin: "0 0 1rem" }}>
          What we work on together
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem" }}>
          {services.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: p.mid, lineHeight: 1.6, fontSize: "0.92em" }}>
              <span style={{ color: p.accent, fontWeight: 700, flexShrink: 0 }}>&check;</span>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", marginBottom: "2.5rem" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: p.mid, opacity: 0.25, flexShrink: 0 }} />
        <div>
          <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.2em", margin: "0 0 0.5rem" }}>Hi, I&apos;m Alex.</h2>
          <p style={{ color: p.mid, lineHeight: 1.7, margin: 0 }}>
            I spent 8+ years as a software engineer. Good salary, remote work, total flexibility. Inside, I was running on self-criticism and calling it discipline.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "2rem 0", borderTop: `1px solid ${p.text}20` }}>
        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.3em", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
          You don&apos;t need more information.
        </h2>
        <p style={{ color: p.mid, margin: "0 0 1rem" }}>30 minutes. Free. We talk about what&apos;s actually going on.</p>
        <div style={{ display: "inline-block", background: p.cta, color: p.bg, padding: "0.7rem 2rem", borderRadius: 6, fontSize: "0.88em", fontWeight: 500 }}>
          Book a free call
        </div>
      </div>
    </div>
  );
}

function BlogPreview({
  f,
  p,
}: {
  f: (typeof fontPairings)[0];
  p: (typeof palettes)[0];
}) {
  return (
    <div
      className="dp-page"
      style={{
        background: p.bg,
        color: p.text,
        fontFamily: f.body,
        fontSize: f.bodySize,
        fontWeight: f.bodyWeight,
      }}
    >
      <div style={{ maxWidth: 560 }}>
        {/* Blog index header */}
        <p style={{ fontSize: "0.75em", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: p.accent, margin: "0 0 0.6rem" }}>
          Blog
        </p>
        <h1 style={{ fontFamily: f.heading, fontWeight: f.headingWeight === "600" ? "600" : "700", fontSize: "1.8rem", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 0.5rem" }}>
          Writing
        </h1>
        <p style={{ color: p.mid, margin: "0 0 2rem", lineHeight: 1.7 }}>
          On overthinking, emotional clarity, and getting unstuck.
        </p>

        {/* Post listing */}
        <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: `1px solid ${p.text}10` }}>
          <p style={{ fontSize: "0.85em", color: p.light, margin: "0 0 0.3rem" }}>January 28, 2026</p>
          <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.3em", lineHeight: 1.25, margin: "0 0 0.4rem", color: p.accent }}>
            Feeling Stuck in Life and Career? Here&apos;s What&apos;s Actually Going On
          </h2>
          <p style={{ color: p.mid, margin: 0, lineHeight: 1.7 }}>
            You&apos;re not lazy. You&apos;re not ungrateful. Something real is happening underneath the stuckness.
          </p>
        </div>

        <hr style={{ border: "none", height: 1, background: p.text, opacity: 0.1, margin: "2rem 0 2.5rem" }} />

        {/* Blog post preview */}
        <p style={{ fontSize: "0.75em", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: p.light, margin: "0 0 1rem" }}>
          Post preview
        </p>

        <p style={{ fontSize: "0.85em", color: p.light, margin: "0 0 0.3rem" }}>January 28, 2026</p>
        <h1 style={{ fontFamily: f.heading, fontWeight: f.headingWeight === "600" ? "600" : "700", fontSize: "1.8rem", lineHeight: 1.15, margin: "0 0 0.5rem" }}>
          Feeling Stuck in Life and Career?
        </h1>
        <p style={{ color: p.mid, fontSize: "1.05em", lineHeight: 1.6, margin: "0 0 2rem" }}>
          You&apos;re not lazy. You&apos;re not ungrateful. Something real is happening underneath the stuckness, and thinking harder won&apos;t fix it.
        </p>

        {/* Body text sample */}
        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.4em", lineHeight: 1.2, margin: "0 0 0.6rem" }}>
          The stuckness is a signal
        </h2>
        <p style={{ color: p.mid, lineHeight: 1.8, margin: "0 0 1.2rem" }}>
          Most people treat stuckness like a logistics problem. They think they need a better plan, a clearer goal, more information. So they read another book. Take another course. Make another list.
        </p>
        <p style={{ color: p.mid, lineHeight: 1.8, margin: "0 0 1.2rem" }}>
          None of it works. Because the problem isn&apos;t in your head. It&apos;s underneath it. When you feel stuck in your life and career, your body is trying to tell you something.
        </p>

        <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.4em", lineHeight: 1.2, margin: "2rem 0 0.6rem" }}>
          Why smart people stay stuck longer
        </h2>
        <p style={{ color: p.mid, lineHeight: 1.8, margin: "0 0 1.2rem" }}>
          You&apos;re good at thinking. You&apos;ve solved hard problems your whole life with your brain. So when you feel stuck, you reach for the same tool. More analysis. More pros and cons.
        </p>

        {/* CTA block */}
        <div style={{ textAlign: "center", marginTop: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${p.text}15` }}>
          <h2 style={{ fontFamily: f.heading, fontWeight: f.headingWeight, fontSize: "1.3em", lineHeight: 1.2, margin: "0 0 0.4rem" }}>
            Feeling stuck?
          </h2>
          <p style={{ color: p.mid, margin: "0 0 1rem", lineHeight: 1.6 }}>
            If this post hit close to home, read about how I work with people like you.
          </p>
          <div style={{ display: "inline-block", background: p.cta, color: p.bg, padding: "0.6rem 1.5rem", borderRadius: 6, fontSize: "0.85em", fontWeight: 500 }}>
            Learn about coaching
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
function useFavorites(key: string) {
  const [favs, setFavs] = useState<Set<string>>(new Set());
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "favs" | "hidden">("all");

  useEffect(() => {
    try {
      const sf = localStorage.getItem(key);
      if (sf) setFavs(new Set(JSON.parse(sf)));
      const sh = localStorage.getItem(key + "-hidden");
      if (sh) setHidden(new Set(JSON.parse(sh)));
    } catch {}
  }, [key]);

  const toggleFav = useCallback((name: string) => {
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      localStorage.setItem(key, JSON.stringify([...next]));
      return next;
    });
  }, [key]);

  const toggleHide = useCallback((name: string) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      localStorage.setItem(key + "-hidden", JSON.stringify([...next]));
      return next;
    });
  }, [key]);

  return { favs, hidden, filter, setFilter, toggleFav, toggleHide };
}

export default function DesignPicker() {
  // Default to current site design: Lora + Inter, Slate & Green
  const [font, setFont] = useState(fontPairings.findIndex((f) => f.name === "Lora + Inter"));
  const [palette, setPalette] = useState(palettes.findIndex((p) => p.name === "Slate & Green"));
  const [layout, setLayout] = useState(0);
  const [page, setPage] = useState(0);

  const fontFavs = useFavorites("dp-fav-fonts");
  const paletteFavs = useFavorites("dp-fav-palettes");

  const f = fontPairings[font];
  const p = palettes[palette];
  const l = layoutOptions[layout];

  const fontUrl = `https://fonts.googleapis.com/css2?${f.headingUrl}&${f.bodyUrl}&display=swap`;

  return (
    <div className="dp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap');

        .dp {
          min-height: 100vh;
          background: #0e0e0d;
          color: #ccc9c0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          line-height: 1.7;
          display: grid;
          grid-template-columns: 340px 1fr;
          -webkit-font-smoothing: antialiased;
        }

        @media (max-width: 900px) {
          .dp { grid-template-columns: 1fr; }
        }

        .dp-panel {
          border-right: 1px solid #222;
          padding: 2rem;
          overflow-y: auto;
          max-height: 100vh;
          position: sticky;
          top: 0;
        }

        @media (max-width: 900px) {
          .dp-panel {
            position: static;
            max-height: none;
            border-right: none;
            border-bottom: 1px solid #222;
          }
        }

        .dp-panel-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #666;
          margin: 0 0 1.5rem;
        }

        .dp-section { margin-bottom: 2rem; }

        .dp-section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          margin: 0 0 0.6rem;
        }

        .dp-option {
          display: grid;
          grid-template-columns: 14px 1fr auto;
          grid-template-rows: auto auto;
          align-items: center;
          gap: 0 0.5rem;
          padding: 0.5rem 0.7rem;
          border: 1px solid transparent;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.15s;
          margin-bottom: 2px;
          background: transparent;
          width: 100%;
          text-align: left;
          font-family: inherit;
          font-size: 12px;
          color: inherit;
          line-height: 1.4;
        }

        .dp-option:hover { background: #1a1a18; border-color: #2a2a28; }
        .dp-option--active { background: #1a1a18; border-color: #333; }

        .dp-option-radio {
          grid-row: 1 / -1;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid #444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: center;
        }

        .dp-option--active .dp-option-radio { border-color: #7cb680; }
        .dp-option--active .dp-option-radio::after {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #7cb680;
        }

        .dp-option-name { color: #ddd; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dp-option-label { color: #4a4a44; font-size: 10px; grid-column: 2; line-height: 1.3; }

        .dp-swatch-row { display: flex; gap: 3px; flex-shrink: 0; grid-column: 2; }
        .dp-swatch { width: 12px; height: 12px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.06); }

        /* Palette options: radio | swatches (row1) + name (row2) | star */
        .dp-option--palette { grid-template-rows: auto auto; }
        .dp-option--palette .dp-option-name { grid-column: 2; font-size: 11px; color: #999; }

        .dp-preview {
          padding: 2rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }

        .dp-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 1.5rem;
          align-self: flex-start;
          border: 1px solid #333;
          border-radius: 6px;
          overflow: hidden;
        }

        .dp-tab {
          padding: 0.5rem 1.2rem;
          font-family: inherit;
          font-size: 12px;
          color: #888;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s;
          border-right: 1px solid #333;
        }

        .dp-tab:last-child { border-right: none; }
        .dp-tab:hover { color: #ccc; background: #1a1a18; }
        .dp-tab--active { color: #ddd; background: #222; }

        .dp-preview-meta {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          margin: 0 0 1rem;
          align-self: flex-start;
        }

        .dp-canvas {
          width: 100%;
          max-width: 800px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.4);
        }

        .dp-page {
          min-height: 500px;
          padding: 2.5rem 2rem;
          transition: background 0.3s, color 0.3s;
        }

        .dp-export {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1e1c;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
          z-index: 10;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          white-space: nowrap;
        }

        .dp-export-text { color: #666; }
        .dp-export-value { color: #ddd; }
        .dp-export-sep { color: #333; }

        .dp-star {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          transition: color 0.15s, transform 0.15s;
          border: none;
          background: none;
          padding: 0;
          font-family: inherit;
          border-radius: 4px;
        }
        .dp-star:hover { color: #aa8833; transform: scale(1.15); }
        .dp-star--active { color: #d4a840; }

        .dp-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 0 0.6rem;
        }

        .dp-filter-btn {
          font-family: inherit;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #555;
          background: #1a1a18;
          border: 1px solid #2a2a28;
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          cursor: pointer;
          transition: all 0.15s;
        }
        .dp-filter-btn:hover { color: #999; border-color: #444; }
        .dp-filter-btn--active { color: #d4a840; border-color: #d4a84066; background: #d4a84015; }

        .dp-filter-group { display: flex; gap: 4px; }

        .dp-hide {
          grid-row: 1 / -1;
          grid-column: 3;
          align-self: center;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #2a2a28;
          cursor: pointer;
          transition: color 0.15s;
          border: none;
          background: none;
          padding: 0;
          font-family: inherit;
          border-radius: 3px;
          margin-right: -2px;
        }
        .dp-hide:hover { color: #666; }
        .dp-hide--active { color: #ff6b6b; }

        .dp-option--hidden { opacity: 0.35; }

        .dp-actions {
          grid-row: 1 / -1;
          grid-column: 3;
          display: flex;
          align-items: center;
          gap: 2px;
          align-self: center;
        }
      `}</style>

      <link rel="stylesheet" href={fontUrl} />

      {/* ── Controls Panel ── */}
      <div className="dp-panel">
        <p className="dp-panel-title">Design System Picker</p>

        <div className="dp-section">
          <div className="dp-filter-row">
            <p className="dp-section-label" style={{ margin: 0 }}>
              Typography ({fontFavs.filter === "favs" ? fontPairings.filter((fp) => fontFavs.favs.has(fp.name)).length : fontFavs.filter === "hidden" ? fontPairings.filter((fp) => fontFavs.hidden.has(fp.name)).length : fontPairings.filter((fp) => !fontFavs.hidden.has(fp.name)).length})
            </p>
            <div className="dp-filter-group">
              <button className={`dp-filter-btn ${fontFavs.filter === "favs" ? "dp-filter-btn--active" : ""}`} onClick={() => fontFavs.setFilter(fontFavs.filter === "favs" ? "all" : "favs")}>
                Favs ({fontFavs.favs.size})
              </button>
              <button className={`dp-filter-btn ${fontFavs.filter === "hidden" ? "dp-filter-btn--active" : ""}`} onClick={() => fontFavs.setFilter(fontFavs.filter === "hidden" ? "all" : "hidden")}>
                Hidden ({fontFavs.hidden.size})
              </button>
            </div>
          </div>
          {fontPairings.map((fp, i) => {
            const isFav = fontFavs.favs.has(fp.name);
            const isHidden = fontFavs.hidden.has(fp.name);
            if (fontFavs.filter === "favs" && !isFav) return null;
            if (fontFavs.filter === "hidden" && !isHidden) return null;
            if (fontFavs.filter === "all" && isHidden) return null;
            return (
              <button
                key={fp.name}
                className={`dp-option ${i === font ? "dp-option--active" : ""} ${isHidden ? "dp-option--hidden" : ""}`}
                onClick={() => setFont(i)}
              >
                <span className="dp-option-radio" />
                <span className="dp-option-name">{fp.name}</span>
                <span className="dp-option-label">{fp.label}</span>
                <span className="dp-actions">
                  <span
                    className={`dp-star ${isFav ? "dp-star--active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); fontFavs.toggleFav(fp.name); }}
                  >
                    {isFav ? "\u2605" : "\u2606"}
                  </span>
                  <span
                    className={`dp-hide ${isHidden ? "dp-hide--active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); fontFavs.toggleHide(fp.name); }}
                    title={isHidden ? "Unhide" : "Hide"}
                  >
                    {isHidden ? "\u2715" : "\u2013"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="dp-section">
          <div className="dp-filter-row">
            <p className="dp-section-label" style={{ margin: 0 }}>
              Palette ({paletteFavs.filter === "favs" ? palettes.filter((pl) => paletteFavs.favs.has(pl.name)).length : paletteFavs.filter === "hidden" ? palettes.filter((pl) => paletteFavs.hidden.has(pl.name)).length : palettes.filter((pl) => !paletteFavs.hidden.has(pl.name)).length})
            </p>
            <div className="dp-filter-group">
              <button className={`dp-filter-btn ${paletteFavs.filter === "favs" ? "dp-filter-btn--active" : ""}`} onClick={() => paletteFavs.setFilter(paletteFavs.filter === "favs" ? "all" : "favs")}>
                Favs ({paletteFavs.favs.size})
              </button>
              <button className={`dp-filter-btn ${paletteFavs.filter === "hidden" ? "dp-filter-btn--active" : ""}`} onClick={() => paletteFavs.setFilter(paletteFavs.filter === "hidden" ? "all" : "hidden")}>
                Hidden ({paletteFavs.hidden.size})
              </button>
            </div>
          </div>
          {palettes.map((pl, i) => {
            const isFav = paletteFavs.favs.has(pl.name);
            const isHidden = paletteFavs.hidden.has(pl.name);
            if (paletteFavs.filter === "favs" && !isFav) return null;
            if (paletteFavs.filter === "hidden" && !isHidden) return null;
            if (paletteFavs.filter === "all" && isHidden) return null;
            return (
              <button
                key={pl.name}
                className={`dp-option dp-option--palette ${i === palette ? "dp-option--active" : ""} ${isHidden ? "dp-option--hidden" : ""}`}
                onClick={() => setPalette(i)}
              >
                <span className="dp-option-radio" />
                <span className="dp-swatch-row">
                  <span className="dp-swatch" style={{ background: pl.bg }} />
                  <span className="dp-swatch" style={{ background: pl.text }} />
                  <span className="dp-swatch" style={{ background: pl.accent }} />
                  <span className="dp-swatch" style={{ background: pl.cta }} />
                </span>
                <span className="dp-option-name">{pl.name}</span>
                <span className="dp-actions">
                  <span
                    className={`dp-star ${isFav ? "dp-star--active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); paletteFavs.toggleFav(pl.name); }}
                  >
                    {isFav ? "\u2605" : "\u2606"}
                  </span>
                  <span
                    className={`dp-hide ${isHidden ? "dp-hide--active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); paletteFavs.toggleHide(pl.name); }}
                    title={isHidden ? "Unhide" : "Hide"}
                  >
                    {isHidden ? "\u2715" : "\u2013"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="dp-section">
          <p className="dp-section-label">Hub Layout</p>
          {layoutOptions.map((lt, i) => (
            <button
              key={lt.value}
              className={`dp-option ${i === layout ? "dp-option--active" : ""}`}
              onClick={() => setLayout(i)}
            >
              <span className="dp-option-radio" />
              <span className="dp-option-name">{lt.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Preview ── */}
      <div className="dp-preview">
        <div className="dp-tabs">
          {pageTabs.map((tab, i) => (
            <button
              key={tab.value}
              className={`dp-tab ${i === page ? "dp-tab--active" : ""}`}
              onClick={() => setPage(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <p className="dp-preview-meta">
          {f.name} &middot; {p.name} {page === 0 ? `\u00B7 ${l.name}` : ""}
        </p>

        <div className="dp-canvas">
          {page === 0 && <HubPreview f={f} p={p} layout={l.value} />}
          {page === 1 && <CoachingPreview f={f} p={p} />}
          {page === 2 && <BlogPreview f={f} p={p} />}
        </div>
      </div>

      {/* ── Export Bar ── */}
      <div className="dp-export">
        <span className="dp-export-text">Current:</span>
        <span className="dp-export-value">{f.name}</span>
        <span className="dp-export-sep">|</span>
        <span className="dp-export-value">{p.name}</span>
        <span className="dp-export-sep">|</span>
        <span className="dp-export-value">{pageTabs[page].name}</span>
      </div>
    </div>
  );
}
