import { Message } from "ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/app/styles/github-markdown.css";

export function SenderMessageList({
  content,
}: {
  content: Message["content"];
}) {
  return (
    <div className="mb-4 text-right">
      <div
        className={`inline-block p-3 rounded-2xl max-w-[90%] md:max-w-[80%] bg-gradient-to-r from-purple-600 to-cyan-600 text-white`}
      >
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}

export function ReceiverMessageList({
  content,
}: {
  content: Message["content"];
}) {
  return (
    <div
      className={`inline-block p-3 rounded-2xl max-w-[90%] md:max-w-[80%] bg-white border border-gray-200 text-gray-800`}
    >
      <div className="markdown-body">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    </div>
  );
}
