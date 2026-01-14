import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const thread = await prisma.thread.findUnique({
      where: { id },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    });
    if (!thread) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(thread);
  } catch (e) {
    console.error("thread get error", e);
    return NextResponse.json({ error: "Unable to fetch thread" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const body: { reviewed?: boolean; contacted?: boolean } = await req.json();
    if (typeof body.reviewed !== "boolean" && typeof body.contacted !== "boolean") {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    const data: Record<string, unknown> = {};
    if (typeof body.reviewed === "boolean") data.reviewed = body.reviewed;
    if (typeof body.contacted === "boolean") {
      data.contacted = body.contacted;
      data.contactedAt = body.contacted ? new Date() : null;
    }

    const { id } = await context.params;
    const updated = await prisma.thread.update({ where: { id }, data });
    return NextResponse.json(updated);
  } catch (e) {
    console.error("thread patch error", e);
    return NextResponse.json({ error: "Unable to update thread" }, { status: 500 });
  }
}
