import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: { name: "asc" },
    })
    return NextResponse.json(teachers)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch teachers" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await req.json()
    const teacher = await prisma.teacher.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        department: data.department,
        experience: Number.parseInt(data.experience),
        qualifications: data.qualifications,
        classes: data.classes || [],
        phone: data.phone,
        office: data.office,
      },
    })
    return NextResponse.json(teacher)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create teacher" }, { status: 500 })
  }
}
