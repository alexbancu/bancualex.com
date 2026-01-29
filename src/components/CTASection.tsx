import BookCallButton from "./BookCallButton";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
          Let&apos;s talk about what&apos;s actually going on.
        </h2>

        <p className="font-sub text-lg md:text-xl text-muted mb-10">
          30 minutes. Free. No pitch. Just an honest conversation about where you are.
        </p>

        <BookCallButton label="Book a free intro call" />

        <p className="mt-8 text-sm text-muted">
          Not ready yet?{" "}
          <a
            href="https://alexbancu.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand transition-colors"
          >
            I write about this stuff on Substack
          </a>
        </p>
      </div>
    </section>
  );
}
