import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 mb-10">
          <div className="shrink-0">
            <Image
              src="/images/alex-profile.jpg"
              alt="Alex Bancu, Mind Design Studio coach"
              width={280}
              height={280}
              className="rounded-full border-4 border-brand object-cover w-52 h-52 md:w-64 md:h-64 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
              Hi, I&apos;m Alex.
            </h2>
          </div>
        </div>

        <div className="space-y-6 text-base md:text-lg text-muted leading-relaxed">
          <p>
            I spent 8+ years as a software engineer. Good salary, remote work,
            total flexibility. I looked productive. Inside, I was running on
            self-criticism and calling it discipline.
          </p>

          <p>
            I started paying attention to what I was actually feeling instead of
            managing it. Therapy, journaling, hard conversations. The fog
            lifted. Decisions got easier. I stopped forcing and started noticing.
          </p>

          <p>
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
