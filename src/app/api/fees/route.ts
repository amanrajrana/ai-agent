import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const fees = await prisma.feeStructure.findMany({
      orderBy: { className: "asc" },
    })
    return NextResponse.json(fees)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fee structures" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await req.json()
    const fee = await prisma.feeStructure.create({
      data: {
        className: data.className,
        year: data.year,
        tuitionFee: Number.parseFloat(data.tuitionFee),
        labFee: data.labFee ? Number.parseFloat(data.labFee) : null,
        libraryFee: data.libraryFee ? Number.parseFloat(data.libraryFee) : null,
        examFee: data.examFee ? Number.parseFloat(data.examFee) : null,
        otherFees: data.otherFees ? Number.parseFloat(data.otherFees) : null,
        totalFee: Number.parseFloat(data.totalFee),
        description: data.description,
      },
    })
    return NextResponse.json(fee)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create fee structure" }, { status: 500 })
  }
}
