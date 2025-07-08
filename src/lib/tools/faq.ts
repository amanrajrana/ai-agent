import { db } from "@/client";
import { z } from "zod";

export const searchFaqFallback = {
  name: "searchFaqFallback",
  description:
    "Search relevant FAQs like admission, classes etc. using up to 5 keywords or phrases.",
  parameters: z.object({
    queries: z.string().describe("up to 5 search keywords or phrases."),
  }),
  execute: async ({ queries }: { queries: string }) => {
    console.log("Executing searchFaqFallback with queries: ", queries);

    let results = (await db.$queryRawUnsafe(
      `
      SELECT id, question, answer, category
      FROM faqs
      WHERE "isActive"= true
        AND search_vector @@ plainto_tsquery('english', $1)
      ORDER BY ts_rank(search_vector, plainto_tsquery('english', $1)) DESC
      LIMIT 5;
    `,
      queries
    )) as Array<any>;

    if (results.length === 0) {
      console.log("First time it found nothing....");
      // Split every words
      const newQuery = queries
        .split(" ")
        .map((q) => q.trim())
        .filter((q) => q.length > 0);

      if (newQuery.length >= 2) {
        results = await db.$queryRawUnsafe(
          `
      SELECT id, question, answer, category
      FROM faqs
      WHERE "isActive"= true
        AND search_vector @@ plainto_tsquery('english', $1)
      ORDER BY ts_rank(search_vector, plainto_tsquery('english', $1)) DESC
      LIMIT 5;
    `,
          newQuery.join(" | ")
        );
      }
    }

    console.log("Search results: ", results);

    return results;
  },
};
