import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const tickets = await prisma.supportTicket.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(tickets)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tickets" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id, status, assignedTo, resolution } = await req.json()
    const ticket = await prisma.supportTicket.update({
      where: { id },
      data: {
        status,
        assignedTo,
        resolution,
      },
    })
    return NextResponse.json(ticket)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update ticket" }, { status: 500 })
  }
}
