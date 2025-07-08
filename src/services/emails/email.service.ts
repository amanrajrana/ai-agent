import { appConfig, envVars } from "@/config";
import nodemailer, { Transporter } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class Emails {
  private static instance: Emails;
  private transporter: Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  > | null = null;

  constructor() {
    this.initializeAllMailTransporters();
  }

  static getInstance() {
    if (!Emails.instance) {
      Emails.instance = new Emails();
    }
    return Emails.instance;
  }

  /**
   *  Initializes the connection pools for the email sending for each account.
   */
  async initializeAllMailTransporters() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: envVars.getOrThrow("EMAIL_USERNAME"),
        pass: envVars.getOrThrow("EMAIL_PASSWORD"),
      },
    });
  }

  sendEmail(mailDetails: Mail.Options) {
    if (!appConfig.sendEmail) {
      console.log("Email sending is disabled.");
      return;
    }

    if (!this.transporter) {
      throw new Error("Email transporter is not initialized.");
    }

    this.transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.error(`Error sending email: ${error}`);
      } else {
        console.log(`Email sent: ${info.messageId}`);
      }
    });
  }
}

export const emailService = Emails.getInstance();
