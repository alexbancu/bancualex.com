import BookCallButton from "./BookCallButton";
import SubstackSubscribe from "./SubstackSubscribe";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
          Let&apos;s talk about what&apos;s actually going on.
        </h2>

        <p className="font-sub text-lg md:text-xl text-muted mb-10">
          30 minutes. Free. No pitch. Just an honest conversation about where you are.
        </p>

        <BookCallButton label="Book a free intro call" />

        <div className="mt-14 pt-10 border-t border-gray-200 max-w-sm mx-auto">
          <p className="text-sm text-muted mb-1">
            Want to think on it?
          </p>
          <p className="text-sm text-muted mb-4">
            My Substack is where I break down the patterns behind stuckness.
          </p>
          <SubstackSubscribe />
        </div>
      </div>
    </section>
  );
}
