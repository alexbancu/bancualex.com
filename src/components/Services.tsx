const services = [
  "Find the emotion underneath the overthinking. Let it move",
  "Replace self-criticism with a voice that actually helps you",
  "Make decisions from clarity, not from fear",
  "See the patterns you keep repeating. Choose differently",
  "Get your energy back when you stop fighting yourself",
];

import BookCallButton from "./BookCallButton";

function CheckIcon() {
  return (
    <svg
      className="shrink-0 w-5 h-5 text-brand mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-10">
          What we work on together
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-base md:text-lg text-muted leading-relaxed">
                {service}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <BookCallButton label="Start with a free call" />
        </div>
      </div>
    </section>
  );
}
