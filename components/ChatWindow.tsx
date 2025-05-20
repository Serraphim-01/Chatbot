"use client";

import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";

export default function ChatWindow({
  messages,
}: {
  messages: { role: "user" | "bot"; text: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      ref={ref}
      className="flex-1 overflow-y-auto bg-gray-900 rounded-lg 
      p-4 mb-4 space-y-2"
    >
      {messages.map((msg, i) => (
        <MessageBubble
          key={`${msg.role}-${i}`}
          role={msg.role}
          text={msg.text ?? ""}
        />
      ))}
    </div>
  );
}
