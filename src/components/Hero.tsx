import Image from "next/image";
import BookCallButton from "./BookCallButton";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <Image
          src="/images/eu.jpg"
          alt="Alex Bancu"
          width={72}
          height={72}
          className="rounded-full object-cover w-[72px] h-[72px] mx-auto mb-8 shadow-sm animate-fade-up"
          priority
        />

        <h1 className="heading-tight text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-6 animate-fade-up animate-delay-100">
          The overthinking isn&apos;t the problem. It&apos;s a smoke signal.
        </h1>

        <p className="font-sub text-lg md:text-xl text-muted font-normal leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200">
          Coaching for people in tech who look fine on paper but feel stuck, foggy, or drained.
        </p>

        <div className="flex flex-col items-center gap-3 animate-fade-up animate-delay-300">
          <BookCallButton label="Book a free intro call" />
          <p className="text-xs text-mid">
            30+ engineers, founders, and creatives coached
          </p>
        </div>

        <p className="mt-6 text-sm text-muted animate-fade-up animate-delay-300">
          Not sure yet? Keep reading. It&apos;ll make sense in a minute.
        </p>

        {/* Scroll cue */}
        <div className="mt-6 animate-fade-up animate-delay-400">
          <svg
            className="w-5 h-5 mx-auto text-mid animate-bounce"
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
        </div>
      </div>
    </section>
  );
}
