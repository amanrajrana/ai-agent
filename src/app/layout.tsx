import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { startSeedingDatabase } from "@/scripts/seed_database";
const inter = Inter({ subsets: ["latin"] });

startSeedingDatabase()
  .then(() => console.log("Database seeding completed successfully."))
  .catch((error) => console.error("Error during database seeding:", error));

export const metadata: Metadata = {
  title: "College AI Assistant",
  description: "AI-powered assistant for college department information",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
