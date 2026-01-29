import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-surface overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand/20" />

      <div className="max-w-3xl mx-auto">
        {/* Top: image + name side by side on a subtle card */}
        <div className="relative flex flex-col items-center gap-8 mb-14 animate-fade-up">
          {/* Photo with layered frame effect */}
          <div className="relative shrink-0 group">
            <div className="absolute -inset-2 rounded-full border border-brand/10 transition-all duration-500 group-hover:scale-105 group-hover:border-brand/20" />
            <Image
              src="/images/eu3.png"
              alt="Alex Bancu, coach"
              width={280}
              height={280}
              className="relative rounded-full object-cover w-40 h-40 md:w-48 md:h-48 shadow-[0_8px_40px_rgba(26,92,46,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ objectPosition: "center 20%" }}
              priority
            />
          </div>

          {/* Name + intro line */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-mid mb-3">
              About
            </p>
            <h2 className="heading-tight text-3xl md:text-4xl text-foreground mb-3">
              Hi, I&apos;m Alex.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-sm mx-auto">
              Software engineer. Dad. Coach. I work with overthinkers.
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
            self-criticism and calling it discipline. Until someone close to me
            said: &ldquo;You treat yourself worse than you&apos;d ever treat
            anyone else.&rdquo; I had no answer.
          </p>

          <p className="text-base md:text-lg text-muted leading-[1.8] animate-fade-up animate-delay-300">
            So I started paying attention to what I actually felt. Therapy,
            journaling, hard conversations. The anxiety quieted down. I started
            building things, putting myself out there, making decisions without
            the usual three-day argument in my head. My emotions had been
            telling me what was wrong. I just never paid attention.
          </p>

          <p className="text-base md:text-lg text-muted leading-[1.8] animate-fade-up animate-delay-400">
            I was already having deep conversations with people around me.
            The kind where someone says &ldquo;how did you figure that
            out?&rdquo; I decided to do it for real. That became coaching{" "}
            <strong className="text-foreground font-semibold">
              30+ people
            </strong>{" "}
            through the same patterns. Engineers, founders, creatives. People
            who check every box on paper and still feel stuck.
          </p>
        </div>
      </div>
    </section>
  );
}
