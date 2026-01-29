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
  title: "Mind Design Studio — Coaching for High Performers | Alex Bancu",
  description:
    "Feeling stuck despite your success? Mind Design Studio offers 1-on-1 coaching for high-performers ready to unlock clarity, energy, and direction.",
  alternates: {
    canonical: "/coaching",
  },
};

export default function CoachingPage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Symptoms />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <CTASection />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
