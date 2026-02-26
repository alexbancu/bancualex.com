const testimonials = [
  {
    quote:
      "I sleep better, I think better and I feel better \u2014 Alex\u2019s calm & focused guidance over a couple sessions helped bring to light more about my long standing struggle with sleep than I managed to eek out over years of introspection. His warm, balanced tone often echoes in my head when I\u2019m faced with difficult decisions \u2014 and I feel very grateful for it.",
    name: "Codrin Gidei",
    title: "CTO",
    initials: "CG",
  },
  {
    quote:
      "When we started, I was at a point in life where I was feeling stuck. My business was stagnating for 6 months, and I just couldn\u2019t find the energy to start working again. Talking to Alex made me aware of the main negative thinking patterns holding me back. 2 months in and I\u2019ve already finished more work than I was expecting, started working out and am on path to a huge increase in revenue.",
    name: "Timotei Centea",
    title: "Business Owner",
    initials: "TC",
  },
  {
    quote:
      "A refreshing mix of informality and professionalism, where I could openly share my challenges. His advice stayed with me beyond the session, acting as a mental pep talk during the workday. It helped me push through tasks and maintain productivity instead of postponing them.",
    name: "Sebastian Palaghita",
    title: "Software Engineer",
    initials: "SP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-12 text-center">
          What people said
        </h2>

        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-2 border-brand/30 pl-6">
              <p className="text-base md:text-lg text-muted leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand/10 text-brand text-xs font-semibold">
                  {t.initials}
                </span>
                <span className="text-sm text-foreground font-medium">
                  {t.name}
                  <span className="text-mid font-normal">
                    {" "}&middot; {t.title}
                  </span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
