import { useChat } from "../context/ChatContext";
import { IoIosChatbubbles } from "react-icons/io";

export default function ChatItem() {
  const { chatUsers, selectChat, activeChat } = useChat();

  return (
    <div>
      {chatUsers.map((user) => {
        const unreadCount = user.messages.filter((msg) => msg.sender === "them").length;

        return (
          <div
            key={user.id}
            onClick={() => selectChat(user)}
            className={`flex items-center gap-3 p-4 cursor-pointer border-b hover:bg-gray-100 transition 
              ${activeChat.id === user.id ? "bg-gray-200" : ""}`}
          >
            <img
              src={user.avatar}
              className="w-12 h-12 rounded-full border"
              alt={user.name}
            />

            <div className="flex-1">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">Tap to chat...</p>
            </div>

            {unreadCount > 0 && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}

            <IoIosChatbubbles className="text-gray-500 text-xl" />
          </div>
        );
      })}
    </div>
  );
}
