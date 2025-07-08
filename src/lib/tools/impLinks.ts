import { z } from "zod";
import { db } from "@/client"; // adjust based on your actual Prisma import

export const searchImportantLinks = {
  name: "searchImportantLinks",
  description:
    "Searches the links by keyword if the user's query doesn't match any specific tool. Returns relevant titles and URLs. you can use during faq to redirect user to important links.",
  parameters: z.object({
    query: z
      .string()
      .describe("The user's keyword or phrase to search in links"),
  }),
  execute: async ({ query }: { query: string }) => {
    const result = await db.$queryRaw`
      SELECT id, title, url, description, category
      FROM important_links
      WHERE "isActive" = true
        AND search_vector @@ plainto_tsquery('english', ${query})
      ORDER BY ts_rank(search_vector, plainto_tsquery('english', ${query})) DESC
      LIMIT 5;
    `;

    console.log("Search results for important links: ", result);

    return result;
  },
};
