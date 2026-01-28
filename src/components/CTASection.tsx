import BookCallButton from "./BookCallButton";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
          You don&apos;t need more information. You need to feel what you&apos;ve been avoiding.
        </h2>

        <p className="font-sub text-lg md:text-xl text-muted mb-10">
          30 minutes. Free. We talk about what&apos;s actually going on.
        </p>

        <BookCallButton label="Book a free call" />
      </div>
    </section>
  );
}
