import { prisma } from "./prisma"
import { z } from "zod"

export const tools = {
  getTeacherInfo: {
    description: "Get information about teachers, their subjects, qualifications, and contact details",
    parameters: z.object({
      subject: z.string().optional().describe("Subject name to filter teachers"),
      name: z.string().optional().describe("Teacher name to search for"),
    }),
    execute: async ({ subject, name }: { subject?: string; name?: string }) => {
      const teachers = await prisma.teacher.findMany({
        where: {
          AND: [
            subject ? { subject: { contains: subject, mode: "insensitive" } } : {},
            name ? { name: { contains: name, mode: "insensitive" } } : {},
          ],
        },
      })
      return teachers
    },
  },

  getFeeStructure: {
    description: "Get fee structure information for different classes and years",
    parameters: z.object({
      className: z.string().optional().describe("Class name to get fees for"),
      year: z.string().optional().describe("Academic year"),
    }),
    execute: async ({ className, year }: { className?: string; year?: string }) => {
      const fees = await prisma.feeStructure.findMany({
        where: {
          AND: [
            className ? { className: { contains: className, mode: "insensitive" } } : {},
            year ? { year: { contains: year, mode: "insensitive" } } : {},
          ],
        },
      })
      return fees
    },
  },

  getSyllabusInfo: {
    description: "Get syllabus information for courses, subjects, and topics",
    parameters: z.object({
      course: z.string().optional().describe("Course name"),
      subject: z.string().optional().describe("Subject name"),
      year: z.string().optional().describe("Academic year"),
    }),
    execute: async ({ course, subject, year }: { course?: string; subject?: string; year?: string }) => {
      const syllabus = await prisma.syllabus.findMany({
        where: {
          AND: [
            course ? { course: { contains: course, mode: "insensitive" } } : {},
            subject ? { subject: { contains: subject, mode: "insensitive" } } : {},
            year ? { year: { contains: year, mode: "insensitive" } } : {},
          ],
        },
      })
      return syllabus
    },
  },

  getAdmissionProcess: {
    description: "Get admission process steps, requirements, and deadlines",
    parameters: z.object({}),
    execute: async () => {
      const admissionSteps = await prisma.admissionProcess.findMany({
        where: { isActive: true },
        orderBy: { step: "asc" },
      })
      return admissionSteps
    },
  },

  getImportantLinks: {
    description: "Get important links and resources",
    parameters: z.object({
      category: z.string().optional().describe("Category of links to filter"),
    }),
    execute: async ({ category }: { category?: string }) => {
      const links = await prisma.importantLink.findMany({
        where: {
          AND: [{ isActive: true }, category ? { category: { contains: category, mode: "insensitive" } } : {}],
        },
      })
      return links
    },
  },

  getFAQs: {
    description: "Get frequently asked questions and answers",
    parameters: z.object({
      category: z.string().optional().describe("Category of FAQs to filter"),
      question: z.string().optional().describe("Search in questions"),
    }),
    execute: async ({ category, question }: { category?: string; question?: string }) => {
      const faqs = await prisma.fAQ.findMany({
        where: {
          AND: [
            { isActive: true },
            category ? { category: { contains: category, mode: "insensitive" } } : {},
            question ? { question: { contains: question, mode: "insensitive" } } : {},
          ],
        },
      })
      return faqs
    },
  },

  createSupportTicket: {
    description: "Create a support ticket when the AI cannot help or human assistance is needed",
    parameters: z.object({
      title: z.string().describe("Brief title of the issue"),
      description: z.string().describe("Detailed description of the issue"),
      category: z.string().describe("Category like Academic, Technical, Administrative"),
      studentName: z.string().optional().describe("Student name if provided"),
      studentEmail: z.string().optional().describe("Student email if provided"),
      priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
    }),
    execute: async ({
      title,
      description,
      category,
      studentName,
      studentEmail,
      priority,
    }: {
      title: string
      description: string
      category: string
      studentName?: string
      studentEmail?: string
      priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
    }) => {
      const ticket = await prisma.supportTicket.create({
        data: {
          title,
          description,
          category,
          studentName,
          studentEmail,
          priority,
        },
      })
      return {
        success: true,
        ticketId: ticket.id,
        message: "Support ticket created successfully. Our team will get back to you soon.",
      }
    },
  },
}
