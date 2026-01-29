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
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
