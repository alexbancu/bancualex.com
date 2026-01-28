const symptoms = [
  "Looping thoughts that won't stop, even when you're exhausted",
  "Stuck between two options, unable to pick either one",
  "Beating yourself up about the same things every week",
  "Tired in a way that sleep and vacations don't fix",
  "Judging yourself hard, then judging yourself for judging yourself",
];

export default function Symptoms() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-10">
          These are smoke signals
        </h2>

        <ul className="space-y-5">
          {symptoms.map((symptom, i) => (
            <li key={i} className="flex items-start gap-4 text-base md:text-lg text-muted leading-relaxed">
              <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand" />
              {symptom}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
