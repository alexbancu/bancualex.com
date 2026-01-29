"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Testimonials() {
  useEffect(() => {
    const handleLoad = () => {
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).iFrameResize) {
        (window as unknown as { iFrameResize: (opts: Record<string, unknown>, sel: string) => void }).iFrameResize(
          { log: false, checkOrigin: false },
          "#wall-of-love-DabD0td"
        );
      }
    };

    const script = document.querySelector(
      'script[src="https://widget.senja.io/js/iframeResizer.min.js"]'
    );
    if (script) {
      handleLoad();
    }
  }, []);

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-10 text-center">
          People I&apos;ve worked with
        </h2>

        <Script
          src="https://widget.senja.io/js/iframeResizer.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).iFrameResize) {
              (window as unknown as { iFrameResize: (opts: Record<string, unknown>, sel: string) => void }).iFrameResize(
                { log: false, checkOrigin: false },
                "#wall-of-love-DabD0td"
              );
            }
          }}
        />

        <iframe
          id="wall-of-love-DabD0td"
          src="https://senja.io/p/alex-bancu/DabD0td?hideNavigation=true&embed=true"
          title="Wall of Love - Client testimonials for Alex Bancu"
          frameBorder="0"
          scrolling="no"
          width="100%"
          style={{ minHeight: "400px" }}
        />
      </div>
    </section>
  );
}
