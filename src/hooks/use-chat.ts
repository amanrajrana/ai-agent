import { createContext } from "react";
import { UseChatHelpers } from "@ai-sdk/react";

const ChatContext = createContext<UseChatHelpers | undefined>(undefined);

export default ChatContext;
