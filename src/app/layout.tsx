import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { startSeedingDatabase } from "@/scripts/seed_database";
import StoreProvider from "./StoreProvider";

// startSeedingDatabase();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College AI Assistant",
  description: "AI-powered assistant for college department information",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>{children}</StoreProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
