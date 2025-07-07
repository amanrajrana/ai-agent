import { availableTools } from "@/lib/tools";
import { google } from "@ai-sdk/google";
import { streamText, tool } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      messages,
      maxSteps: 10,
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
        // getTeacherInfo: tool(tools.createSupportTicket),
        // getFeeStructure: tool(tools.getFeeStructure),
        // getSyllabus: tool(tools.getSyllabus),
        // getAdmissionProcess: tool(tools.getAdmissionProcess),
        // getImportantLinks: tool(tools.getImportantLinks),
        getCoursesOffered: tool(availableTools.getCoursesOffered),
        getSubjectsByCourseId: tool(availableTools.getSubjectsByCourseId),
        // createSupportTicket: tool(tools.createSupportTicket),
        // getFacultyInfo: tool(tools.getFacultyInfo),
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
