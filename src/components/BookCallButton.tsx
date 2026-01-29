interface BookCallButtonProps {
  label?: string;
  className?: string;
}

export default function BookCallButton({
  label = "Book a Call",
  className = "",
}: BookCallButtonProps) {
  return (
    <a
      href="https://calendar.app.google/Y6XTsHepCVmwvaya7"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-3.5 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto sm:min-w-[11rem] ${className}`}
    >
      {label}
    </a>
  );
}
