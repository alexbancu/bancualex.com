"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  bizLabel?: string;
}

const SEED_MESSAGES: Message[] = [
  {
    role: "user",
    bizLabel: "Accounting firm",
    content:
      "We're a small accounting firm. Every month-end, two people manually pull figures from emails and receipts into spreadsheets and chase clients for the documents they forgot to send.",
  },
  {
    role: "assistant",
    content:
      "**The opportunity:** The month-end document chase — collecting, sorting, and nudging clients for missing receipts.\n\n**Roughly how:** One intake inbox or form that auto-files each document by client, plus a scheduled bot that emails only the clients still missing items.\n\n**What it's worth:** If two people spend ~6 hours each at month-end, that's ~12 hours of senior-staff time, every month — before you count the errors from manual entry.\n\nThat's a guess from two sentences. The real 15-minute audit looks at your actual tools and numbers, and finds the highest-value one.",
  },
];

const SUGGESTED: { label: string; text: string }[] = [
  {
    label: "Law firm",
    text: "We're a 4-person law firm. Every new inquiry, someone copies the details from our website contact form into our case system and sends a templated intro email by hand.",
  },
  {
    label: "E-commerce store",
    text: "We run a small e-commerce store. All day we manually answer the same 'where's my order' and returns questions across email and Instagram DMs.",
  },
  {
    label: "Marketing agency",
    text: "We're a 6-person marketing agency. We rebuild the same client report in Google Slides every month by copy-pasting numbers from four different dashboards.",
  },
];

// Minimal bold-and-newline renderer so the **labels** in the AI reply render.
function renderContent(text: string) {
  return text.split("\n").map((line, li) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={li} className={li > 0 ? "mt-2" : ""}>
        {parts.map((p, pi) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={pi} className="text-foreground font-semibold">
              {p.slice(2, -2)}
            </strong>
          ) : (
            <span key={pi}>{p}</span>
          ),
        )}
      </p>
    );
  });
}

function UserBubble({ label, content }: { label?: string; content: string }) {
  return (
    <div className="flex flex-col items-end">
      {label && (
        <span className="text-[11px] text-muted mb-0.5 pr-1">{label}</span>
      )}
      <div className="max-w-[88%] bg-brand-light text-foreground rounded-2xl rounded-tr-md px-3.5 py-2.5">
        <p className="text-[14px] leading-[1.45] whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
}

function AIBubble({ content, typing }: { content: string; typing?: boolean }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[11px] text-muted mb-0.5 pl-1">Audit · AI</span>
      <div className="max-w-[92%] bg-white text-muted rounded-2xl rounded-tl-md px-3.5 py-2.5 border border-gray-200">
        {typing ? (
          <div className="flex gap-1 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-mid animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-mid animate-pulse [animation-delay:0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-mid animate-pulse [animation-delay:0.3s]" />
          </div>
        ) : (
          <div className="text-[14px] leading-[1.45]">
            {renderContent(content)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AuditDemo() {
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput("");
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/audit-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setError("The AI couldn't respond. Try again.");
      }
    } catch {
      setError("Network error. The demo is live — reload the page.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-surface rounded-2xl border border-gray-200 overflow-hidden shadow-xl shadow-gray-900/10">
      {/* Header */}
      <div className="bg-brand text-white px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[15px] leading-tight truncate">
            AI Audit
          </p>
          <p className="text-[12px] text-white/80 leading-tight flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            live · finds one thing to automate
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-widest bg-white/15 px-2 py-1 rounded">
          DEMO
        </span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[420px] sm:h-[460px] overflow-y-auto px-3 py-4 space-y-4 bg-surface"
      >
        {messages.map((m, i) =>
          m.role === "user" ? (
            <UserBubble key={i} label={m.bizLabel} content={m.content} />
          ) : (
            <AIBubble key={i} content={m.content} />
          ),
        )}
        {loading && <AIBubble content="" typing />}
        {error && (
          <p className="text-center text-[12px] text-red-700 bg-red-50 py-1 px-3 rounded">
            {error}
          </p>
        )}
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="bg-white border-t border-gray-200 px-3 py-2.5 flex flex-wrap gap-1.5">
          <span className="text-[11px] text-muted self-center mr-1">Try:</span>
          {SUGGESTED.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => send(s.text)}
              disabled={loading}
              className="text-[12px] bg-surface hover:bg-brand-light text-foreground px-2.5 py-1 rounded-full transition-colors disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="bg-white px-3 py-3 flex items-end gap-2 border-t border-gray-200"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your business + most repetitive task…"
          maxLength={400}
          disabled={loading}
          className="flex-1 bg-surface rounded-full px-4 py-2 text-[14px] text-foreground placeholder-mid focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send"
          className="w-10 h-10 rounded-full bg-cta hover:bg-cta-hover text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
