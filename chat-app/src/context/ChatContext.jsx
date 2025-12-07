import { createContext, useContext, useState } from "react";
import { users } from "../data/whatsappData";

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatUsers, setChatUsers] = useState(users);
  const [activeChat, setActiveChat] = useState(users[0]);

  const selectChat = (user) => setActiveChat(user);

  const sendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // 1. Update messages for the active chat
    const updatedUsers = chatUsers.map((u) =>
      u.id === activeChat.id ? { ...u, messages: [...u.messages, newMessage] } : u
    );

    const updatedActiveUser = updatedUsers.find((u) => u.id === activeChat.id);

    // 2. Move active chat to the top
    const reorderedUsers = [
      updatedActiveUser,
      ...updatedUsers.filter((u) => u.id !== activeChat.id),
    ];

    // 3. Update state
    setChatUsers(reorderedUsers);
    setActiveChat(updatedActiveUser);
  };

  return (
    <ChatContext.Provider
      value={{ chatUsers, activeChat, selectChat, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
