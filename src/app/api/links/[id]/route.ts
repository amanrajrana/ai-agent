import { db } from "@/client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const importantLink = await db.importantLink.update({
      where: { id: params.id },
      data: {
        title: data.title,
        url: data.url,
        category: data.category,
        isActive: data.isActive,
      },
    });
    return NextResponse.json(importantLink);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update Important Link" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await db.importantLink.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete FAQ" },
      { status: 500 }
    );
  }
}
