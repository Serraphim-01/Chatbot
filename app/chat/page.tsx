"use client";

import { useState } from "react";
import ChatWindow from "@/components/ChatWindow";
import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const handleSendMessage = async (userMessage: string) => {
    setMessages((prev) => [...prev, { 
      role: "user", text: userMessage }]);

    setMessages((prev) => [...prev, { 
      role: "bot", text: "Typing..." }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => {
        const withoutTyping = prev.filter((m) => 
          m.text !== "Typing...");
        return [...withoutTyping, { 
          role: "bot", text: data.reply }];
      });
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.text !== "Typing..."),
        { role: "bot", 
          text: "Something went wrong. Try again." },
      ]);
    }
  };

  return (
    <div className="flex flex-col 
    h-screen bg-gray-950 text-white p-4">
      <h1 className="text-2xl 
      font-semibold mb-4 text-center">💬 ChatBot</h1>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
