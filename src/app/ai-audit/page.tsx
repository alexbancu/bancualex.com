import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title: "Get Your Time Back. Free 15-Min Call | Alex Bancu",
  description:
    "Boring, repeating work eats your week. I find the one job wasting the most time and make it run on its own. Free 15-minute call. No pitch, no tech talk.",
  alternates: {
    canonical: "/ai-audit",
  },
  openGraph: {
    url: "/ai-audit",
    title: "Right now, your business runs you.",
    description:
      "Boring, repeating work eats your week. I find the one job wasting the most time and make it run on its own. Free 15-minute call. No pitch, no tech talk.",
    type: "website",
  },
};

const pains = [
  "You do it yourself, because it's faster than explaining it to someone else.",
  "The same small problems keep happening. You stopped calling them emergencies.",
  "A call gets missed. An invoice goes out late. You only notice when it costs you.",
  "You can't take a week off, because the whole thing runs through you.",
];

const steps = [
  {
    n: "1",
    title: "You tell me what eats your time",
    body: "The jobs you hate. The stuff that piles up and lands back on your desk.",
  },
  {
    n: "2",
    title: "I find the biggest one",
    body: "Not a list of twenty things. The single job worth fixing first.",
  },
  {
    n: "3",
    title: "You get a simple answer",
    body: "What it is, what it's costing you, and how to make it run on its own. You keep it, even if we never work together.",
  },
];

const examples = [
  "A clinic that loses its whole morning to no-show reminders.",
  "A trades crew that misses calls on the job, and loses the work to whoever picks up first.",
  "A shop that re-types the same orders and invoices by hand.",
];

const guarantees = [
  "It's free. No card. No surprise bill.",
  "It's 15 minutes. Not a sneaky hour.",
  "You leave with something useful. Yours to keep.",
  "No pressure. If I'm not a fit, I'll tell you.",
];

const faqs = [
  {
    q: "Is this just a sales pitch?",
    a: "No. You leave with a real answer, even if you never hire me. If we're a fit, I'll say so. If not, I'll tell you.",
  },
  {
    q: "Will I owe anything?",
    a: "Nothing. It's free, it's 15 minutes, and there's no obligation.",
  },
  {
    q: "I'm not techy. Will I be lost?",
    a: "No. I handle the tech. You stay the expert on your business. I explain everything in plain words.",
  },
  {
    q: "I don't have time for a call.",
    a: "That's the point. The busywork is what's eating your time. 15 minutes once beats doing the same job every week.",
  },
  {
    q: "Will it replace my staff?",
    a: "No. It takes the boring work off your team, so they can do the part that needs a person. Nobody gets replaced.",
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
  label = "Show me what's wasting my time",
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
        <section className="mb-14">
          <p className="text-xs uppercase tracking-widest text-muted mb-5">
            A free 15-minute call for business owners
          </p>
          <h1 className="heading-tight text-[2.2rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-[1.08]">
            Right now, your business{" "}
            <span className="text-brand">runs you.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
            You spend your week on boring, repeating jobs. I find the one that
            wastes the most time, and I make it run on its own. So you get your
            evenings back.
          </p>
          <CTAButton />
          <p className="text-sm text-muted mt-4 max-w-md">
            Free. 15 minutes. No pitch. You leave with one thing to fix, even if
            we never work together.
          </p>
        </section>

        {/* PAIN */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
            Sound familiar?
          </h2>
          <ul className="space-y-3 mb-6">
            {pains.map((p, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                <span className="text-brand shrink-0 mt-2">
                  <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span className="text-muted">{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Most of it isn&apos;t the real work you&apos;re good at. It&apos;s
            boring, repeating stuff a computer can quietly do for you. So nobody on
            your team has to.
          </p>
        </section>

        {/* WHO I AM */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <Image
              src="/images/eu.jpg"
              alt="Alex Bancu"
              width={56}
              height={56}
              className="rounded-full object-cover w-14 h-14 shrink-0"
            />
            <div>
              <p className="text-foreground font-semibold text-lg leading-tight">
                Hi, I&apos;m Alex.
              </p>
              <p className="text-sm text-muted">
                Software engineer. I delete boring work.
              </p>
            </div>
          </div>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            For nine years I&apos;ve built tools that do boring, repeating jobs for
            people, so they stop doing them by hand. I&apos;m good at one thing:
            finding the job that wastes the most time, and making it run on its
            own. I explain it all in plain words. No tech talk, ever.
          </p>
        </section>

        {/* WHAT HAPPENS */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-7">
            What happens on the call
          </h2>
          <div className="space-y-6 mb-8">
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
            Fifteen minutes. No prep. No slides.
          </p>
          <CTAButton />
        </section>

        {/* RELEVANCE */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
            &ldquo;Does this work for <em>my</em> business?&rdquo;
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
            Almost always. Every business has boring, repeating work hiding in it:
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
            If a job is boring and you do it over and over, that&apos;s the one I
            fix. And no, it doesn&apos;t replace your people. It just takes the
            boring part off them.
          </p>
        </section>

        {/* TRUST */}
        <section className="mb-14 bg-surface border border-gray-200 rounded-2xl p-7 md:p-9">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
            No catch
          </h2>
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
            Worst case, you lose 15 minutes and get one thing to fix.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-8">
            Quick questions
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
            You&apos;ll spend the next 15 minutes anyway.
          </h2>
          <p className="text-base md:text-lg text-muted mb-8 max-w-sm mx-auto">
            Spend them finding the one thing that gives you your evenings back.
          </p>
          <CTAButton />
          <p className="text-sm text-muted mt-4">Free. No pitch. No pressure.</p>
        </section>

        <Footer />
      </div>
    </main>
  );
}
