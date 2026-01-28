"use client";

import { FormEvent } from "react";

export default function NewsletterForm({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className={`lander-form ${className ?? ""}`}
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
      style={style}
    >
      <input
        type="email"
        className="lander-input"
        placeholder="Your email address"
        aria-label="Email address"
        required
      />
      <button type="submit" className="lander-subscribe-btn">
        Subscribe
      </button>
    </form>
  );
}
