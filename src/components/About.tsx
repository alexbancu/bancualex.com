import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-surface overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand/20" />

      <div className="max-w-3xl mx-auto">
        {/* Top: image + name side by side on a subtle card */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-14 animate-fade-up">
          {/* Photo with layered frame effect */}
          <div className="relative shrink-0 group">
            <div className="absolute -inset-2 rounded-full border border-brand/10 transition-all duration-500 group-hover:scale-105 group-hover:border-brand/20" />
            <Image
              src="/images/alex-profile.jpg"
              alt="Alex Bancu, Mind Design Studio coach"
              width={280}
              height={280}
              className="relative rounded-full object-cover w-40 h-40 md:w-48 md:h-48 shadow-[0_8px_40px_rgba(26,92,46,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>

          {/* Name + intro line */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-mid mb-3">
              About
            </p>
            <h2 className="heading-tight text-3xl md:text-4xl text-foreground mb-3">
              Hi, I&apos;m Alex.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-sm">
              Software engineer turned coach. I work with overthinkers.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14 animate-fade-up animate-delay-100">
          <div className="flex-1 h-px bg-brand/10" />
          <span className="text-brand/30 text-lg">&#9674;</span>
          <div className="flex-1 h-px bg-brand/10" />
        </div>

        {/* Story paragraphs — staggered */}
        <div className="space-y-8 max-w-xl mx-auto">
          <p className="text-base md:text-lg text-muted leading-[1.8] animate-fade-up animate-delay-200">
            I spent 8+ years as a software engineer. Good salary, remote work,
            total flexibility. I looked productive. Inside, I was running on
            self-criticism and calling it discipline.
          </p>

          <p className="text-base md:text-lg text-muted leading-[1.8] animate-fade-up animate-delay-300">
            I started paying attention to what I was actually feeling instead of
            managing it. Therapy, journaling, hard conversations. The fog
            lifted. Decisions got easier. I stopped forcing and started noticing.
          </p>

          <p className="text-base md:text-lg text-muted leading-[1.8] animate-fade-up animate-delay-400">
            People asked me to help them do the same. That became coaching{" "}
            <strong className="text-foreground font-semibold">
              30+ people
            </strong>{" "}
            through the same patterns. Engineers, founders, creatives. Smart
            people who were stuck in loops they couldn&apos;t think their way out of.
          </p>
        </div>
      </div>
    </section>
  );
}
