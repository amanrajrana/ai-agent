import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await req.json()
    const teacher = await prisma.teacher.update({
      where: { id: params.id },
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
    return NextResponse.json({ error: "Failed to update teacher" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await prisma.teacher.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete teacher" }, { status: 500 })
  }
}
