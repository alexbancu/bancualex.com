import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title: "Free 15-Minute Call: Get Your Time Back | Alex Bancu",
  description:
    "You didn't start your business to spend nights on paperwork. In 15 free minutes I'll find the one repetitive job eating your week — and how to take it off your hands.",
  alternates: {
    canonical: "/ai-audit",
  },
  openGraph: {
    url: "/ai-audit",
    title: "You didn't start your business to spend your nights doing paperwork.",
    description:
      "A free 15-minute call. I find the one boring, repeating job eating your week — and show you how to make it run on its own. No pitch. No jargon. No obligation.",
    type: "website",
  },
};

const pains = [
  "You're the one holding everything together — and a little proud of it, even though it's wearing you down.",
  "You keep just doing it yourself, because it's faster than explaining it to someone else.",
  "The same small fires keep happening. You've stopped calling them emergencies — that's just Tuesday now.",
  "A follow-up gets missed. An invoice goes out late. A call doesn't get returned. You only notice when it costs you.",
  "You can't take a real week off, because everything runs through you.",
  "You spend all your time working in the business, and none of it working on the business.",
];

const steps = [
  {
    n: "1",
    title: "You tell me where your week goes",
    body: "The stuff you dread. The tasks that pile up. The thing that always lands back on your desk. You'll probably name it in the first two minutes — owners always do.",
  },
  {
    n: "2",
    title: "I find the one job costing you the most",
    body: "Not a list of 20 things to overwhelm you. The single one that, if it ran on its own, would give you the biggest chunk of your week back.",
  },
  {
    n: "3",
    title: "You leave with a plain answer",
    body: "What it is, roughly what it's costing you, and how it could run without you. Whether we ever work together or not, you keep it.",
  },
];

const examples = [
  "The clinic or salon where no-shows and reminder texts eat the front desk's whole morning.",
  "The trades or home-service crew missing calls during a job — and losing the work to whoever picked up first.",
  "The agency buried in follow-up emails and where-are-we-on-this check-ins.",
  "The shop re-typing the same orders, invoices, and stock counts by hand.",
  "The law or accounting practice where the same intake forms and chase-up messages never end.",
];

const guarantees = [
  "It's genuinely free. No card, no fee, no surprise bill later.",
  "It's 15 minutes. Not a disguised hour. I respect your time because I'm obsessed with my own.",
  "You leave with something useful — the one job costing you the most, and how to fix it. Yours to keep either way.",
  "No pressure, ever. If I'm not the right fit, I'll tell you.",
  "Plain English, start to finish. You'll never feel lost or behind on this call. That's a promise.",
];

const faqs = [
  {
    q: "Is this just going to be a sales pitch?",
    a: "No. You'll leave with a real answer — the one job costing you the most and how to take it off your hands — whether you ever hire me or not. If we're a fit, I'll say so. If we're not, I'll tell you that too.",
  },
  {
    q: "Will I owe anything after the call?",
    a: "Nothing. It's free, it's 15 minutes, and there's no obligation. You're not signing up for anything by booking.",
  },
  {
    q: "I'm not a tech person. Will I be lost?",
    a: "That's the whole point of how I work. I handle the technical side; you stay the expert in your business. I'll explain everything in plain English — if I ever use a word that needs a degree to understand, I've failed.",
  },
  {
    q: "Honestly, I don't have time for a call.",
    a: "That's exactly why this exists. You don't have time because the busywork is eating it. Fifteen minutes once beats doing the same task every week forever.",
  },
  {
    q: "Will this replace my staff?",
    a: "No. It takes the boring, repeating work off your team so they can do the part that actually needs a human — building trust with your customers. Nobody gets replaced.",
  },
  {
    q: "I tried an AI tool once and nothing happened.",
    a: "Most people say the same — and it's usually not the tool, it's that nobody set it up to do a specific job properly. That's the part I do for you.",
  },
  {
    q: "How do I know this is legit? I've been burned before.",
    a: "Fair. So here's how I work: plain language, no pressure, no act-now-or-lose-it. Book the call, see if I actually get your business, and decide from there. You risk 15 minutes and walk away with something useful no matter what.",
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
  label = "Show me what's eating my week",
}: {
  label?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-4 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Check() {
  return (
    <span className="text-brand shrink-0 mt-1">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.2"
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
      <div className="max-w-2xl mx-auto px-6 pt-10 md:pt-14 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-12"
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

        {/* HERO */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted mb-5">
            A free 15-minute call for business owners
          </p>
          <h1 className="heading-tight text-[2.1rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-[1.08]">
            You didn&apos;t start your business to spend your nights{" "}
            <span className="text-brand">doing paperwork.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
            I&apos;m a software engineer. For nine years I&apos;ve built the
            behind-the-scenes systems that do repetitive work for people. Give me
            15 free minutes and I&apos;ll find the one boring job that&apos;s
            eating your week — and show you how to take it off your hands.
          </p>
          <CTAButton />
          <p className="text-sm text-muted mt-4 max-w-md">
            Free. 15 minutes. No pitch, no obligation — you&apos;ll leave with one
            thing you can fix, whether we work together or not.
          </p>
        </section>

        {/* PAIN — sound familiar */}
        <section className="mb-16">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
            If this sounds like your week, keep reading.
          </h2>
          <ul className="space-y-3 mb-7">
            {pains.map((p, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                <span className="text-brand shrink-0 mt-1.5">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span className="text-muted">{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Here&apos;s the part nobody tells you: most of what&apos;s draining you
            isn&apos;t the skilled work you&apos;re good at. It&apos;s the boring,
            repeating stuff — the same emails, the same data entry, the same
            chasing — that a system can quietly do in the background, so nobody on
            your team has to.
          </p>
        </section>

        {/* WHO I AM */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/eu.jpg"
              alt="Alex Bancu"
              width={64}
              height={64}
              className="rounded-full object-cover w-16 h-16 shrink-0"
            />
            <div>
              <p className="text-foreground font-semibold text-lg leading-tight">
                Alex Bancu
              </p>
              <p className="text-sm text-muted">
                Software engineer · I delete boring work for a living
              </p>
            </div>
          </div>
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
            I&apos;m a little obsessed with deleting boring work.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            I&apos;ve spent the last nine years as a software engineer at US tech
            companies, building the behind-the-scenes systems that quietly do
            repetitive work for people — so a whole team stops doing it by hand.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            Somewhere along the way it became a personal obsession: hunting down
            the busywork in my own life and making it run on its own. Now I do it
            for business owners.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            I&apos;m good at one specific thing — finding the single job that&apos;s
            eating the most time and money in a business, and making it run without
            anyone touching it. I&apos;ll explain all of it in plain English. You
            stay the expert in your business; I handle the technical part.
          </p>
        </section>

        {/* WHAT HAPPENS */}
        <section className="mb-16">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
            What happens in our 15 minutes
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
            Not a sales call wearing a friendly hat. Here&apos;s the actual plan:
          </p>
          <div className="space-y-6 mb-9">
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
          <p className="text-base md:text-lg text-foreground font-medium mb-7">
            Fifteen minutes. No homework, no prep, no slide deck.
          </p>
          <CTAButton />
        </section>

        {/* RELEVANCE */}
        <section className="mb-16">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
            &ldquo;Does this even work for <em>my</em> kind of business?&rdquo;
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
            Almost certainly. Every business has the same boring, repeating work
            hiding in it — it just wears different clothes:
          </p>
          <ul className="space-y-3 mb-6">
            {examples.map((e, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                <Check />
                <span className="text-muted">{e}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            If your week has a job that&apos;s repetitive, predictable, and
            you&apos;re sick of doing it — that&apos;s exactly the thing I find and
            remove. And it doesn&apos;t replace your people. It takes the busywork
            off them so they can do the part only a human can do.
          </p>
        </section>

        {/* TRUST / RISK REVERSAL */}
        <section className="mb-16 bg-surface border border-gray-200 rounded-2xl p-7 md:p-9">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
            The whole thing, with no catch
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
            You&apos;ve probably been pitched before — maybe even burned. So let me
            be straight about exactly what this is:
          </p>
          <ul className="space-y-3 mb-8">
            {guarantees.map((g, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                <Check />
                <span className="text-foreground">{g}</span>
              </li>
            ))}
          </ul>
          <CTAButton />
          <p className="text-sm text-muted mt-4">
            Worst case, you lose a quarter of an hour and gain one thing to fix.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-8">
            Questions you&apos;re probably asking
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

        {/* FINAL CTA */}
        <section className="text-center mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
            You&apos;ll spend the next 15 minutes either way.
          </h2>
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Spend them finding the one thing that gives you your evenings back.
          </p>
          <CTAButton />
          <p className="text-sm text-muted mt-4">
            Free. No obligation. No pitch. Worst case, you leave with one fix you
            can do yourself.
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}
