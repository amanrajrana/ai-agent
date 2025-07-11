import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/client";

export async function GET() {
  try {
    const teachers = await db.faculty.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        name: true,
        qualification: true,
        designation: true,
        experience: true,
        contact_email: true,
        FacultySubject: {
          select: {
            subjectCode: true,
          },
        },
      },
    });

    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
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
    const teacher = await db.faculty.create({ data });
    return NextResponse.json(teacher);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create teacher" },
      { status: 500 }
    );
  }
}
