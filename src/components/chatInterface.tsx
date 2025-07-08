"use client";

import { Expand, MessageCircle, X } from "lucide-react";
import MessageStream from "./messageStream";
import ChatInput from "./chatInput";
import { useContext, useEffect } from "react";
import ChatContext from "@/context/chatContext";
import DefaultPrompt from "./defaultPrompt";
import Link from "next/link";

type Props =
  | { isFloatingHeader?: false }
  | {
      isFloatingHeader: true;
      setIsChatOpen: (isOpen: boolean) => void;
    };

export default function ChatInterface(props: Props) {
  const { messages, status, error, input, handleInputChange, handleSubmit } =
    useContext(ChatContext)!;

  useEffect(() => {
    if (error) {
      // Handle error display logic here, e.g., show a toast notification
      console.error("Chat error:", error);
    }
  }, [error]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold">Support Chat</h3>
            <p className="text-xs opacity-90">We're here to help!</p>
          </div>
        </div>
        {props.isFloatingHeader && (
          <div className="flex items-center space-x-2">
            <Link
              href={"/chat"}
              onClick={() => props.setIsChatOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <Expand className="w-5 h-5" />
            </Link>
            <button
              onClick={() => props.setIsChatOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 max-w-screen-lg w-full mx-auto">
        {messages.length === 0 ? (
          <DefaultPrompt />
        ) : (
          <MessageStream messages={messages} error={error} status={status} />
        )}
      </div>

      {/* Chat Input */}
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={status === "submitted"}
      />
    </div>
  );
}
