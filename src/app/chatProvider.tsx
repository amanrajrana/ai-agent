"use client";

import React from "react";
import { useChat } from "@ai-sdk/react";
import ChatContext from "@/hooks/use-chat";

function ChatHelpersProvider({ children }: { children: React.ReactNode }) {
  const useChatHelpers = useChat({ keepLastMessageOnError: true });
  return (
    <ChatContext.Provider value={useChatHelpers}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatHelpersProvider;
