"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatInterface from "./chatInterface";

export default function FloatingChatInterface() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300 max-h-[80vh] h-[600px]">
          <ChatInterface
            isFloatingHeader={true}
            setIsChatOpen={setIsChatOpen}
          />
        </div>
      )}
    </>
  );
}
