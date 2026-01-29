import Image from "next/image";
import Link from "next/link";

const ventures = [
  {
    label: "Coaching",
    title: "Mind Design Studio",
    description:
      "Coaching for people who think too much and feel stuck. No fluff.",
    href: "/coaching",
    cta: "Learn more",
    accent: "#1a5c2e",
  },
  {
    label: "Writing",
    title: "Bancu Writes",
    description:
      "A weekly newsletter on energy, decision-making, and ending overthinking. Real solutions from lived experience.",
    href: "https://alexbancu.substack.com",
    cta: "Read on Substack",
    accent: "#2a7a3e",
    external: true,
  },
  {
    label: "Building",
    title: "Software & Side Projects",
    description:
      "8+ years as a software engineer. Building tools and experiments where tech meets personal growth.",
    href: "#",
    cta: "Coming soon",
    accent: "#8a9a8c",
    disabled: true,
  },
];

const socialLinks = [
  { label: "X / Twitter", href: "https://x.com/AlxBancu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bancualex" },
  { label: "Instagram", href: "https://instagram.com/bancualex" },
  { label: "Substack", href: "https://alexbancu.substack.com" },
  { label: "Blog", href: "/blog" },
];

export default function HubPage() {
  return (
    <div className="hub">
      <style>{`
        .hub {
          --bg: #eef0ee;
          --bg-hero: #e4e8e4;
          --bg-card: #f8faf8;
          --text-primary: #1e2e20;
          --text-secondary: #4d5e4f;
          --text-muted: #8a9a8c;
          --accent: #1a5c2e;
          --accent-light: #2a7a3e;
          --cta: #1a5c2e;
          --cta-hover: #154a25;
          --border: rgba(26, 92, 46, 0.1);
          --border-hover: rgba(26, 92, 46, 0.25);
          --font-display: var(--font-lora), Georgia, serif;
          --font-body: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;

          min-height: 100vh;
          background: var(--bg);
          color: var(--text-primary);
          font-family: var(--font-body);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* Subtle paper grain */
        .hub::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.018'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .hub > * {
          position: relative;
          z-index: 2;
        }

        /* ── Hero ── */
        .hub-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          background:
            radial-gradient(ellipse 60% 40% at 50% 45%, rgba(52, 120, 140, 0.04) 0%, transparent 70%),
            var(--bg-hero);
        }

        .hub-avatar {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(52, 120, 140, 0.15);
          box-shadow: 0 4px 24px rgba(52, 120, 140, 0.08);
          margin-bottom: 2.2rem;
          opacity: 0;
          animation: hubFadeUp 0.8s ease-out 0.1s forwards;
        }

        .hub-name {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--accent);
          margin: 0 0 1.2rem;
          opacity: 0;
          animation: hubFadeUp 0.8s ease-out 0.25s forwards;
        }

        .hub-tagline {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.8vw, 1.12rem);
          font-weight: 400;
          line-height: 1.75;
          color: var(--text-secondary);
          max-width: 460px;
          margin: 0 0 1.2rem;
          opacity: 0;
          animation: hubFadeUp 0.8s ease-out 0.4s forwards;
        }

        .hub-role {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin: 0;
          opacity: 0;
          animation: hubFadeUp 0.8s ease-out 0.55s forwards;
        }

        .hub-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: hubFadeUp 0.8s ease-out 1s forwards;
        }

        .hub-scroll-hint span {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .hub-scroll-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, var(--accent-light), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.25; transform: scaleY(0.7); }
          50% { opacity: 0.65; transform: scaleY(1); }
        }

        /* ── Ventures ── */
        .hub-ventures {
          padding: 5rem 1.5rem 6rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .hub-section-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent-light);
          text-align: center;
          margin-bottom: 1rem;
        }

        .hub-section-heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 3.5rem;
        }

        .hub-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .hub-cards {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .hub-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
        }

        .hub-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--card-accent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .hub-card:not(.hub-card--disabled):hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(52, 120, 140, 0.08);
        }

        .hub-card:not(.hub-card--disabled):hover::before {
          opacity: 1;
        }

        .hub-card--disabled {
          opacity: 0.45;
          cursor: default;
        }

        .hub-card-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 0.9rem;
        }

        .hub-card-title {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: 1.35rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          margin: 0 0 0.75rem;
        }

        .hub-card-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 1.5rem;
          flex: 1;
        }

        .hub-card-cta {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--card-accent);
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hub-card-cta svg {
          transition: transform 0.2s;
        }

        .hub-card:not(.hub-card--disabled):hover .hub-card-cta svg {
          transform: translateX(3px);
        }

        /* ── Latest post ── */
        .hub-latest {
          padding: 5rem 1.5rem 5rem;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        .hub-latest-link {
          display: block;
          text-decoration: none;
          color: inherit;
          padding: 2rem 1.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          text-align: left;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }

        .hub-latest-link:hover {
          border-color: var(--border-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(52, 120, 140, 0.06);
        }

        .hub-latest-date {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .hub-latest-title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.3;
          color: var(--text-primary);
          margin: 0 0 0.5rem;
        }

        .hub-latest-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .hub-latest-more {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.5rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s;
        }

        .hub-latest-more:hover {
          color: var(--accent-light);
        }

        /* ── Divider ── */
        .hub-divider {
          width: 40px;
          height: 1px;
          background: var(--accent);
          opacity: 0.18;
          margin: 0 auto;
        }

        /* ── Footer ── */
        .hub-footer {
          padding: 4rem 1.5rem 3rem;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .hub-social {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hub-social-link {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .hub-social-link:hover {
          color: var(--accent);
        }

        .hub-copy {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* ── Animations ── */
        @keyframes hubFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hub-avatar, .hub-name, .hub-tagline, .hub-role, .hub-scroll-hint {
            opacity: 1;
            animation: none;
          }
          .hub-scroll-line { animation: none; opacity: 0.5; }
        }
      `}</style>

      {/* Hero */}
      <section className="hub-hero">
        <Image
          src="/images/alex-profile.jpg"
          alt="Alex Bancu"
          width={100}
          height={100}
          className="hub-avatar"
          priority
        />

        <h1 className="hub-name">Alex Bancu</h1>

        <p className="hub-tagline">
          Software engineer. Dad. Figuring things out in public.
        </p>


        <div className="hub-scroll-hint">
          <span>Explore</span>
          <div className="hub-scroll-line" />
        </div>
      </section>

      {/* Ventures */}
      <section className="hub-ventures">
        <h2 className="hub-section-heading">
          Things I&apos;m working on
        </h2>

        <div className="hub-cards">
          {ventures.map((v) => {
            if (v.disabled) {
              return (
                <div
                  key={v.title}
                  className="hub-card hub-card--disabled"
                  style={{ "--card-accent": v.accent } as React.CSSProperties}
                >
                  <span className="hub-card-label">{v.label}</span>
                  <h3 className="hub-card-title">{v.title}</h3>
                  <p className="hub-card-desc">{v.description}</p>
                  <span className="hub-card-cta">{v.cta}</span>
                </div>
              );
            }

            const isExternal = v.external;
            const Tag = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? { href: v.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: v.href };

            return (
              <Tag
                key={v.title}
                {...linkProps}
                className={`hub-card ${v.disabled ? "hub-card--disabled" : ""}`}
                style={{ "--card-accent": v.accent } as React.CSSProperties}
              >
                <span className="hub-card-label">{v.label}</span>
                <h3 className="hub-card-title">{v.title}</h3>
                <p className="hub-card-desc">{v.description}</p>
                <span className="hub-card-cta">
                  {v.cta}
                  {!v.disabled && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </Tag>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="hub-divider" />

      {/* Latest post */}
      <section className="hub-latest">
        <p className="hub-section-label">Latest from the blog</p>
        <Link
          href="/blog/feeling-stuck-in-life-and-career"
          className="hub-latest-link"
        >
          <p className="hub-latest-date">January 2026</p>
          <h2 className="hub-latest-title">
            Feeling Stuck in Life and Career? Here&apos;s What&apos;s Actually Going On
          </h2>
          <p className="hub-latest-desc">
            You&apos;re not lazy. Something real is happening underneath the
            stuckness, and thinking harder won&apos;t fix it.
          </p>
        </Link>
        <Link href="/blog" className="hub-latest-more">
          All posts
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {/* Divider */}
      <div className="hub-divider" />

      {/* Footer */}
      <footer className="hub-footer">
        <div className="hub-social">
          {socialLinks.map((link) => {
            const isInternal = link.href.startsWith("/");
            if (isInternal) {
              return (
                <Link key={link.label} href={link.href} className="hub-social-link">
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-link"
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <p className="hub-copy">
          &copy; {new Date().getFullYear()} Alex Bancu
        </p>
      </footer>
    </div>
  );
}
