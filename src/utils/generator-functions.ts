import { db } from "@/client";

/**
 *
 * @returns A unique ticket ID in the format YYMM/XXXX, where YY is the last two digits of the year, MM is the month, and XXXX is a 4-digit sequential number.
 * The ID is generated based on the last created ticket in the database, incrementing the number
 */
export async function generateTicketId() {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month in two digits
  try {
    const result = await db.supportTicket.findFirst({
      orderBy: { createdAt: "desc" },
      select: { id: true },
    });

    if (!result) {
      return `${year}${month}/0001`; // If no tickets exist, start with the first ticket of the month
    }

    // test regex to extract the month from the ticket ID
    const regex = new RegExp(`^${year}${month}/\\d{4}$`);

    if (!regex.test(result.id)) {
      return `${year}${month}/0001`; // If the last ticket ID does not match the current month, start with the first ticket of the month
    }

    const lastTicketMonth = result.id.slice(0, 4); // Extract the month from the last ticket ID
    if (lastTicketMonth !== `${year}${month}`) {
      return `${year}${month}/0001`; // If the month has changed, start with the first ticket of the new month
    }

    const lastTicketNumber = parseInt(result.id.split("/")[1], 10);
    const nextTicketNumber = (lastTicketNumber + 1).toString().padStart(4, "0");
    return `${year}${month}/${nextTicketNumber}`;
  } catch (error) {
    console.error("Error generating ticket ID:", error);
  }
}
