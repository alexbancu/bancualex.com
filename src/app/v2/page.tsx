import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Recursive } from "next/font/google";
import { getLatestSubstackPost } from "@/lib/substack";
import SubstackSubscribe from "@/components/SubstackSubscribe";
import CountUp from "@/components/CountUp";
import SpectrumRoot from "./SpectrumRoot";
import { colorAt, doorAt, inkAt, nearness, trackGradient, variationAt } from "./spectrum";
import "./v2.css";

// One variable family with two temperaments: Mono Linear for code, Sans Casual for people.
const recursive = Recursive({
  subsets: ["latin"],
  variable: "--font-recursive",
  axes: ["CASL", "CRSV", "MONO", "slnt"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Bancu (V2 preview)",
  robots: { index: false, follow: false },
};

const LINKEDIN = "https://www.linkedin.com/in/bancucristianalexandru/";
const SUBSTACK = "https://alexbancu.substack.com";

// Door positions on the code -> people dial, left to right.
const P = { software: doorAt(0), coaching: doorAt(1), writing: doorAt(2) };

function door(p: number) {
  return {
    "--hue": colorAt(p),
    "--hue-ink": inkAt(p),
    "--near": nearness(0, p),
  } as CSSProperties;
}

const title = (p: number): CSSProperties => ({ fontVariationSettings: variationAt(p) });

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function HomeV2() {
  const post = await getLatestSubstackPost();

  return (
    <SpectrumRoot className={recursive.variable}>
      <div className="v2-wrap">
        <header className="v2-top">
          <Link href="/">bancualex.com</Link>
          <nav aria-label="Alex elsewhere">
            <a href={SUBSTACK} target="_blank" rel="noopener noreferrer">Substack</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/AlxBancu" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://instagram.com/bancualex" target="_blank" rel="noopener noreferrer">Instagram</a>
          </nav>
        </header>

        <section data-hero className="v2-hero-zone">
          <div className="v2-hero">
            <div className="v2-portrait">
              <Image
                src="/images/eu.jpg"
                alt="Alex Bancu"
                fill
                priority
                sizes="(min-width: 960px) 560px, 80vw"
              />
            </div>
            <div className="v2-hero-text">
              <h1 className="v2-name">
                <span>Alex</span>
                <span>Bancu</span>
              </h1>
              <p className="v2-bio">
                Software engineer. Dad. Building AI tools. <em>Figuring things out in public.</em>
              </p>
            </div>
          </div>

          <div className="v2-dial">
            <div className="v2-dial-ends" aria-hidden="true">
              <span className="v2-end-code" style={{ color: inkAt(0) }}>code</span>
              <span className="v2-end-people" style={{ color: inkAt(1) }}>people</span>
            </div>
            <div className="v2-track" data-track>
              <div className="v2-fill" style={{ background: trackGradient() }} />
              <div className="v2-thumb" aria-hidden="true" />
              <input
                className="v2-range"
                data-range
                type="range"
                min={0}
                max={1000}
                step={1}
                defaultValue={0}
                aria-label="Slide between code and people"
              />
            </div>
          </div>
        </section>

        <div className="v2-doors">
          <div className="v2-cell">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-door"
              data-p={P.software}
              data-name="Software"
              style={door(P.software)}
            >
              <h2 style={title(P.software)}>Software</h2>
              <p>
                <CountUp end={10} suffix="+" /> years building software, mostly React and
                TypeScript, plus Node. I ship production-grade code with strong observability,
                and I work with AI coding agents. Independent contractor, remote since 2020.
              </p>
              <p className="v2-stack">React · TypeScript · Next.js · Node.js · Datadog</p>
              <span className="v2-cta">See my LinkedIn <Arrow /></span>
            </a>
          </div>

          <div className="v2-cell">
            <Link
              href="/coaching"
              className="v2-door"
              data-p={P.coaching}
              data-name="Coaching"
              style={door(P.coaching)}
            >
              <h2 style={title(P.coaching)}>Coaching</h2>
              <p>I sometimes coach people. Here&apos;s what they said.</p>
              <span className="v2-cta">Read what they said <Arrow /></span>
            </Link>
          </div>

          <div className="v2-cell">
            <div
              className="v2-door v2-door-writing"
              data-p={P.writing}
              data-name="Writing"
              style={door(P.writing)}
            >
              <h2 style={title(P.writing)}>Writing</h2>
              <p>
                Learning, emotions, parenting, performance. Some practical. Some just me
                figuring it out.
              </p>
              <a className="v2-cta" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
                Read on Substack <Arrow />
              </a>
              {post && (
                <a className="v2-latest" href={post.link} target="_blank" rel="noopener noreferrer">
                  <small>Latest</small>
                  <strong>{post.title}</strong>
                  {post.subtitle && <span>{post.subtitle}</span>}
                </a>
              )}
              <div className="v2-subscribe">
                <SubstackSubscribe />
              </div>
            </div>
          </div>
        </div>

        <footer className="v2-foot">
          <span>&copy; {new Date().getFullYear()} Alex Bancu</span>
        </footer>
      </div>
    </SpectrumRoot>
  );
}
