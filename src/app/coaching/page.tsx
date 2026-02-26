import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coaching | Alex Bancu",
  description:
    "I coach people sometimes. Conversations with engineers, founders, and friends who felt stuck. Some of them say it changed something.",
  alternates: {
    canonical: "/coaching",
  },
  openGraph: {
    url: "/coaching",
    title: "Coaching | Alex Bancu",
    description:
      "I coach people sometimes. Conversations with engineers, founders, and friends who felt stuck. Some of them say it changed something.",
    type: "website",
  },
};

const testimonials = [
  {
    quote:
      "I sleep better, I think better and I feel better. Alex\u2019s calm & focused guidance over a couple sessions helped bring to light more about my long standing struggle with sleep than I managed to eek out over years of introspection. His warm, balanced tone often echoes in my head when I\u2019m faced with difficult decisions, and I feel very grateful for it.",
    name: "Codrin Gidei",
    title: "CTO",
  },
  {
    quote:
      "When we started, I was at a point in life where I was feeling stuck. My business was stagnating for 6 months, and I just couldn\u2019t find the energy to start working again. Talking to Alex made me aware of the main negative thinking patterns holding me back. 2 months in and I\u2019ve already finished more work than I was expecting, started working out and am on path to a huge increase in revenue.",
    name: "Timotei Centea",
    title: "Business Owner",
  },
  {
    quote:
      "A refreshing mix of informality and professionalism, where I could openly share my challenges. His advice stayed with me beyond the session, acting as a mental pep talk during the workday. It helped me push through tasks and maintain productivity instead of postponing them.",
    name: "Sebastian Palaghita",
    title: "Software Engineer",
  },
];

export default function CoachingPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 md:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </Link>

      <div className="flex flex-col items-center text-center mb-12">
        <Image
          src="/images/eu.jpg"
          alt="Alex Bancu"
          width={56}
          height={56}
          className="rounded-full object-cover w-14 h-14 mb-6"
          priority
        />

        <h1 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
          I coach people sometimes.
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed">
          I&apos;ve had conversations with engineers, founders, and friends
          who felt stuck. Some of them say it changed something.
        </p>
      </div>

      <hr className="border-gray-200 mb-12" />

      <div className="space-y-10">
        {testimonials.map((t, i) => (
          <div key={i}>
            <p className="text-base md:text-lg text-muted leading-[1.8] italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-3 text-sm text-foreground">
              &mdash; {t.name}, {t.title}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-gray-200 mt-12 mb-12" />

      <p className="text-base text-muted leading-relaxed text-center">
        I&apos;m learning more through Joe Hudson&apos;s Connection Course.
        <br />
        If this resonates:{" "}
        <a
          href="mailto:coach@bancualex.com"
          className="text-brand hover:underline"
        >
          coach@bancualex.com
        </a>
      </p>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
