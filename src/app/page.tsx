import Image from "next/image";
import Link from "next/link";

export default function HubPage() {
  return (
    <div className="bento">
      <style>{`
        .bento {
          --bg: #eef0ee;
          --card: #f8faf8;
          --card-alt: #f2f5f2;
          --text: #1e2e20;
          --sub: #4d5e4f;
          --mute: #8a9a8c;
          --accent: #1a5c2e;
          --accent-soft: rgba(26, 92, 46, 0.07);
          --accent-border: rgba(26, 92, 46, 0.10);
          --accent-hover: rgba(26, 92, 46, 0.18);
          --radius: 16px;
          --font-h: var(--font-lora), Georgia, serif;
          --font-b: var(--font-inter), -apple-system, sans-serif;

          min-height: 100dvh;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-b);
          -webkit-font-smoothing: antialiased;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .bento { padding: 1.5rem; }
        }

        /* Grain */
        .bento::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .bento > * { position: relative; z-index: 1; }

        .bento-grid {
          max-width: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: auto;
          gap: 0.75rem;
        }

        @media (min-width: 640px) {
          .bento-grid { gap: 1rem; }
        }

        /* ── Shared card base ── */
        .b-card {
          background: var(--card);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius);
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          opacity: 0;
          animation: brise 0.6s ease-out forwards;
        }

        a.b-card:hover, .b-card-link:hover {
          border-color: var(--accent-hover);
          box-shadow: 0 6px 24px rgba(26, 92, 46, 0.06);
          transform: translateY(-2px);
        }

        /* Stagger */
        .b-card:nth-child(1) { animation-delay: 0.05s; }
        .b-card:nth-child(2) { animation-delay: 0.1s; }
        .b-card:nth-child(3) { animation-delay: 0.15s; }
        .b-card:nth-child(4) { animation-delay: 0.2s; }
        .b-card:nth-child(5) { animation-delay: 0.25s; }
        .b-card:nth-child(6) { animation-delay: 0.3s; }
        .b-card:nth-child(7) { animation-delay: 0.35s; }
        .b-card:nth-child(8) { animation-delay: 0.4s; }

        /* ── Spans ── */
        .b-full { grid-column: 1 / -1; }
        .b-2col { grid-column: span 2; }

        @media (max-width: 639px) {
          .bento-grid { grid-template-columns: 1fr 1fr; }
          .b-2col { grid-column: 1 / -1; }
          .b-full { grid-column: 1 / -1; }
          .b-mobile-full { grid-column: 1 / -1; }
        }

        /* ── 1. Identity card (full width) ── */
        .b-identity {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.75rem 2rem;
        }

        @media (max-width: 639px) {
          .b-identity {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
          }
        }

        .b-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-border);
          box-shadow: 0 0 0 3px var(--card), 0 2px 12px rgba(26, 92, 46, 0.06);
          flex-shrink: 0;
        }

        .b-id-text { flex: 1; }

        .b-name {
          font-family: var(--font-h);
          font-weight: 500;
          font-size: 1.65rem;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 0.35rem;
        }

        .b-bio {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--sub);
          margin: 0;
        }

        /* ── 2. Venture cards ── */
        .b-venture {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 160px;
          position: relative;
          overflow: hidden;
        }

        .b-venture-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-soft);
          border-radius: 8px;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .b-venture-title {
          font-family: var(--font-h);
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin: 0 0 0.4rem;
        }

        .b-venture-desc {
          font-size: 0.78rem;
          line-height: 1.5;
          color: var(--mute);
          margin: 0 0 1rem;
          flex: 1;
        }

        .b-venture-cta {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .b-venture-cta svg {
          transition: transform 0.2s;
        }

        a.b-card:hover .b-venture-cta svg {
          transform: translateX(3px);
        }

        /* ── 3. Latest post card ── */
        .b-post {
          display: flex;
          flex-direction: column;
        }

        .b-post-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--mute);
          margin-bottom: 0.75rem;
        }

        .b-post-title {
          font-family: var(--font-h);
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.35;
          color: var(--text);
          margin: 0 0 0.3rem;
        }

        .b-post-excerpt {
          font-size: 0.78rem;
          line-height: 1.5;
          color: var(--mute);
          margin: 0;
        }

        /* ── 4. Social card ── */
        .b-socials {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.9rem;
        }

        .b-socials-row {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .b-social {
          font-size: 0.78rem;
          color: var(--mute);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .b-social:hover {
          color: var(--accent);
        }

        /* ── 5. Quote / tagline card ── */
        .b-quote {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: var(--accent);
          border-color: var(--accent);
          color: #f0f5f1;
        }

        .b-quote-text {
          font-family: var(--font-h);
          font-weight: 400;
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0;
          opacity: 0.92;
        }

        /* ── Footer ── */
        .b-footer {
          text-align: center;
          padding: 2rem 0 1rem;
          font-size: 0.68rem;
          color: var(--mute);
          opacity: 0;
          animation: brise 0.6s ease-out 0.5s forwards;
        }

        /* ── Animations ── */
        @keyframes brise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .b-card, .b-footer {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>

      <div className="bento-grid">
        {/* 1 — Identity (full width) */}
        <div className="b-card b-identity b-full">
          <Image
            src="/images/alex-profile.jpg"
            alt="Alex Bancu"
            width={80}
            height={80}
            className="b-avatar"
            priority
          />
          <div className="b-id-text">
            <h1 className="b-name">Alex Bancu</h1>
            <p className="b-bio">
              Software engineer. Dad. Figuring things out in public.
            </p>
          </div>
        </div>

        {/* 2 — Coaching (2 col) */}
        <Link href="/coaching" className="b-card b-venture b-2col">
          <div>
            <div className="b-venture-icon">◆</div>
            <h2 className="b-venture-title">Coaching</h2>
            <p className="b-venture-desc">
              Clear the mental noise. Make decisions that actually stick.
            </p>
          </div>
          <span className="b-venture-cta">
            Learn more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </Link>

        {/* 3 — Quote (1 col) */}
        <div className="b-card b-quote">
          <p className="b-quote-text">
            Clarity over<br />complexity.
          </p>
        </div>

        {/* 4 — Writing (1 col) */}
        <a
          href="https://alexbancu.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="b-card b-venture b-mobile-full"
        >
          <div>
            <div className="b-venture-icon">✦</div>
            <h2 className="b-venture-title">Writing</h2>
            <p className="b-venture-desc">
              Learning, emotions, parenting, performance. Some practical. Some just me figuring it out.
            </p>
          </div>
          <span className="b-venture-cta">
            Read on Substack
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </a>

        {/* 5 — Latest post (2 col) */}
        <Link href="/blog/feeling-stuck-in-life-and-career" className="b-card b-post b-2col">
          <p className="b-post-label">Latest post</p>
          <h2 className="b-post-title">
            Feeling Stuck in Life and Career? Here&apos;s What&apos;s Actually Going On
          </h2>
          <p className="b-post-excerpt">
            You&apos;re not lazy. Something real is happening underneath.
          </p>
        </Link>

        {/* 6 — Blog (1 col) */}
        <Link href="/blog" className="b-card b-venture b-mobile-full">
          <div>
            <div className="b-venture-icon">◈</div>
            <h2 className="b-venture-title">Blog</h2>
            <p className="b-venture-desc">
              Longer pieces. Me figuring things out in public.
            </p>
          </div>
          <span className="b-venture-cta">
            All posts
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </Link>

        {/* 7 — Software (1 col) */}
        <a
          href="https://www.linkedin.com/in/bancucristianalexandru/"
          target="_blank"
          rel="noopener noreferrer"
          className="b-card b-venture b-mobile-full"
        >
          <div>
            <div className="b-venture-icon">◇</div>
            <h2 className="b-venture-title">Software</h2>
            <p className="b-venture-desc">
              9+ years shipping React &amp; TypeScript at scale.
            </p>
          </div>
          <span className="b-venture-cta">
            LinkedIn
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </a>

        {/* 8 — Socials (1 col) */}
        <div className="b-card b-socials b-mobile-full">
          <div className="b-socials-row">
            <a href="https://x.com/AlxBancu" target="_blank" rel="noopener noreferrer" className="b-social">X</a>
            <a href="https://www.linkedin.com/in/bancucristianalexandru/" target="_blank" rel="noopener noreferrer" className="b-social">LinkedIn</a>
            <a href="https://instagram.com/bancualex" target="_blank" rel="noopener noreferrer" className="b-social">Instagram</a>
            <a href="https://alexbancu.substack.com" target="_blank" rel="noopener noreferrer" className="b-social">Substack</a>
          </div>
        </div>
      </div>

      <div className="b-footer">
        &copy; {new Date().getFullYear()} Alex Bancu
      </div>
    </div>
  );
}
