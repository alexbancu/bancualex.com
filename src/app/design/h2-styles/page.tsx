export default function H2StylesPreview() {
  const sampleH2 = "Burnout recovery has stages. Most people only know about one.";
  const sampleH2b = "Phase 1: Collapse (weeks 1-6)";
  const sampleBody =
    "The standard advice is rest. And rest matters. But rest is phase one of at least four. People who only rest and do nothing else stall in recovery for months. Sometimes years.";

  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="heading-tight text-2xl text-foreground mb-2">
          H2 Style Options
        </h1>
        <p className="text-sm text-muted mb-12">
          Pick the one that fits the editorial feel best.
        </p>

        {/* Option A: Clean typography only */}
        <section className="mb-20 pb-20 border-b border-surface">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-8">
            Option A — Clean Typography Only
          </p>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <h2
            className="heading-tight text-2xl md:text-3xl text-foreground"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            {sampleH2}
          </h2>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <h2
            className="heading-tight text-2xl md:text-3xl text-foreground"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            {sampleH2b}
          </h2>
          <p className="text-muted leading-relaxed">{sampleBody}</p>
        </section>

        {/* Option B: Thin overline accent */}
        <section className="mb-20 pb-20 border-b border-surface">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-8">
            Option B — Thin Overline Accent
          </p>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <div style={{ marginTop: "4rem", marginBottom: "1.5rem" }}>
            <div
              className="bg-brand/50 rounded-full"
              style={{ width: "2rem", height: "2px", marginBottom: "0.75rem" }}
            />
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground">
              {sampleH2}
            </h2>
          </div>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <div style={{ marginTop: "4rem", marginBottom: "1.5rem" }}>
            <div
              className="bg-brand/50 rounded-full"
              style={{ width: "2rem", height: "2px", marginBottom: "0.75rem" }}
            />
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground">
              {sampleH2b}
            </h2>
          </div>
          <p className="text-muted leading-relaxed">{sampleBody}</p>
        </section>

        {/* Option C: Small ornament above */}
        <section className="mb-20 pb-20 border-b border-surface">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-8">
            Option C — Centered Ornament
          </p>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <div
            className="text-center"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            <span
              className="text-mid/60 select-none"
              style={{ fontSize: "0.65rem", letterSpacing: "0.5em" }}
              aria-hidden="true"
            >
              &#x2726;&ensp;&#x2726;&ensp;&#x2726;
            </span>
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground mt-4">
              {sampleH2}
            </h2>
          </div>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <div
            className="text-center"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            <span
              className="text-mid/60 select-none"
              style={{ fontSize: "0.65rem", letterSpacing: "0.5em" }}
              aria-hidden="true"
            >
              &#x2726;&ensp;&#x2726;&ensp;&#x2726;
            </span>
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground mt-4">
              {sampleH2b}
            </h2>
          </div>
          <p className="text-muted leading-relaxed">{sampleBody}</p>
        </section>

        {/* Option D: Subtle background strip */}
        <section className="mb-20">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-8">
            Option D — Background Strip
          </p>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <h2
            className="heading-tight text-2xl md:text-3xl text-foreground bg-brand-light/30 -mx-4 px-4 py-3 rounded-lg"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            {sampleH2}
          </h2>
          <p className="text-muted leading-relaxed mb-6">{sampleBody}</p>
          <h2
            className="heading-tight text-2xl md:text-3xl text-foreground bg-brand-light/30 -mx-4 px-4 py-3 rounded-lg"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            {sampleH2b}
          </h2>
          <p className="text-muted leading-relaxed">{sampleBody}</p>
        </section>
      </div>
    </main>
  );
}
