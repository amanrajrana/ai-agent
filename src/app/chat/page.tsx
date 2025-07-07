"use client";

import ChatInterface from "@/components/chatInterface";

export default function page() {
  return (
    <main className="w-full h-dvh bg-muted/50">
      <div className="container h-full">
        <ChatInterface isFloatingHeader={false} />
      </div>
    </main>
  );
}
