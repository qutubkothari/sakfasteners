import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

function parseBool(v: string | null): boolean | undefined {
  if (v === null || v === undefined) return undefined;
  if (v.toLowerCase() === "true") return true;
  if (v.toLowerCase() === "false") return false;
  return undefined;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const reviewedParam = searchParams.get("reviewed");
    const contactedParam = searchParams.get("contacted");

    const where: {
      createdAt?: { gte?: Date; lte?: Date };
      reviewed?: boolean;
      contacted?: boolean;
    } = {};

    if (from || to) {
      where.createdAt = {};
      if (from) where.createdAt.gte = new Date(from);
      if (to) where.createdAt.lte = new Date(to);
    }

    const reviewed = reviewedParam ? parseBool(reviewedParam) : undefined;
    if (typeof reviewed === "boolean") where.reviewed = reviewed;

    const contacted = contactedParam ? parseBool(contactedParam) : undefined;
    if (typeof contacted === "boolean") where.contacted = contacted;

    const threads = await prisma.thread.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        messages: { orderBy: { createdAt: "desc" }, take: 1 },
        _count: { select: { messages: true } },
      },
    });

    const data = threads.map((t) => ({
      id: t.id,
      name: t.name,
      phone: t.phone,
      createdAt: t.createdAt,
      reviewed: t.reviewed,
      contacted: t.contacted,
      contactedAt: t.contactedAt,
      messageCount: t._count.messages,
      lastMessagePreview: t.messages[0]?.content?.slice(0, 200) ?? "",
    }));

    return NextResponse.json({ items: data });
  } catch (e) {
    console.error("threads list error", e);
    return NextResponse.json({ error: "Unable to fetch threads" }, { status: 500 });
  }
}
