import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-3xl mx-auto">
        <Image
          src="/images/eu.jpg"
          alt="Alex Bancu"
          width={72}
          height={72}
          className="rounded-full object-cover w-[72px] h-[72px] mx-auto mb-6 shadow-sm animate-fade-up"
          priority
        />

        <h1 className="heading-tight text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-4 animate-fade-up animate-delay-100">
          I coach people sometimes.
        </h1>

        <p className="font-sub text-lg md:text-xl text-muted font-normal leading-relaxed max-w-2xl mx-auto animate-fade-up animate-delay-200">
          I&apos;ve had conversations with engineers, founders, and friends
          who felt stuck. Some of them say it changed something.
          I&apos;m still figuring it out too.
        </p>
      </div>
    </section>
  );
}
