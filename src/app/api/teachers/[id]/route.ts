import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db, Prisma } from "@/client";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const id = Number(params.id);
    const data = (await req.json()) as Prisma.FacultyUpdateInput;

    const teacher = await db.faculty.update({
      where: { id },
      data,
    });
    return NextResponse.json(teacher);
  } catch (error) {
    console.log("failed to update: ", error);
    return NextResponse.json(
      { error: "Failed to update teacher" },
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
    const id = Number(params.id);
    await db.faculty.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete teacher" },
      { status: 500 }
    );
  }
}
