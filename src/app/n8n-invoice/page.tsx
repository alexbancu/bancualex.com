import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// TEST-mode link for initial deploy. Swap to live link after dashboard creation.
const STRIPE_URL = "https://buy.stripe.com/test_14A28saHHaWgg1qeWXbII00";
const CALENDLY_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title: "n8n Invoice Automation Install — €497 | Alex Bancu",
  description:
    "I built an n8n automation that turns Jira hours into a finished invoice in one click. I'll install it in your business in 30 days. €497 flat.",
  alternates: {
    canonical: "/n8n-invoice",
  },
  openGraph: {
    url: "/n8n-invoice",
    title: "n8n Invoice Automation Install — €497 | Alex Bancu",
    description:
      "Turn Jira hours into a finished invoice in one click. I install the n8n workflow in your business in 30 days. €497 flat.",
    type: "website",
  },
};

const included = [
  "Custom n8n workflow installed on your infrastructure (or mine, if you don't have one yet).",
  "Jira → Google Sheets → PDF → invoice tool of your choice (Factureaza.ro, Stripe Invoicing, Wise, anything with an API).",
  "30 days of support after install: bugs, tweaks, training calls.",
  "All code yours. No vendor lock-in. No per-execution fees.",
  "A short Loom walkthrough so anyone on your team can run it.",
];

const steps = [
  "Reads your Jira tickets for the billing period.",
  "Pulls hours from your time-tracking (Tempo, Clockify, or status-change timestamps).",
  "Generates the invoice in your tool of choice.",
  "Drops the email draft into Gmail for your final review.",
  "You hit send. Done.",
];

const faqs = [
  {
    q: "What invoice tool does it work with?",
    a: "Factureaza.ro, Stripe Invoicing, Wise, Xero, QuickBooks, or anything with an API. We pick the right fit on the call before I start.",
  },
  {
    q: "Where does it run? Do I need to host n8n?",
    a: "Two options. (1) If you already have n8n self-hosted or use n8n Cloud, I install it there. (2) If not, I host it for you on a small VPS (about €5/mo, your account). I help you set up either way. Your data never leaves your stack.",
  },
  {
    q: "How long does the install actually take?",
    a: "First call is 30 minutes — I map your invoicing flow and confirm the moving parts (Jira fields, invoice tool, email). Install is 2–4 hours of my time, spread over a few days. You'll have it running within 30 days. Most clients are live in 10.",
  },
  {
    q: "What if my setup is non-standard?",
    a: "It usually is. The €497 covers the standard Jira→Sheets→invoice flow. If you have edge cases (multi-currency, multiple clients per invoice, project-based rates), we scope that on the call. Typical add-ons run €100–300.",
  },
  {
    q: "What happens after the 30 days of support?",
    a: "You own the workflow. It keeps running. If something breaks because Jira changes an API or you want a new feature, I offer hourly tweaks at €80/hr. No retainer required.",
  },
  {
    q: "Why €497 — that seems low?",
    a: "Because I built it for myself first. The hard work is done. I'm pricing for speed and volume. The first 20 installs will go fast at this price. After that, it goes up.",
  },
  {
    q: "Refund policy?",
    a: "If after the first call we agree this isn't the right fit for your setup, full refund, no questions. After install starts, refund is pro-rated against work done.",
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

function BuyButton({ label = "Buy now — €497" }: { label?: string }) {
  return (
    <a
      href={STRIPE_URL}
      className="inline-flex items-center justify-center bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-3.5 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto sm:min-w-[12rem]"
    >
      {label}
    </a>
  );
}

export default function N8nInvoicePage() {
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
          Stop spending 20 minutes a week on invoicing.
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8">
          I built an n8n automation that turns my Jira hours into a finished invoice
          in one click. I&apos;ll install it in your business in 30 days. €497 flat.
        </p>

        <BuyButton />

        <p className="text-sm text-muted mt-4">
          Want to scope it first?{" "}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
            Book a free 15-min call
          </a>
        </p>
      </section>

      <hr className="border-gray-200 mb-14" />

      {/* The Problem */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          If you&apos;re a freelance dev or small dev shop
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          You log Jira hours all month. End of month, you stop coding.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          You open the spreadsheet. Tally hours per ticket. Apply your rate. Copy to
          your invoice tool. Generate the PDF. Email it.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          Twenty minutes minimum. Often forty. Every month. Forever.
        </p>
      </section>

      {/* What it does */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          What it does
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-5">
          One click runs an n8n workflow:
        </p>
        <ol className="space-y-3 list-decimal pl-6">
          {steps.map((s, i) => (
            <li key={i} className="text-base md:text-lg text-muted leading-relaxed">
              {s}
            </li>
          ))}
        </ol>
        <p className="text-base md:text-lg text-muted leading-relaxed mt-6">
          End-to-end: about 10 seconds. Most of that is waiting for the PDF to render.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          What you get for €497
        </h2>
        <ul className="space-y-3">
          {included.map((item, i) => (
            <li key={i} className="flex gap-3 text-base md:text-lg text-muted leading-relaxed">
              <span className="text-brand shrink-0 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who I am */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          Who I am
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          I&apos;m Alex. Nine+ years shipping React and TypeScript at scale. I work
          remote as a senior contractor for a US food-tech company.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          I built this automation for myself first. Invoicing was the most boring
          part of my month and I kept putting it off. Now it runs every billing
          cycle in 10 seconds.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          I want a few more people to have this. I&apos;m installing it for the first
          20 customers at €497. After that, the price goes up.
        </p>
      </section>

      {/* Pricing block */}
      <section className="mb-14 bg-surface border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          One-time install
        </p>
        <p className="text-5xl md:text-6xl font-semibold text-foreground mb-4">
          €497
        </p>
        <p className="text-base text-muted mb-8 max-w-md mx-auto">
          30 days of support. All code yours. No subscription. No vendor lock-in.
        </p>
        <BuyButton />
        <p className="text-sm text-muted mt-4">
          or{" "}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
            book a free 15-min call
          </a>{" "}
          to scope your setup first
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
          Get your weekends back.
        </h2>
        <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
          One-time install. Yours forever. Stop dreading the last week of every month.
        </p>
        <BuyButton />
        <p className="text-sm text-muted mt-4">
          Not sure?{" "}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
            Book a free 15-min call
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}
