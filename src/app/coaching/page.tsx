import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Symptoms from "@/components/Symptoms";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coaching for High Performers | Alex Bancu",
  description:
    "Coaching for people in tech who think too much and feel stuck. We find what's underneath. Decisions get easier.",
  alternates: {
    canonical: "/coaching",
  },
  openGraph: {
    url: "/coaching",
    title: "Coaching for High Performers | Alex Bancu",
    description:
      "Coaching for people in tech who think too much and feel stuck. We find what's underneath. Decisions get easier.",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens in a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We talk. I ask questions that help you see what you're too close to notice. I don't give advice. Most of what holds people back is an emotion they've been avoiding. We find it, feel it, and decisions get easier.",
      },
    },
    {
      "@type": "Question",
      name: "How long is a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are 60 minutes. That gives us enough space to go deep without dragging. Some sessions run a few minutes over if we're in the middle of something important.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no fixed package. Some people work with me for a few sessions, some for months. We check in regularly and you decide what makes sense. No contracts, no pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "People who are good at their work but stuck in patterns they can't think their way out of. Engineers, founders, creatives. If your thoughts won't stop looping and your energy is gone, this is probably for you.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They're complementary, not competing. Therapy often explores the past in depth. Coaching focuses on where you are now and where you want to go. We work on patterns, emotions, and decisions. If I think therapy would serve you better, I'll say so.",
      },
    },
    {
      "@type": "Question",
      name: "What if it doesn't work for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a free 30-minute call. No commitment. If it feels like we'd work well together, we go from there. If not, I'll tell you. I'd rather be honest than waste your time.",
      },
    },
  ],
};

export default function CoachingPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
    <main>
      <Hero />
      <ProblemStatement />
      <Symptoms />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
    </>
  );
}
