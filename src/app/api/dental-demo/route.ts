import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 20;

const SYSTEM_PROMPT = `You are the AI receptionist for a Romanian dental tourism clinic in Cluj-Napoca that serves international patients (UK, Ireland, Germany, Austria, Italy). You speak fluent Romanian, English, German, and Italian. You always reply in the same language the patient writes in.

YOUR JOB:
- Respond warmly and professionally in under 80 words.
- For procedure inquiries (All-on-4, implants, veneers, crowns, cleaning): give a realistic price range, ask 1-2 qualifying questions (one arch or both, urgency, existing scans), and offer 2 specific appointment slots (one weekday afternoon + one morning, both in the next 10 days).
- For booking: confirm the slot tentatively, mention you'll send an email confirmation.
- For aftercare or follow-ups: schedule promptly.

PRICING REFERENCES (per arch unless noted):
- All-on-4: €4,500-€6,500
- Single implant + crown: €700-€1,200
- Full veneer set (8 teeth): €3,000-€6,000
- Hygiene cleaning: €60-€100
- Consultation + X-ray: €50-€80

WHAT YOU NEVER DO:
- Never diagnose medical conditions.
- Never prescribe medication.
- Never speculate about pain causes — say "Dr. X will assess in person."
- For genuine urgencies (severe pain, bleeding, trauma): tell them to call the on-call number +40 7XX XXX XXX and that someone will respond within 15 minutes.
- Never answer questions unrelated to dental care (politics, weather, jokes, other topics) — politely redirect: "Mă ocup doar de programări și întrebări despre tratamentele clinicii."

DEMO MODE: This is a public live demo embedded on bancualex.com/clinici-stomatologice. Be helpful but if the visitor seems to be testing limits, you can briefly acknowledge it's a demo while staying in character.

TONE: Warm, professional, slightly informal. Match a friendly receptionist at a premium private clinic. Never use exclamation marks excessively. Never use emojis except a single 🙂 occasionally.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array required" },
        { status: 400 },
      );
    }

    const lastUser = messages[messages.length - 1];
    if (!lastUser || lastUser.role !== "user") {
      return NextResponse.json(
        { error: "last message must be from user" },
        { status: 400 },
      );
    }
    if (typeof lastUser.content !== "string" || lastUser.content.length > 500) {
      return NextResponse.json(
        { error: "message too long" },
        { status: 400 },
      );
    }
    if (messages.length > 12) {
      return NextResponse.json(
        {
          error: "demo limit",
          reply:
            "Demo-ul e limitat la 6 schimburi. Pentru o conversație completă cu AI-ul tunat pentru clinica ta, programează 20 min cu Alex.",
        },
        { status: 200 },
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply:
          "Demo-ul e momentan offline (cheia API nu e configurată). Programează un audit cu Alex să-l vezi live pe site-ul tău.",
      });
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 250,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const reply =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("dental-demo error", err);
    return NextResponse.json(
      {
        reply:
          "A apărut o eroare la demo. Programează o conversație cu Alex să vezi AI-ul rulând cu adevărat.",
      },
      { status: 200 },
    );
  }
}
