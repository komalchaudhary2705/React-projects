import ChatItem from "./ChatItem";
import { currentUser } from "../data/whatsappData";

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r h-screen overflow-y-auto bg-white">
      {/* Current user info */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 border-b">
        <img
          src={currentUser.avatar}
          className="w-12 h-12 rounded-full border"
          alt={currentUser.name}
        />
        <h2 className="font-bold">{currentUser.name}</h2>
      </div>

      {/* Chat list */}
      <h2 className="text-xl font-bold p-4 bg-gray-100 border-b">Chats</h2>
      <ChatItem />
    </div>
  );
}
