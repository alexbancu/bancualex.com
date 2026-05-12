"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  patientName?: string;
}

const SEED_MESSAGES: Message[] = [
  {
    role: "user",
    patientName: "Sarah · Manchester",
    content:
      "Hi, I'm looking at getting All-on-4 implants. Could you give me a rough idea of cost and availability? Flying from UK, would need 2 trips.",
  },
  {
    role: "assistant",
    content:
      "Hi Sarah, thanks for reaching out. All-on-4 is typically €4,500–6,500 per arch, including consultation, surgery and the provisional bridge. Two trips is correct — first ~5 days, second ~10 days, 3 months apart.\n\nTwo quick questions so I can give you a clean quote:\n• One arch or both?\n• Do you have a recent CBCT scan from your UK dentist? Saves us a step.\n\nWe have consultation slots Tue 20 May 14:00 UK time or Thu 22 May 10:30. Would either work for a 20-min video call with Dr. X before you fly? 🙂",
  },
];

const SUGGESTED: { label: string; text: string }[] = [
  { label: "Bună ziua, cât costă implanturile?", text: "Bună ziua, cât costă un implant unitar cu coroană?" },
  { label: "I want veneers", text: "Hi, I'm interested in veneers for my front teeth. How much and how long?" },
  { label: "Ich habe Zahnschmerzen", text: "Hallo, ich habe seit gestern starke Zahnschmerzen. Können Sie heute helfen?" },
];

function PatientBubble({ name, content }: { name?: string; content: string }) {
  return (
    <div className="flex flex-col items-end">
      {name && (
        <span className="text-[11px] text-[#667781] mb-0.5 pr-1">
          {name}
        </span>
      )}
      <div className="max-w-[85%] bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-md px-3.5 py-2 shadow-sm">
        <p className="text-[14px] leading-[1.4] whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function AIBubble({ content, typing }: { content: string; typing?: boolean }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[11px] text-[#667781] mb-0.5 pl-1">
        Clinica Demo · AI
      </span>
      <div className="max-w-[85%] bg-white text-[#111b21] rounded-2xl rounded-tl-md px-3.5 py-2 shadow-sm">
        {typing ? (
          <div className="flex gap-1 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#667781] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#667781] animate-pulse [animation-delay:0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#667781] animate-pulse [animation-delay:0.3s]" />
          </div>
        ) : (
          <p className="text-[14px] leading-[1.4] whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
}

export default function DemoChat() {
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
      // Strip patientName before sending — it's a UI hint only.
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/dental-demo", {
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
        setError("AI-ul nu a putut răspunde. Încearcă din nou.");
      }
    } catch {
      setError("Eroare de rețea. Demo-ul e live; reîncarcă pagina.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-[#efeae2] rounded-2xl border border-gray-200 overflow-hidden shadow-xl shadow-gray-900/10">
      {/* Header — WhatsApp Business styled */}
      <div className="bg-[#008069] text-white px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-base font-semibold">
          C
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[15px] leading-tight truncate">
            Clinica Demo
          </p>
          <p className="text-[12px] text-white/80 leading-tight">
            ● online · răspunde &lt;60 sec
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-widest bg-white/15 px-2 py-1 rounded">
          DEMO
        </span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[420px] sm:h-[460px] overflow-y-auto px-3 py-4 space-y-3 bg-[#efeae2]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        {messages.map((m, i) =>
          m.role === "user" ? (
            <PatientBubble key={i} name={m.patientName} content={m.content} />
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
        <div className="bg-white border-t border-gray-200 px-3 py-2 flex flex-wrap gap-1.5">
          <span className="text-[11px] text-[#667781] self-center mr-1">
            Încearcă:
          </span>
          {SUGGESTED.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => send(s.text)}
              disabled={loading}
              className="text-[12px] bg-[#f0f2f5] hover:bg-[#e6e9ec] text-[#111b21] px-2.5 py-1 rounded-full transition-colors disabled:opacity-50"
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
        className="bg-[#f0f2f5] px-3 py-3 flex items-end gap-2 border-t border-gray-200"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrie o cerere ca un pacient real..."
          maxLength={400}
          disabled={loading}
          className="flex-1 bg-white rounded-full px-4 py-2 text-[14px] text-[#111b21] placeholder-[#667781] focus:outline-none focus:ring-2 focus:ring-[#008069]/40 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Trimite"
          className="w-10 h-10 rounded-full bg-[#008069] hover:bg-[#006a57] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
