import BookCallButton from "./BookCallButton";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="font-sub text-sm md:text-base font-medium tracking-[0.2em] uppercase text-brand mb-6 animate-fade-up">
          Mind Design Studio
        </p>

        <h1 className="heading-tight text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-6 animate-fade-up animate-delay-100">
          The overthinking isn&apos;t the problem. It&apos;s a smoke signal.
        </h1>

        <p className="font-sub text-lg md:text-xl text-muted font-normal leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200">
          Coaching for people in tech who look fine on the outside
          but feel stuck, foggy, or running on empty.
        </p>

        <div className="animate-fade-up animate-delay-300">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
