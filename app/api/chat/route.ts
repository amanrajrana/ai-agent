import { google } from "@ai-sdk/google"
import { streamText, tool } from "ai"
import { tools } from "@/lib/tools"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: google("gemini-1.5-pro"),
    messages,
    system: `You are a helpful AI assistant for a college department. You can help students and visitors with information about:
    - Teachers and their subjects, qualifications, contact details
    - Fee structures for different classes and years
    - Syllabus information for courses and subjects
    - Admission process, requirements, and deadlines
    - Important links and resources
    - Frequently asked questions

    When you cannot answer a question or when human assistance is clearly needed, use the createSupportTicket tool to generate a support ticket.

    Be friendly, helpful, and professional. Provide accurate information based on the data available through the tools.`,
    tools: {
      getTeacherInfo: tool(tools.getTeacherInfo),
      getFeeStructure: tool(tools.getFeeStructure),
      getSyllabusInfo: tool(tools.getSyllabusInfo),
      getAdmissionProcess: tool(tools.getAdmissionProcess),
      getImportantLinks: tool(tools.getImportantLinks),
      getFAQs: tool(tools.getFAQs),
      createSupportTicket: tool(tools.createSupportTicket),
    },
  })

  return result.toDataStreamResponse()
}
