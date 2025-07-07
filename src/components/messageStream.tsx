import { UseChatHelpers } from "@ai-sdk/react";
import { Info } from "lucide-react";
import React from "react";
import { ReceiverMessageList, SenderMessageList } from "./messageList";
import AssistantThinkingAnimation from "./assistantThinkingAnimation";

export default function MessageStream({
  messages,
  status,
  error,
}: Pick<UseChatHelpers, "messages" | "status" | "error">) {
  return (
    <section className="w-full flex flex-col gap-y-4 pb-2">
      {messages.map((message, index) => {
        if (message.role === "user") {
          return <SenderMessageList key={index} content={message.content} />;
        } else {
          return <ReceiverMessageList key={index} content={message.content} />;
        }
      })}

      {status === "submitted" && <AssistantThinkingAnimation />}
      {error && <ErrorMessage message={"Ohh... Something went wrong"} />}
    </section>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-red-500 font-medium flex items-center gap-2 border border-red-500/50 bg-red-500/5 py-2 px-4 rounded">
      <Info size={14} />
      {message}
    </p>
  );
}
