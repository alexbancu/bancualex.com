const steps = [
  "You book a free intro call. We talk for 30 minutes. No pitch.",
  "We build a plan around what you're actually dealing with.",
  "Sessions are over video. We go where it matters, not where it's comfortable.",
  "I work with a small number of people at a time. You get my full focus.",
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-10">
          Next steps
        </h2>

        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-5">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand text-white text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-base md:text-lg text-muted leading-relaxed pt-1">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-base md:text-lg text-muted leading-relaxed italic">
          The intro call is free. If I&apos;m not the right fit, I&apos;ll say so.
        </p>
      </div>
    </section>
  );
}
