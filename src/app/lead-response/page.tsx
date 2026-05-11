import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title: "Stop Losing Leads to Whoever Replies First | Alex Bancu",
  description:
    "I install an AI that responds to every inquiry in under 60 seconds. Qualifies the lead. Books the call. €1,497 setup. For Romanian service businesses.",
  alternates: {
    canonical: "/lead-response",
  },
  openGraph: {
    url: "/lead-response",
    title: "Stop losing leads to whoever replies first.",
    description:
      "I install an AI that replies to every inquiry in under 60 seconds. 78% of customers buy from whoever responds first. Most businesses take 47 hours.",
    type: "website",
  },
};

const roi = [
  { biz: "Real estate agent", deal: "€3,000–10,000 commission per closing", payback: "1 saved deal = 2–7× ROI in month one" },
  { biz: "Law firm", deal: "€500–5,000 per case", payback: "1 new case = full ROI" },
  { biz: "Accounting firm", deal: "€1,000–3,000/year recurring per client", payback: "1 new client pays back year one; pure margin after" },
  { biz: "Marketing agency", deal: "€1,500–3,000/mo retainer", payback: "1 new retainer = ROI in 30 days" },
  { biz: "Dental clinic", deal: "€500–2,000 lifetime value per new patient", payback: "3 new patients = 4× ROI in year one" },
];

const channels = [
  "WhatsApp Business",
  "Facebook Messenger",
  "Instagram DMs",
  "Your website contact form",
  "Gmail",
  "Phone (transcribed voicemail)",
];

const why = [
  {
    title: "It's not one tool. It's six glued together.",
    body: "WhatsApp Business API, Meta APIs, your website form, Gmail, your calendar, your CRM. Each one has its own auth, rate limits, and edge cases. Off-the-shelf tools handle one channel each.",
  },
  {
    title: "The AI prompts have to be in Romanian, in your voice.",
    body: "A generic English template sounds like a foreign call center. I write the prompts for your business — the specific questions to qualify a real estate buyer vs. a legal consultation vs. an accounting inquiry. This is where most installs fail.",
  },
  {
    title: "It needs a human watching it.",
    body: "Meta changes its API every few months. Your business shifts. New lead sources appear. \"Set and forget\" automations break inside a quarter. The €197/mo keeps it running.",
  },
];

const faqs = [
  {
    q: "How is this different from a chatbot like ManyChat or Intercom?",
    a: "Chatbots follow scripts. This uses AI to actually understand what your lead is asking, answer their real question, qualify them on context, and decide if they're worth your time. Same difference as a phone tree vs. a smart receptionist.",
  },
  {
    q: "What if the AI says something wrong?",
    a: "Two safeguards. First, every AI conversation is reviewable in a shared inbox — you read what it said, you can override and reply yourself anytime. Second, I tune the AI for your specific business in the first two weeks, then adjust monthly. Mistakes get caught and fixed.",
  },
  {
    q: "Will my customers know they're talking to AI?",
    a: "Your call. Most clients prefer a soft disclosure (\"Alex's assistant — Alex will follow up personally within the hour\"). The AI handles triage and qualification; you handle the real conversation. Honesty wins.",
  },
  {
    q: "What channels does it cover?",
    a: "Whatever channels your leads use. WhatsApp Business, Facebook Messenger, Instagram DMs, website forms, Gmail. We map your actual lead flow on the audit call before I build anything.",
  },
  {
    q: "How long does the install take?",
    a: "Audit call this week. Full install within 14–21 days. You're responding to every lead in under 60 seconds by week three.",
  },
  {
    q: "What's the €197/mo for? Can I cancel?",
    a: "Monitoring, tuning, and maintenance. The AI quality drifts when not watched. Lead sources change. APIs update. €197/mo = me keeping it running and improving. Cancel anytime, the workflow stays installed.",
  },
  {
    q: "How is this different from hiring a virtual assistant?",
    a: "A VA costs €600–1,500/mo, works 8 hours a day, and takes 5–15 minutes per response. The AI works 24/7 in under 60 seconds. For lead capture, response time matters more than thoughtful responses — leads die in minutes.",
  },
  {
    q: "Who isn't this for?",
    a: "Businesses where lead volume is low (under 10/month) or where every lead requires a deep custom response (high-end consulting). If your sales cycle starts with \"are you available\" or \"how much\" — this works. If it starts with \"here's my 40-page brief\" — it doesn't.",
  },
];

function ChevronDown() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0"
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

function CTAButton({ label = "Book a free 20-min audit call" }: { label?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-3.5 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto sm:min-w-[14rem]"
    >
      {label}
    </a>
  );
}

export default function LeadResponsePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
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

      {/* Hero */}
      <section className="flex flex-col items-center text-center mb-14">
        <Image
          src="/images/eu.jpg"
          alt="Alex Bancu"
          width={56}
          height={56}
          className="rounded-full object-cover w-14 h-14 mb-6"
          priority
        />

        <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-5">
          Stop losing leads to whoever replies first.
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8">
          I install an AI that replies to every inquiry in under 60 seconds.
          It qualifies the lead. Books the call. Works 24/7 across WhatsApp,
          Facebook, your website, and Gmail.
        </p>

        <CTAButton />

        <p className="text-sm text-muted mt-4">
          Free 20 minutes. No pitch. An honest look at where your leads go.
        </p>
      </section>

      <hr className="border-gray-200 mb-14" />

      {/* The data */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          The number you can&apos;t ignore
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          Harvard Business Review studied 1.25 million sales leads. The finding:
        </p>
        <blockquote className="border-l-4 border-brand pl-6 my-6 bg-surface/40 py-4 rounded-r-lg">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-3">
            Companies that respond within 5 minutes are{" "}
            <strong className="text-brand">100× more likely to connect</strong>{" "}
            with a lead — and{" "}
            <strong className="text-brand">21× more likely to qualify</strong>{" "}
            them — than companies that wait 30 minutes.
          </p>
          <p className="text-sm text-muted">
            — Harvard Business Review, &ldquo;The Short Life of Online Sales Leads&rdquo;
          </p>
        </blockquote>
        <ul className="space-y-2 text-base md:text-lg text-muted leading-relaxed mb-6">
          <li>
            <strong className="text-foreground">78% of customers</strong> buy from whoever replies first.
          </li>
          <li>
            The average business takes <strong className="text-foreground">47 hours</strong> to respond.
          </li>
          <li>
            Only <strong className="text-foreground">7%</strong> respond within 5 minutes.
          </li>
        </ul>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          You don&apos;t need more leads. You need to stop losing the ones you already have.
        </p>
      </section>

      {/* The math */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          The math, for your business
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          One saved deal usually covers the setup. Here&apos;s how it plays out by industry.
        </p>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-foreground font-semibold">Business</th>
                <th className="text-left py-3 px-2 text-foreground font-semibold">Deal value</th>
                <th className="text-left py-3 px-2 text-foreground font-semibold">Payback</th>
              </tr>
            </thead>
            <tbody>
              {roi.map((r, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-3 px-2 text-foreground font-medium">{r.biz}</td>
                  <td className="py-3 px-2 text-muted">{r.deal}</td>
                  <td className="py-3 px-2 text-muted">{r.payback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Who this is for
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          Romanian service businesses where leads come in across multiple channels
          and you can&apos;t personally watch every one.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          Real estate agents. Law firms. Accounting practices. Marketing agencies.
          Dental clinics. Consultancies. Anyone who&apos;d close more business
          if they could reply in under a minute, every time.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          If your sales conversation usually starts with &ldquo;are you available&rdquo;
          or &ldquo;how much&rdquo; — this is for you. If your prospects send 40-page
          briefs — this isn&apos;t.
        </p>
      </section>

      {/* Why you can't just install it yourself */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Why it&apos;s harder than it sounds
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          AI chatbots are everywhere. So why does almost no one have one that
          actually works? Three reasons:
        </p>
        <div className="space-y-6">
          {why.map((w, i) => (
            <div key={i}>
              <h3 className="text-lg md:text-xl text-foreground font-semibold mb-2">
                {w.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          What you get for €1,497
        </h2>
        <ul className="space-y-3 text-base md:text-lg text-muted leading-relaxed">
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>A 20-minute audit call where we map every channel your leads currently come through.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>The AI installed on every relevant channel — WhatsApp Business, Facebook, website form, Gmail, and your calendar.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Custom prompts written in Romanian, in your voice, for your specific industry and qualifying questions.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>A shared inbox where you can read every AI conversation, override, and take over anytime.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>30 days of post-install tuning included.</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-surface border border-gray-200 rounded-2xl">
          <p className="text-sm text-muted mb-2">Then, optionally:</p>
          <p className="text-base text-foreground font-medium mb-1">€197/month — Maintenance &amp; tuning</p>
          <p className="text-sm text-muted">
            I monitor performance, fix API breaks, adjust the AI as your business changes.
            Cancel anytime. The workflow stays yours.
          </p>
        </div>
      </section>

      {/* Who I am */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          Who I am
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          I&apos;m Alex. Nine years shipping software for US tech companies. I live in Cluj.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          I&apos;ve spent the last year building AI workflows on top of LLMs — for myself,
          and for the clients I trust enough to test on. This is what I want to do full-time.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          I&apos;m only taking on the first 10 customers at €1,497. After that, the price
          goes up.
        </p>
      </section>

      {/* Pricing block */}
      <section className="mb-14 bg-surface border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          One-time install
        </p>
        <p className="text-5xl md:text-6xl font-semibold text-foreground mb-3">
          €1,497
        </p>
        <p className="text-base text-muted mb-1">
          + €197/month maintenance (optional, cancel anytime)
        </p>
        <p className="text-base text-muted mb-8 max-w-md mx-auto">
          One saved deal pays for it. Most clients see ROI in week three.
        </p>
        <CTAButton />
        <p className="text-sm text-muted mt-4">
          Free 20-min audit call first. We confirm fit before any money moves.
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
          Worth 20 minutes to find out?
        </h2>
        <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
          On the call we map your lead channels and figure out what you&apos;re losing.
          No pitch unless it fits.
        </p>
        <CTAButton />
      </section>

      <Footer />
    </main>
  );
}
