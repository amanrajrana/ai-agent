import { SupportTicket } from "@/prisma/generated/client";
import { supportTicketEmailTemplate } from "@/templates/emails/support-ticket.template";
import { SendMailOptions } from "nodemailer";
import { envVars } from "@/config";
import { emailService } from "./email.service";

export const sendNewTicketEmail = (ticket: SupportTicket) => {
  console.log("Sending new support ticket email...");
  const emailContent = supportTicketEmailTemplate(ticket);

  const mailOptions: SendMailOptions = {
    from: `"AI ASSISTANT" <${envVars.getOrThrow("EMAIL_USERNAME")}>`,
    to: envVars.getOrThrow("INTERNAL_SUPPORT_EMAIL"),
    subject: `New Support Ticket: ${ticket.title}`,
    html: emailContent,
  };

  emailService.sendEmail(mailOptions);
};
