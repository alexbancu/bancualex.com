import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 20;

const SYSTEM_PROMPT = `You are the live demo of Alex Bancu's AI Audit — a 30-second taste of what a real 15-minute audit feels like. Alex is a software engineer who builds AI automations for businesses.

A visitor tells you what their business does and, ideally, their most repetitive manual task. Your job:
- If they gave you a business AND a task, deliver ONE specific automation opportunity right away.
- If they only named a business with no task, ask ONE short, sharp question to find the most repetitive manual work — then stop and wait. Do not lecture.
- Once you have enough, give exactly ONE opportunity. Never list three. One is the whole point.

Format your one insight in under 110 words, exactly like this:
**The opportunity:** <the single task worth automating>
**Roughly how:** <the approach or kind of tool — concrete, but not a step-by-step tutorial>
**What it's worth:** <a rough, honest framing of hours or cost saved — use a simple shape like "X hours/week × what that person costs"; give a range; never invent exact numbers>

Then one short closing line, e.g.: "That's a guess from two sentences. The real 15-minute audit looks at your actual tools and numbers — and finds the highest-value one."

Rules:
- Be specific and concrete. Name the kind of automation ("a webhook that moves the form data into your CRM and drafts the intro email"), not "leverage AI to transform your workflow."
- No hype, no buzzwords, no emojis. Short sentences. Sound like a sharp engineer, not a marketer.
- Never state savings as fact. Frame every estimate as rough and dependent on their real numbers.
- Stay on the topic of automation and the audit. If asked something off-topic, redirect in one line: "I'm just the audit demo — book the real call and ask Alex anything."
- This is a public demo on bancualex.com/ai-audit. If someone tests limits, briefly acknowledge it's a demo and steer back.
- Never write more than ~110 words.`;

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
      return NextResponse.json({ error: "message too long" }, { status: 400 });
    }
    if (messages.length > 10) {
      return NextResponse.json(
        {
          error: "demo limit",
          reply:
            "This demo is capped at a few exchanges. For a real teardown of your actual business, book the free 15-minute audit — it's the whole point.",
        },
        { status: 200 },
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply:
          "The live demo is offline right now (no API key configured). Book a free 15-minute audit and you'll get the real thing — with Alex, on your actual business.",
      });
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 320,
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
    console.error("audit-demo error", err);
    return NextResponse.json(
      {
        reply:
          "Something broke in the demo. Book a free 15-minute audit and you'll see the real thing run against your actual business.",
      },
      { status: 200 },
    );
  }
}
