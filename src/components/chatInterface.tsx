"use client";

import { useChat } from "@ai-sdk/react";
import DefaultPrompt from "./defaultPrompt";
import MessageStream from "./messageStream";
import ChatInput from "./chatInput";

export default function ChatInterface() {
  const {
    messages,
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    error,
  } = useChat({ keepLastMessageOnError: true });

  return (
    <>
      <div className="container h-full max-w-[768px] pt-24">
        {/* 
        If there are no messages, we will display the DefaultPrompt component.
         */}
        {messages.length === 0 ? (
          <DefaultPrompt />
        ) : (
          <MessageStream
            error={error}
            isLoading={isLoading}
            messages={messages}
          />
        )}
      </div>

      {/* 
        This is the ChatInput component that we will create in the next step. 
        It will be used to handle the user's input and send it to the chatbot.
       */}
      <ChatInput
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </>
  );
}
