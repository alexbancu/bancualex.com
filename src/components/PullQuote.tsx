export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-10 py-6 border-t border-b border-brand/15 text-center">
      <p className="font-display text-xl md:text-2xl leading-snug italic text-foreground/80 max-w-lg mx-auto">
        {children}
      </p>
    </aside>
  );
}
