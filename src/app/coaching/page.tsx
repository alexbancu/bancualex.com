import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching | Alex Bancu",
  description:
    "I coach engineers, founders, and friends who feel stuck. Online, in English or Romanian. The first conversation is free.",
  alternates: {
    canonical: "/coaching",
  },
  openGraph: {
    url: "/coaching",
    title: "Coaching | Alex Bancu",
    description:
      "I coach engineers, founders, and friends who feel stuck. Online, in English or Romanian. The first conversation is free.",
    type: "website",
  },
};

const LINKEDIN = "https://www.linkedin.com/in/bancucristianalexandru/";
const SUBSTACK = "https://alexbancu.substack.com";
const SENJA = "https://senja.io/p/alex-bancu/DabD0td";
const EMAIL = "alex@bancualex.com";

// Quoted exactly as each client wrote it in the Senja form, cut only at
// sentence breaks. Never reword, splice or trim inside a sentence.
const testimonials = [
  {
    quote:
      "When we started, I was at a point in life where I was feeling stuck. My business was stagnating in the previous 6 months, and I just couldn’t find the energy or motivation to start working again. Talking to Alex made me aware of the main negative thinking patterns holding me back. He was also a great listener, and made me feel understood and encouraged.",
    name: "Timotei Centea",
    role: "Business Owner, Stelaria",
    date: "December 2024",
    terms: "Paid sessions",
  },
  {
    quote:
      "I talked about my struggle with procrastination and breaking down big tasks at work, which often left me stuck. Alex listened intently and provided practical strategies that made the issues feel manageable. His advice stayed with me beyond the session, acting as a mental pep talk during the workday. It helped me push through tasks and maintain productivity instead of postponing them.",
    name: "Sebastian Palaghita",
    role: "Salesforce Software Engineer",
    date: "December 2024",
    terms: "Free sessions",
  },
  {
    quote:
      "I sleep better, I think better and I feel better - Alex’s calm & focused guidance over a couple sessions helped bring to light more about my long standing struggle with sleep than I managed to eek out over years of (insufficient) introspection. His warm, balanced tone often echoes in my head when I’m faced with (what at least feels like) difficult decisions - and I feel very grateful for it.",
    name: "Codrin Gidei",
    role: "Chief Technology Officer, Block Scholes",
    date: "January 2025",
    terms: "Free sessions",
  },
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CoachingPage() {
  return (
    <div className="bento">
      <style>{`
        /* Same tokens as the homepage (src/app/page.tsx). Keep them in sync. */
        .bento {
          --bg: #eef0ee;
          --card: #ffffff;
          --tint: #f1f5f1;
          --text: #1e2e20;
          --sub: #4d5e4f;
          --mute: #5c6e5e;
          --accent: #1a5c2e;
          --accent-hover: #154a25;
          --shadow: 0 1px 2px rgba(30, 46, 32, 0.04), 0 4px 16px rgba(30, 46, 32, 0.05);
          --radius: 16px;
          --font-h: var(--font-lora), Georgia, serif;
          --font-b: var(--font-inter), -apple-system, sans-serif;

          /* Type scale: 12 / 15 / 18 / 34. Weights: 400 and 600. */
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

        .c-page {
          max-width: 680px;
          margin: 0 auto;
          padding: 40px 0 24px;
        }

        .c-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 32px;
          color: var(--mute);
          font-size: var(--fs-meta);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }

        .c-back svg { transform: rotate(180deg); }
        .c-back:hover { color: var(--accent); }

        /* ── Hero: who, and what this is. No sales line. ── */
        .c-hero {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-bottom: 40px;
        }

        .c-avatar {
          width: 104px;
          height: 104px;
          flex-shrink: 0;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 0 4px var(--card), var(--shadow);
        }

        .c-h1 {
          margin: 0;
          font-family: var(--font-h);
          font-size: var(--fs-name);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .c-lede {
          margin: 10px 0 0;
          font-size: var(--fs-title);
          line-height: 1.5;
          color: var(--sub);
        }

        /* ── Cards: white on grey, separated by shadow, no borders ── */
        .c-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .c-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0;
          padding: 24px;
          border-radius: var(--radius);
          background: var(--card);
          box-shadow: var(--shadow);
        }

        .c-label {
          margin: 0 0 12px;
          font-size: var(--fs-meta);
          font-weight: 600;
          color: var(--mute);
        }

        .c-quote {
          margin: 0;
          font-size: var(--fs-body);
          line-height: 1.7;
          color: var(--text);
        }

        .c-who {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .c-name {
          font-size: var(--fs-body);
          font-weight: 600;
        }

        .c-meta {
          font-size: var(--fs-meta);
          line-height: 1.5;
          color: var(--mute);
        }

        /* separator dot drawn as a shape; screen readers hear the hidden commas */
        .c-dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          margin: 0 7px;
          border-radius: 50%;
          background: var(--mute);
          vertical-align: middle;
        }

        .c-note {
          margin: 4px 4px 0;
          font-size: var(--fs-meta);
          line-height: 1.6;
          color: var(--mute);
        }

        .c-note a,
        .c-text a {
          color: var(--accent);
          font-weight: 600;
          text-decoration: none;
        }

        .c-note a:hover,
        .c-text a:hover { text-decoration: underline; }

        /* ── Facts: about, limits, how it works ── */
        .c-facts {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          margin-top: 40px;
        }

        @media (min-width: 640px) {
          .c-facts {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 20px;
          }

          .c-wide { grid-column: 1 / -1; }
        }

        .c-title {
          margin: 0;
          font-family: var(--font-h);
          font-size: var(--fs-title);
          font-weight: 600;
          line-height: 1.3;
        }

        .c-text {
          margin: 0;
          font-size: var(--fs-body);
          line-height: 1.6;
          color: var(--sub);
        }

        .c-btn {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          gap: 8px;
          height: 44px;
          margin-top: 4px;
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

        .c-btn:hover { background: var(--accent-hover); }

        /* ── Footer, same as the homepage ── */
        .c-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 40px 0 8px;
        }

        .c-socials {
          display: flex;
          gap: 8px;
        }

        .c-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--mute);
          transition: color 0.2s, background 0.2s;
        }

        .c-social:hover {
          color: var(--accent);
          background: var(--tint);
        }

        .c-copyright {
          margin: 0;
          font-size: var(--fs-meta);
          color: var(--mute);
        }

        /* ── Keyboard focus ── */
        .bento a:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* ── Mobile ── */
        @media (max-width: 639px) {
          .c-page { padding-top: 24px; }

          .c-hero {
            flex-direction: column;
            gap: 18px;
            padding-bottom: 32px;
            text-align: center;
          }

          .c-avatar {
            width: 96px;
            height: 96px;
          }

          .c-h1 { font-size: 1.75rem; }
        }

        /* ── Load sequence. Animates "translate", not "transform". ── */
        @media (prefers-reduced-motion: no-preference) {
          .c-hero,
          .c-stack > *,
          .c-facts > * {
            animation: brise 0.6s ease-out both;
          }

          .c-stack > :nth-child(2) { animation-delay: 0.06s; }
          .c-stack > :nth-child(3) { animation-delay: 0.12s; }
          .c-stack > :nth-child(4) { animation-delay: 0.18s; }
        }

        @keyframes brise {
          from { opacity: 0; translate: 0 10px; }
          to { opacity: 1; translate: 0 0; }
        }
      `}</style>

      <main className="c-page">
        <Link href="/" className="c-back">
          <Arrow />
          Alex Bancu
        </Link>

        <header className="c-hero">
          <Image
            src="/images/alex-2026.jpg"
            alt="Alex Bancu"
            width={104}
            height={104}
            className="c-avatar"
            priority
          />
          <div>
            <h1 className="c-h1">I coach people sometimes.</h1>
            <p className="c-lede">
              I&apos;ve coached engineers, founders, and friends who felt
              stuck. Usually it was work they kept putting off, a business
              that stopped moving, or a goal without a plan.
            </p>
          </div>
        </header>

        <section aria-labelledby="said-label">
          <h2 id="said-label" className="c-label">What they wrote</h2>
          <div className="c-stack">
            {testimonials.map((t) => (
              <figure key={t.name} className="c-card">
                <blockquote className="c-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="c-who">
                  <span className="c-name">{t.name}</span>
                  <span className="c-meta">{t.role}</span>
                  <span className="c-meta">
                    {t.date}
                    <span className="sr-only">,</span>
                    <span className="c-dot" aria-hidden="true" />
                    {t.terms}
                  </span>
                </figcaption>
              </figure>
            ))}
            <p className="c-note">
              Clients wrote these in their own words after our sessions. I
              shortened them only where a sentence ends.{" "}
              <a href={SENJA} target="_blank" rel="noopener noreferrer">
                All 12 testimonials are on Senja
              </a>
              , including two videos.
            </p>
          </div>
        </section>

        <div className="c-facts">
          <section className="c-card" aria-labelledby="about-title">
            <h2 id="about-title" className="c-title">About me</h2>
            <p className="c-text">
              Coaching is my side work. My day job is software engineering.
            </p>
            <p className="c-text">
              I trained with Bestcor in 2024 and hold a state-recognised
              coaching qualification in Romania. In 2025 I did Positive
              Intelligence&apos;s PQ Coach training. In 2026 I finished Joe
              Hudson&apos;s Connection Course.
            </p>
            <p className="c-text">
              I&apos;ve coached more than 20 people since 2024. Mostly I listen
              and ask questions.
            </p>
          </section>

          <section className="c-card" aria-labelledby="know-title">
            <h2 id="know-title" className="c-title">Good to know</h2>
            <p className="c-text">
              This is coaching, not therapy. If what you bring needs a
              therapist or a doctor, I&apos;ll tell you.
            </p>
            <p className="c-text">
              What you tell me stays between us, unless someone&apos;s safety
              is at risk.
            </p>
            <p className="c-text">
              If we&apos;re friends, we talk first about how coaching could
              affect that.
            </p>
          </section>

          <section className="c-card c-wide" aria-labelledby="how-title">
            <h2 id="how-title" className="c-title">How it works</h2>
            <p className="c-text">
              The first conversation is free. You don&apos;t need to prepare
              anything. You tell me what&apos;s going on, I ask questions, and
              at the end we decide together whether to continue.
            </p>
            <p className="c-text">
              Sessions are about 60 minutes, online, in English or Romanian.
              How often we meet depends on what you need. If we continue,
              it&apos;s paid, and we agree on the price and the number of
              sessions before we start.
            </p>
            <p className="c-text">
              To start, send me a few lines. What&apos;s going on, and what
              have you tried so far?
            </p>
            <a href={`mailto:${EMAIL}`} className="c-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              {EMAIL}
            </a>
          </section>
        </div>

        <footer className="c-footer">
          <div className="c-socials">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="c-social" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href={SUBSTACK} target="_blank" rel="noopener noreferrer" className="c-social" aria-label="Substack"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg></a>
          </div>
          <p className="c-copyright">&copy; {new Date().getFullYear()} Alex Bancu</p>
        </footer>
      </main>
    </div>
  );
}
