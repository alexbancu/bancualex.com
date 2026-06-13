import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import AuditDemo from "./AuditDemo";

const CALENDLY_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title: "Free 15-Minute AI Audit | Alex Bancu",
  description:
    "In 15 minutes I'll find the one task quietly eating your team's week — and what it's costing you. Free AI audit, live on a call. No pitch, no slides.",
  alternates: {
    canonical: "/ai-audit",
  },
  openGraph: {
    url: "/ai-audit",
    title: "I'll find the one task quietly eating your team's week.",
    description:
      "A free 15-minute AI audit. You leave knowing exactly what to automate first — and roughly what it costs you not to. Run by an engineer who ships AI for a living.",
    type: "website",
  },
};

const walkaway = [
  {
    title: "The one insight",
    body: "I name the single highest-value thing to automate in your business — the one with the best hours-saved-to-effort ratio — and what it's roughly costing you to leave it manual.",
  },
  {
    title: "A real number",
    body: "Not “AI can transform your workflow.” An actual estimate: this task, this many hours a month, this much cost. You can act on that number with me or without me.",
  },
  {
    title: "An honest verdict",
    body: "If AI isn't worth it for you right now, I'll say so. I'd rather hand you one true thing than sell you a project you don't need.",
  },
];

const symptoms = [
  "You're hiring to do work that's mostly copy-paste",
  "The same data lives in three tools and someone keeps them in sync by hand",
  "Proposals, invoices, or reports get rebuilt from scratch every time",
  "Follow-ups slip because nobody has time to chase them",
  "You know “AI could probably do this” but have no idea where to start",
  "You tried ChatGPT once, it was neat, nothing actually changed",
];

const steps = [
  {
    n: "1",
    title: "You book a slot",
    body: "Pick a time. Before the call I look at your site and whatever you tell me about how you work, so I show up with a hypothesis, not a blank page.",
  },
  {
    n: "2",
    title: "We get on a quick call",
    body: "15 minutes, screen-share. You walk me through one painful process. I ask sharp questions and find the bottleneck. I'll have an AI notetaker running so I can send you a clean recap — I always ask first.",
  },
  {
    n: "3",
    title: "You leave with the insight",
    body: "Before we hang up, you know the one thing worth automating and what it's costing you. That's the whole deal. Want me to go deeper? There's a paid audit — but the free one stands on its own.",
  },
];

const work = [
  {
    title: "Invoice automation",
    body: "Jira tickets become a calculated timesheet, a formatted invoice, and a drafted email — triggered by a webhook. I rebuilt it in n8n so the owner could edit it themselves.",
  },
  {
    title: "A personal AI assistant",
    body: "A Telegram bot on a $5/month server. Morning plans, evening journals, voice nudges, event digests — 18 automations, all from one machine.",
  },
  {
    title: "A daily planning engine",
    body: "One command pulls Oura, Strava, Jira, GitHub, and my calendar into a single planned day. Five APIs, one clean summary.",
  },
  {
    title: "The boring plumbing",
    body: "Auto-refreshing tokens, real data flowing across Oura, Strava, Gmail, Jira, and Calendar. The unglamorous wiring that makes automations actually hold up.",
  },
];

const faqs = [
  {
    q: "Is this actually free, or a 15-minute sales pitch?",
    a: "Actually free. The whole point is to hand you one useful thing with no strings. If there's a fit for paid work, I'll mention it once and move on. If there isn't, I'll tell you that instead.",
  },
  {
    q: "We were going to just build this in-house or use ChatGPT.",
    a: "Sometimes that's the right call and I'll say so. But the hard part is usually knowing which workflow is worth it and how the pieces connect — that's the part I'm fast at. You might leave the free call and do it yourself. Genuinely fine by me.",
  },
  {
    q: "AI feels expensive and risky for a business our size.",
    a: "That's exactly why the first audit is free and the deep one is a flat $1,500, not a percentage of some scary build. Half the time the fix is a $20/month tool, not a big project. The audit tells you which it is before you spend anything.",
  },
  {
    q: "How are you different from an AI agency?",
    a: "I'm one engineer who ships this stuff constantly, not a sales team reselling the same template. You talk to the person who'd actually build it. And I'm not incentivized to upsell you — the audit is priced to stand on its own.",
  },
  {
    q: "What if 15 minutes isn't enough?",
    a: "For one insight, it's plenty — I do the homework before we talk. If your operation is genuinely complex, that's exactly what the paid Extensive Audit is for.",
  },
  {
    q: "Do you record the call?",
    a: "Only with your okay. I run an AI notetaker so I can send you a clean recap instead of half-remembered notes. Say the word and it's off.",
  },
];

function ChevronDown() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0 faq-chevron"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CTAButton({
  label = "Book my free 15-min audit",
}: {
  label?: string;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-3.5 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto sm:min-w-[15rem]"
    >
      {label}
    </a>
  );
}

function Check() {
  return (
    <span className="text-brand shrink-0 mt-1">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function AiAuditPage() {
  return (
    <main className="min-h-screen">
      {/* HERO — split: copy left, live demo right */}
      <section className="max-w-6xl mx-auto px-6 pt-10 md:pt-14 pb-14 md:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-10"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-14 items-start">
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-5">
              Free AI audit · for English-speaking businesses
            </p>

            <h1 className="heading-tight text-[2rem] sm:text-4xl md:text-[2.75rem] text-foreground mb-5 leading-[1.1]">
              In 15 minutes, I&apos;ll find the one task{" "}
              <span className="text-brand">quietly eating your team&apos;s week.</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-xl">
              I&apos;m a software engineer who builds AI automations for a living.
              Give me 15 minutes and I&apos;ll show you one thing in your business
              worth automating — and roughly what it&apos;s costing you to leave it
              manual. No pitch. No slides. No &ldquo;let&apos;s circle back.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <CTAButton />
              <a
                href="#demo"
                className="inline-flex items-center justify-center font-medium text-base text-foreground hover:text-brand transition-colors px-2 py-3.5"
              >
                Or try a mini-audit live ↓
              </a>
            </div>

            {/* Trust strip — honest, self-verifiable */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 pb-6 border-b border-gray-200 text-xs text-muted">
              <span>9 years building software · US tech companies</span>
              <span>Ships production AI automations</span>
              <span>Works in Claude, n8n &amp; webhooks daily</span>
            </div>

            {/* Light scarcity */}
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span>
                <strong className="text-foreground">A few slots a week</strong>{" "}
                <span className="text-muted">— I run these myself, so I keep it small.</span>
              </span>
            </div>
          </div>

          {/* RIGHT — live demo */}
          <div id="demo" className="lg:sticky lg:top-8">
            <AuditDemo />
            <p className="text-xs text-muted text-center mt-3">
              Live, powered by Claude. A 30-second taste — type your business and
              your most repetitive task.
              <br />
              The real 15-minute audit looks at your actual workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        {/* The problem */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
            You already know which tasks steal your week. You just haven&apos;t put
            a number on them.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            Someone on your team copies data between two systems every morning.
            Someone chases the same approvals. Someone rewrites the same proposal,
            the same invoice, the same follow-up email — by hand, 40 times a month.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
            It doesn&apos;t feel expensive, because it&apos;s spread out. But add it
            up: time per task, times how often, times what that person costs you.
            Most businesses I look at are sitting on one workflow quietly burning
            10–20 hours a month — and they&apos;ve never costed it.
          </p>
          <ul className="space-y-2.5">
            {symptoms.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 text-base text-foreground leading-relaxed"
              >
                <Check />
                <span className="text-muted">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What you walk away with */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
            What you actually walk away with
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-7">
            This isn&apos;t a discovery call where I &ldquo;learn about your
            needs&rdquo; and email you a quote. In 15 minutes, live on a
            screen-share, you get:
          </p>
          <div className="space-y-4">
            {walkaway.map((w, i) => (
              <div
                key={i}
                className="bg-surface/60 border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-lg md:text-xl text-foreground font-semibold mb-2">
                  {w.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted leading-relaxed mt-6">
            No slides. No &ldquo;AI readiness framework.&rdquo; Just me, your
            screen, and one genuinely useful thing you didn&apos;t know this
            morning.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-7">
            How the 15 minutes goes
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-brand-light text-brand font-semibold flex items-center justify-center">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-foreground font-semibold mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton />
          </div>
        </section>

        {/* The promise band */}
        <section className="mb-14 bg-brand-light border border-brand/15 rounded-2xl p-7 md:p-10">
          <p className="heading-tight text-xl md:text-2xl text-foreground leading-snug mb-4">
            I&apos;ll show you one thing about your business that genuinely
            surprises you — or I&apos;ll tell you straight that I couldn&apos;t,
            and you&apos;ve lost 15 minutes.
          </p>
          <p className="text-base text-muted leading-relaxed">
            That&apos;s the bar I hold myself to. Most calls, the surprise is a
            number — how much a &ldquo;small&rdquo; manual task actually costs over
            a year. Sometimes it&apos;s that the fix is a $20/month tool, not a
            $20k project. Either way you win, because you find out for free.
          </p>
        </section>

        {/* Who's running this */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
            Who&apos;s running this
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            I&apos;m Alex. I write software for a living — nine years of it, for US
            tech companies, on things used by thousands of people.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            The reason I run these audits: I&apos;m slightly obsessed with
            automating my own life. I built a personal AI assistant that runs on a
            $5/month server and plans my day from five different APIs. I built an
            invoice pipeline that turns tickets into a finished invoice and a
            drafted email. I run a 900-file knowledge system wired to AI agents.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            I&apos;m not an AI agency. I&apos;m an engineer who builds this stuff
            because I can&apos;t help it — and I&apos;m good at spotting the version
            of it that&apos;ll save <em>you</em> money.
          </p>
        </section>

        {/* Proof of work */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
            Stuff I&apos;ve actually built
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-7">
            Not client logos I can&apos;t show you. Real automations I run every
            day:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {work.map((w, i) => (
              <div
                key={i}
                className="bg-surface/60 border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-base md:text-lg text-foreground font-semibold mb-2">
                  {w.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted leading-relaxed mt-6">
            On the engineering side: I&apos;ve migrated 56 pages with zero
            production incidents, set up observability that catches outages before
            they spread, and shipped integrations across Oura, Strava, Gmail, Jira,
            and Calendar. The boring reliability work is the part that makes
            automations hold up in a real business.
          </p>
        </section>

        {/* The Extensive Audit + pricing */}
        <section className="mb-14 bg-surface border border-gray-200 rounded-2xl p-7 md:p-9">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Want the full picture?
          </p>
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
            The Extensive Audit
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
            The free 15 minutes finds <em>one</em> thing. The paid audit maps{" "}
            <em>everything</em> — and hands you a build-ready plan.
          </p>
          <ul className="space-y-3 text-base text-muted leading-relaxed mb-7">
            <li className="flex gap-3">
              <Check />
              <span>
                A ranked map of 8–12 automation opportunities, each with a real
                dollar number attached
              </span>
            </li>
            <li className="flex gap-3">
              <Check />
              <span>
                Specific tool recommendations — what to use, what it costs, and
                what <em>not</em> to waste money on
              </span>
            </li>
            <li className="flex gap-3">
              <Check />
              <span>
                A 30/60/90-day roadmap — quick wins first, bigger swings later
              </span>
            </li>
            <li className="flex gap-3">
              <Check />
              <span>
                A live, recorded walkthrough where I present it like a proposal,
                not a PDF I email and disappear
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
            <p className="text-3xl md:text-4xl font-semibold text-foreground">
              $1,500
            </p>
            <p className="text-base text-muted">flat · about 2 weeks · delivered live</p>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            If you want the quick wins built afterward, we talk about it then —
            separately, priced on the savings we found. No pressure baked into the
            audit. You don&apos;t need to decide any of this now; just book the free
            15 minutes first.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-8">
            Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown />
                </summary>
                <div className="px-6 pb-5 pt-1 bg-white">
                  <p className="text-base text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-12">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
            15 minutes. One insight worth more than the 15 minutes. Free.
          </h2>
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Worst case, you lose a quarter of an hour. Best case, you find the thing
            that&apos;s been quietly costing you a hire&apos;s worth of time. Pick a
            slot.
          </p>
          <CTAButton />
          <p className="text-sm text-muted mt-4">
            No prep. No card. No slide deck. Just bring one annoying process.
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}
