import Image from "next/image";
import Link from "next/link";
import { getLatestSubstackPost } from "@/lib/substack";
import SubstackSubscribe from "@/components/SubstackSubscribe";
import CountUp from "@/components/CountUp";

const LINKEDIN = "https://www.linkedin.com/in/bancucristianalexandru/";
const SUBSTACK = "https://alexbancu.substack.com";
const EMAIL = "alex@bancualex.com";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function HubPage() {
  const substackPost = await getLatestSubstackPost();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Bancu",
    url: "https://bancualex.com",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior software engineer. 10+ years building software, mostly React and TypeScript, plus Node. I work with AI coding agents and write on Substack.",
    sameAs: [LINKEDIN, SUBSTACK],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
    <div className="bento">
      <style>{`
        .bento {
          --bg: #eef0ee;
          --card: #ffffff;
          --tint: #f1f5f1;
          --text: #1e2e20;
          --sub: #4d5e4f;
          --mute: #5c6e5e;
          --accent: #1a5c2e;
          --accent-hover: #154a25;
          --field-border: #d6dfd7;
          --shadow: 0 1px 2px rgba(30, 46, 32, 0.04), 0 4px 16px rgba(30, 46, 32, 0.05);
          --shadow-hover: 0 2px 4px rgba(30, 46, 32, 0.05), 0 12px 32px rgba(30, 46, 32, 0.09);
          --radius: 16px;
          --font-h: var(--font-lora), Georgia, serif;
          --font-b: var(--font-inter), -apple-system, sans-serif;

          /* Type scale: 12 / 15 / 18 / 34. Weights: 400 and 600.
             The email input alone uses 16px, so iOS Safari doesn't zoom on tap. */
          --fs-meta: 0.75rem;
          --fs-body: 0.9375rem;
          --fs-title: 1.125rem;
          --fs-name: 2.125rem;

          min-height: 100dvh;
          padding: 0 16px;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-b);
          -webkit-font-smoothing: antialiased;
        }

        .b-page {
          max-width: 760px;
          margin: 0 auto;
          padding: 56px 0 24px;
        }

        /* ── Hero: name, role, one primary action. No box around it. ── */
        .b-hero {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-bottom: 40px;
        }

        .b-avatar {
          width: 104px;
          height: 104px;
          flex-shrink: 0;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 0 4px var(--card), var(--shadow);
        }

        .b-name {
          margin: 0;
          font-family: var(--font-h);
          font-size: var(--fs-name);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .b-role {
          margin: 8px 0 18px;
          font-size: var(--fs-title);
          line-height: 1.45;
          color: var(--sub);
        }

        .b-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 44px;
          padding: 0 20px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          font-size: var(--fs-body);
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 1px 2px rgba(26, 92, 46, 0.2), 0 6px 16px -6px rgba(26, 92, 46, 0.45);
          transition: background 0.2s;
        }

        .b-btn-primary:hover { background: var(--accent-hover); }

        /* ── Cards: white on grey, separated by shadow, no borders ── */
        .b-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
        }

        @media (min-width: 640px) {
          .b-grid {
            grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
            gap: 20px;
          }
        }

        .b-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px;
          border-radius: var(--radius);
          background: var(--card);
          box-shadow: var(--shadow);
          color: inherit;
          text-decoration: none;
          transition: box-shadow 0.25s, transform 0.25s;
        }

        a.b-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .b-title {
          margin: 0;
          font-family: var(--font-h);
          font-size: var(--fs-title);
          font-weight: 600;
          line-height: 1.3;
        }

        .b-text {
          margin: 0;
          font-size: var(--fs-body);
          line-height: 1.6;
          color: var(--sub);
        }

        .b-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .b-tags li {
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--tint);
          color: var(--sub);
          font-size: var(--fs-meta);
          font-weight: 600;
        }

        .b-worked {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .b-worked .b-text { color: var(--text); }

        /* each client name stays whole when the line wraps */
        .b-nw { white-space: nowrap; }

        /* Separator dot drawn as a shape: screen readers hear the hidden commas */
        .b-dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          margin: 0 8px;
          border-radius: 50%;
          background: var(--mute);
          vertical-align: middle;
        }

        .b-cta {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          color: var(--accent);
          font-size: var(--fs-body);
          font-weight: 600;
          text-decoration: none;
        }

        .b-cta svg { transition: transform 0.2s; }
        a.b-card:hover .b-cta svg,
        a.b-cta:hover svg { transform: translateX(3px); }

        /* ── Writing: the latest post leads, subscribe is secondary ── */
        .b-post {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 16px;
          border-radius: 12px;
          background: var(--tint);
          color: inherit;
          text-decoration: none;
          transition: background 0.2s;
        }

        .b-post:hover { background: #e7eee7; }

        .b-meta {
          font-size: var(--fs-meta);
          color: var(--mute);
        }

        .b-post-title {
          font-family: var(--font-h);
          font-size: var(--fs-body);
          font-weight: 600;
          line-height: 1.35;
          color: var(--text);
        }

        .b-post-sub {
          font-size: var(--fs-meta);
          line-height: 1.5;
          color: var(--sub);
        }

        .b-subscribe {
          margin-top: auto;
          padding-top: 4px;
        }

        /* Restyle the shared SubstackSubscribe component (it ships Tailwind classes).
           Wraps when the card is narrow: the button drops below and fills the row. */
        .b-subscribe form {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: none;
          margin: 0;
        }

        .b-subscribe input[type="email"] {
          all: unset;
          box-sizing: border-box;
          flex: 999 1 150px;
          min-width: 0;
          height: 44px;
          padding: 0 16px;
          border: 1px solid var(--field-border);
          border-radius: 999px;
          background: var(--card);
          color: var(--text);
          font-family: var(--font-b);
          font-size: 16px;
          transition: border-color 0.2s;
        }

        .b-subscribe input[type="email"]::placeholder { color: var(--mute); }
        .b-subscribe input[type="email"]:focus { border-color: var(--accent); }

        .b-subscribe button[type="submit"] {
          all: unset;
          box-sizing: border-box;
          flex: 1 0 auto;
          height: 44px;
          padding: 0 18px;
          border: 1.5px solid var(--accent);
          border-radius: 999px;
          color: var(--accent);
          font-family: var(--font-b);
          font-size: var(--fs-body);
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .b-subscribe button[type="submit"]:hover { background: var(--tint); }

        .b-subscribe input:disabled,
        .b-subscribe button:disabled { opacity: 0.5; }

        .b-subscribe > div,
        .b-subscribe p {
          margin: 0;
          font-size: var(--fs-body);
          text-align: left;
        }

        /* ── Coaching: one slim row under the two cards ── */
        .b-coaching { grid-column: 1 / -1; }

        @media (min-width: 640px) {
          .b-coaching {
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }

          .b-coaching .b-text { flex: 1; }

          .b-coaching .b-cta {
            margin-top: 0;
            white-space: nowrap;
          }
        }

        /* ── Footer ── */
        .b-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 40px 0 8px;
        }

        .b-socials {
          display: flex;
          gap: 8px;
        }

        /* 40px boxes so each icon is an easy tap target */
        .b-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--mute);
          transition: color 0.2s, background 0.2s;
        }

        .b-social:hover {
          color: var(--accent);
          background: var(--tint);
        }

        .b-copyright {
          margin: 0;
          font-size: var(--fs-meta);
          color: var(--mute);
        }

        /* ── Keyboard focus ── */
        .bento a:focus-visible,
        .bento button:focus-visible,
        .bento input:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        .bento a.b-card:focus-visible { outline-offset: 4px; }

        /* ── Mobile ── */
        @media (max-width: 639px) {
          .b-page { padding-top: 32px; }

          .b-hero {
            flex-direction: column;
            gap: 18px;
            padding-bottom: 32px;
            text-align: center;
          }

          .b-avatar {
            width: 96px;
            height: 96px;
          }
        }

        /* ── Load sequence. Animates "translate", not "transform",
           so it never blocks the cards' hover lift. ── */
        @media (prefers-reduced-motion: no-preference) {
          .b-hero,
          .b-grid > *,
          .b-footer {
            animation: brise 0.6s ease-out both;
          }

          .b-grid > :nth-child(1) { animation-delay: 0.08s; }
          .b-grid > :nth-child(2) { animation-delay: 0.14s; }
          .b-grid > :nth-child(3) { animation-delay: 0.2s; }
          .b-footer { animation-delay: 0.3s; }
        }

        @keyframes brise {
          from { opacity: 0; translate: 0 10px; }
          to { opacity: 1; translate: 0 0; }
        }
      `}</style>

      <main className="b-page">
        <header className="b-hero">
          <Image
            src="/images/alex-2026.jpg"
            alt="Alex Bancu"
            width={104}
            height={104}
            className="b-avatar"
            priority
          />
          <div>
            <h1 className="b-name">Alex Bancu</h1>
            <p className="b-role">
              Senior software engineer in Cluj, Romania. React, TypeScript, Node. Dad.
            </p>
            <a href={`mailto:${EMAIL}`} className="b-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              {EMAIL}
            </a>
          </div>
        </header>

        <div className="b-grid">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="b-card">
            <h2 className="b-title">Software</h2>
            <p className="b-text">
              <CountUp end={10} suffix="+" /> years building software, mostly React and TypeScript, plus Node. I ship production-grade code with strong observability, and I work with AI coding agents. Independent contractor, remote since 2020.
            </p>
            <ul className="b-tags" aria-label="Main stack">
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Datadog</li>
            </ul>
            <div className="b-worked">
              <span className="b-meta">Worked with</span>
              <p className="b-text">
                <span className="b-nw">PwC</span><span className="sr-only">,</span>
                <span className="b-dot" aria-hidden="true" /><span className="b-nw">European Patent Office</span><span className="sr-only">,</span>
                <span className="b-dot" aria-hidden="true" /><span className="b-nw">Grubhub</span>
              </p>
            </div>
            <span className="b-cta">View LinkedIn profile <Arrow /></span>
          </a>

          <section className="b-card" aria-labelledby="writing-title">
            <h2 id="writing-title" className="b-title">Writing</h2>
            <p className="b-text">
              Learning, emotions, parenting, performance. Some practical. Some just me figuring it out.
            </p>
            {substackPost && (
              <a href={substackPost.link} target="_blank" rel="noopener noreferrer" className="b-post">
                <span className="b-meta">Latest post</span>
                <span className="b-post-title">{substackPost.title}</span>
                {substackPost.subtitle && (
                  <span className="b-post-sub">{substackPost.subtitle}</span>
                )}
              </a>
            )}
            <a href={SUBSTACK} target="_blank" rel="noopener noreferrer" className="b-cta">
              Read on Substack <Arrow />
            </a>
            <div className="b-subscribe">
              <SubstackSubscribe />
            </div>
          </section>

          <Link href="/coaching" className="b-card b-coaching">
            <h2 className="b-title">Coaching</h2>
            <p className="b-text">I sometimes coach people. Here&apos;s what they said.</p>
            <span className="b-cta">Read what they said <Arrow /></span>
          </Link>
        </div>

        <footer className="b-footer">
          <div className="b-socials">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="b-social" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href={SUBSTACK} target="_blank" rel="noopener noreferrer" className="b-social" aria-label="Substack"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg></a>
          </div>
          <p className="b-copyright">&copy; {new Date().getFullYear()} Alex Bancu</p>
        </footer>
      </main>
    </div>
    </>
  );
}
