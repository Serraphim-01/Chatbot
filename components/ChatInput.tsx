"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (msg: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
        spellCheck={false} 
        autoComplete="off"
        data-ms-editor={undefined} 
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white"
      >
        Send
      </button>
    </form>
  );
}
