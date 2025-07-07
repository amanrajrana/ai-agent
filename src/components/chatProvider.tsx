"use client";

import ChatContext from "@/context/chatContext";
import React from "react";
import { useChat } from "@ai-sdk/react";

function ChatHelpersProvider({ children }: { children: React.ReactNode }) {
  const useChatHelpers = useChat({ keepLastMessageOnError: true });
  return (
    <ChatContext.Provider value={useChatHelpers}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatHelpersProvider;
