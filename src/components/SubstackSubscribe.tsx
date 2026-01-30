"use client";

import { useState, useRef, FormEvent } from "react";

export default function SubstackSubscribe() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    if (!email || !iframeRef.current?.contentWindow) return;

    setStatus("submitting");

    function onMessage(event: MessageEvent) {
      if (event.data?.success) {
        window.removeEventListener("message", onMessage);
        setStatus("success");
      }
    }
    window.addEventListener("message", onMessage);

    iframeRef.current.contentWindow.postMessage({ email }, "*");

    // Fallback if no response after 3s
    setTimeout(() => {
      window.removeEventListener("message", onMessage);
      setStatus((prev) => (prev === "submitting" ? "success" : prev));
    }, 3000);
  }

  if (status === "success") {
    return (
      <div className="text-center space-y-2">
        <p className="text-brand font-medium text-sm">
          Almost there. Check your inbox and confirm your email.
        </p>
        <p className="text-xs text-mid">
          Not seeing it? Check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="AhrefsAnalytics-event-SubstackSubscribe flex gap-2 justify-center items-center max-w-sm mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          disabled={status === "submitting"}
          className="flex-1 h-10 px-4 rounded-lg bg-surface text-foreground placeholder:text-mid border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 text-sm disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-semibold rounded-lg h-10 px-5 text-sm transition-colors cursor-pointer disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </form>
      <iframe
        ref={iframeRef}
        src="/substack-subscribe.html"
        style={{ display: "none" }}
        title="Substack subscribe"
      />
    </>
  );
}
