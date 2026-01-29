const symptoms = [
  "The same thoughts on repeat, even when you're exhausted",
  "Stuck between options, unable to pick any of them",
  "Beating yourself up about the same things every week",
  "Tired in a way that sleep and vacations don't fix",
  "Judging yourself hard, then judging yourself for judging yourself",
  "Trying to logic your way out of feelings that won't go away",
  "Saying yes to everything, then resenting people for asking",
  "Twelve tabs open, three side projects started, nothing finished",
  "Can't let others own the decision, even when you know you should",
];

import BookCallButton from "./BookCallButton";

export default function Symptoms() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
          Sound familiar?
        </h2>
        <p className="text-muted text-base md:text-lg mb-10">
          You&apos;re not broken. You&apos;re a high-performer running a pattern that used to work. Most of my clients describe some version of these before we start.
        </p>

        <ul className="space-y-5">
          {symptoms.map((symptom, i) => (
            <li key={i} className="flex items-start gap-4 text-base md:text-lg text-muted leading-relaxed">
              <span className="shrink-0 mt-2.5 w-2 h-2 rounded-full bg-brand" />
              {symptom}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <BookCallButton label="Let's talk about it" />
        </div>
      </div>
    </section>
  );
}
