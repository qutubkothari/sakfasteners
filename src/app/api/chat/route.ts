import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import dotenv from "dotenv";

// Ensure server loads env from .env.local in production
if (process.env.NODE_ENV === "production") {
  try {
    dotenv.config({ path: ".env.local" });
  } catch {}
}

export const runtime = "nodejs";

const systemPrompt = `You are the SAK Fasteners AI sales assistant. Behave like a concise, helpful human sales engineer.
Company: SAK Fasteners LLP (founded 2014), Ahmedabad head office; Dubai branch for Middle East support.
Products: Nylon Frame Anchors (8mm/10mm), Plastic Wall Plugs, Self Drilling Screws (up to 5mm steel), Self Tapping Screws (MS + SS 202/304/316), Drywall Screws (black zinc), Rack Bolts (10mm with 14x75mm plugs).
Regions: India, UAE, Saudi, Oman. Materials: 100% virgin plastic for anchors/plugs; stainless steel options for corrosion resistance.
Quality: Provides QA docs on request; fast delivery 2-5 business days for in-stock SKUs; bulk lead times on request.
Contact: India +91 7737835253, WhatsApp +91 9106886259, Dubai +971 507055253, email sales@sakfasteners.com.
Tone: warm, direct, professional. Keep answers tight (under ~120 words). Offer a next step or clarifying question when useful. If user asks for pricing/specs, ask for size/quantity/application and phone/email to respond.`;

type LLMProvider = "openai" | "deepseek";

type ChatRequest = {
  message: string;
  threadId?: string;
  name?: string;
  phone?: string;
  email?: string;
  source?: string;
};

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

function resolveProvider(): LLMProvider | null {
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.DEEPSEEK_API_KEY) return "deepseek";
  return null;
}

async function callLLM(messages: ChatMessage[], provider: LLMProvider) {
  const isOpenAI = provider === "openai";
  const url = isOpenAI
    ? "https://api.openai.com/v1/chat/completions"
    : "https://api.deepseek.com/chat/completions";
  const model = isOpenAI
    ? process.env.OPENAI_MODEL ?? "gpt-4o-mini"
    : process.env.DEEPSEEK_MODEL ?? "deepseek-chat";
  const apiKey = isOpenAI ? process.env.OPENAI_API_KEY : process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    throw new Error("LLM API key missing");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.6,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LLM error: ${response.status} ${errorText}`);
  }

  const json = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  const reply = json.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("LLM returned empty reply");
  }

  return reply;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequest;

    if (!body.message || !body.message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const provider = resolveProvider();
    if (!provider) {
      return NextResponse.json({ error: "No LLM provider configured" }, { status: 500 });
    }

    const sanitizedName = body.name?.slice(0, 80);
    const sanitizedPhone = body.phone?.slice(0, 40);
    const sanitizedEmail = body.email?.slice(0, 120);

    const extractPhone = (text: string): string | undefined => {
      const cleaned = text.replace(/[\u200B-\u200D\uFEFF]/g, "");
      // Match Indian numbers: 10 digits with optional +91 or 0 prefix
      // Also match UAE numbers: 9 digits with +971 prefix
      const patterns = [
        /(?:^|\s)(\+91[\s-]?[6-9]\d{9})(?:\s|$)/,  // +91 with 10 digits
        /(?:^|\s)(91[\s-]?[6-9]\d{9})(?:\s|$)/,    // 91 with 10 digits
        /(?:^|\s)([6-9]\d{9})(?:\s|$)/,            // 10 digits starting with 6-9
        /(?:^|\s)(\+971[\s-]?[0-9]{9})(?:\s|$)/,   // UAE +971
      ];
      
      for (const pattern of patterns) {
        const m = cleaned.match(pattern);
        if (m) {
          let phone = m[1].replace(/[\s-]/g, "");
          // Normalize: ensure +91 prefix for Indian numbers
          if (/^[6-9]\d{9}$/.test(phone)) {
            phone = "+91" + phone;
          } else if (/^91[6-9]\d{9}$/.test(phone)) {
            phone = "+" + phone;
          } else if (!phone.startsWith("+")) {
            phone = "+" + phone;
          }
          return phone;
        }
      }
      return undefined;
    };

    const extractEmail = (text: string): string | undefined => {
      const m = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
      return m ? m[0] : undefined;
    };

    const existingThread = body.threadId
      ? await prisma.thread.findUnique({
          where: { id: body.threadId },
          include: { messages: { orderBy: { createdAt: "asc" } } },
        })
      : null;

    const thread =
      existingThread ??
      (await prisma.thread.create({
        data: {
          name: sanitizedName,
          phone: sanitizedPhone,
          email: sanitizedEmail,
        },
        include: { messages: true },
      }));

    await prisma.message.create({
      data: {
        role: "user",
        content: body.message.trim(),
        threadId: thread.id,
      },
    });

    const autoPhone = !thread.phone ? extractPhone(body.message) : undefined;
    const autoEmail = !thread.email ? extractEmail(body.message) : undefined;
    if (autoPhone || autoEmail || sanitizedName || sanitizedPhone || sanitizedEmail) {
      await prisma.thread.update({
        where: { id: thread.id },
        data: {
          name: thread.name ?? sanitizedName,
          phone: thread.phone ?? sanitizedPhone ?? autoPhone,
          email: thread.email ?? sanitizedEmail ?? autoEmail,
        },
      });
    }

    const recentMessages = [...(thread.messages ?? []), { role: "user", content: body.message.trim() }]
      .slice(-10)
      .map((m) => ({ 
        role: (m.role === "assistant" ? "assistant" : "user") as "user" | "assistant", 
        content: m.content 
      }));

    const llmMessages: ChatMessage[] = [{ role: "system", content: systemPrompt }, ...recentMessages];
    const reply = await callLLM(llmMessages, provider);

    await prisma.message.create({
      data: {
        role: "assistant",
        content: reply,
        threadId: thread.id,
      },
    });

    return NextResponse.json({ threadId: thread.id, reply });
  } catch (error) {
    console.error("Chat route error", error);
    return NextResponse.json({ error: "Unable to process message" }, { status: 500 });
  }
}
