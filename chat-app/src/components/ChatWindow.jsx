import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { IoSend } from "react-icons/io5";
import { currentUser } from "../data/whatsappData";

export default function ChatWindow() {
  const { activeChat, sendMessage } = useChat();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      {/* Header: show friend name */}
      <div className="p-4 flex items-center gap-3 border-b bg-white shadow">
        <img
          src={activeChat.avatar}
          className="w-12 h-12 rounded-full"
          alt={activeChat.name}
        />
        <h2 className="font-bold text-lg">{activeChat.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {activeChat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-sm p-2 rounded-xl ${
              msg.sender === "me" ? "bg-green-200 ml-auto" : "bg-white border"
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex items-center gap-3">
        <input
          type="text"
          className="flex-1 border rounded-full px-4 py-2"
          placeholder={`Message as ${currentUser.name}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="p-3 rounded-full bg-green-500 text-white"
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
}
