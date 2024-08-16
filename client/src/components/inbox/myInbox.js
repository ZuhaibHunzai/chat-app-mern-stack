import ChatHeader from "./chatHeader";
import MyChats from "./myChats";

export default function Chats() {
  return (
    <div className="flex flex-col ">
      <ChatHeader />
      <MyChats />
    </div>
  );
}
