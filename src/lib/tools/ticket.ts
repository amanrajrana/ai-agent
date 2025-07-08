import { generateTicketId } from "@/utils";
import { db, Prisma } from "@/client";
import { TicketPriority } from "@/prisma/generated/enums";
import { z } from "zod";
import { sendNewTicketEmail } from "@/services/emails/new-ticket";

export const createNewTicket = {
  description: "Get a list of faculties with the provided details",
  name: "createNewTicket",
  parameters: z
    .object({
      title: z
        .string()
        .min(1)
        .max(100)
        .describe(
          "Title of the ticket. Don't ask for the title, just provide it"
        ),
      description: z
        .string()
        .min(1)
        .max(500)
        .describe("Description of the ticket"),
      category: z.string().min(1).max(100).describe("Category of the ticket"),
      priority: z
        .nativeEnum(TicketPriority)
        .default("MEDIUM")
        .describe("Priority of the ticket. Assign by your self"),
      studentName: z.string().optional().describe("Name of the student"),
      studentEmail: z.string().optional().describe("Email of the student"),
    })
    .describe("Parameters for creating a new support ticket"),
  execute: async (args: Prisma.SupportTicketCreateInput) => {
    console.log("Creating new support ticket with data:", args);
    args.id = await generateTicketId();
    try {
      const result = await db.supportTicket.create({ data: args });

      sendNewTicketEmail(result);

      return result;
    } catch (error) {
      console.error("Error creating support ticket:", error);
      throw new Error("Failed to create support ticket");
    }
  },
};
