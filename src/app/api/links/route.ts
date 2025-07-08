import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/client";

export async function GET() {
  try {
    const importantLinks = await db.importantLink.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(importantLinks);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Important Links" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const importantLink = await db.importantLink.create({ data });
    return NextResponse.json(importantLink, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Important Link" },
      { status: 500 }
    );
  }
}
