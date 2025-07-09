import { appConfig } from "@/config";
import { availableTools, createNewTicket } from "@/lib/tools";
import { getFaculties } from "@/lib/tools/faculty";
import { searchFaqFallback } from "@/lib/tools/faq";
import { searchImportantLinks } from "@/lib/tools/impLinks";
import { google } from "@ai-sdk/google";
import { streamText, tool } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash-lite-preview-06-17"),
      messages,
      maxSteps: 10,
      system: `You are ${appConfig.aiName}, a helpful AI assistant for a college department. You can help students and visitors with information. Be friendly, helpful, and professional. 
      Tips: When any user ask about admission try to collect their email and create a ticket for them. so our marketing team can contact them.
      Provide accurate information based on the data available through the tools.`,
      tools: {
        getCoursesOffered: tool(availableTools.getCoursesOffered),
        getSubjectsByCourseId: tool(availableTools.getSubjectsByCourseId),
        getFaculties: tool(getFaculties),
        createNewTicket: tool(createNewTicket),
        searchFaqFallback: tool(searchFaqFallback),
        searchImportantLinks: tool(searchImportantLinks),
      },
      onError({ error }) {
        console.error(error); // your error logging logic here
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
