const faqs = [
  {
    question: "What happens in a session?",
    answer:
      "We talk. I ask questions that help you see what you're too close to notice. I don't give advice. Most of what holds people back is an emotion they've been avoiding. We find it, feel it, and things start moving.",
  },
  {
    question: "Who is this for?",
    answer:
      "Engineers, founders, creatives. People who are good at their work but stuck in patterns they can't think their way out of. If your head won't stop running and your energy is gone, this is probably for you.",
  },
  {
    question: "How is this different from therapy?",
    answer:
      "Therapy explores the past. Coaching focuses on where you are and where you want to go. We look at patterns, emotions, and decisions. If I think therapy would serve you better, I'll say so.",
  },
  {
    question: "What if I'm not sure?",
    answer:
      "Book the intro call. It's free. 30 minutes. Worst case, you get a useful conversation. I'll be honest about whether I can help.",
  },
];

function ChevronDown() {
  return (
    <svg
      className="faq-chevron w-5 h-5 text-brand shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-gray-50 transition-colors">
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown />
              </summary>
              <div className="px-6 pb-5 pt-1 bg-white">
                <p className="text-base text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
