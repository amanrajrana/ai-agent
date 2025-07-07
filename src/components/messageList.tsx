import styles from "./styles.module.css";
import { Message } from "ai";
import Markdown from "react-markdown";
import { BotMessageSquare } from "lucide-react";
import AssistantThinkingAnimation from "./assistantThinkingAnimation";
import remarkGfm from "remark-gfm";
import "@/app/styles/github-markdown.css";

export function SenderMessageList({
  content,
}: {
  content: Message["content"];
}) {
  return (
    <p
      className={`relative w-fit max-w-[80%] md:max-w-[90%] rounded-md px-3 py-1.5 sender before:bg-muted shadow-sm self-end bg-primary rounded-br-none text-primary-foreground ${
        styles.sender + "\t" + styles.chatBox
      } `}
    >
      {content}
    </p>
  );
}

export function ReceiverMessageList({
  content,
  isThinking,
}: {
  content: Message["content"];
  isThinking?: boolean;
}) {
  return (
    <div className="flex items-end max-w-[90%] md:max-w-[80%] gap-x-3">
      <BotMessageSquare />
      <div
        className={`relative w-fit rounded-md px-3 py-1.5 sender before:bg-muted shadow-sm self-start bg-secondary rounded-bl-none text-secondary-foreground ${
          styles.receiver + "\t" + styles.chatBox
        } `}
      >
        {isThinking ? (
          <AssistantThinkingAnimation />
        ) : (
          <div className="markdown-body">
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
