import Chats from "./myInbox";
import Conversation from "./conversation";

export default function Inbox() {
  return (
    <div className="flex gap-2 justify-between">
      <div className="w-2/6 bg-white rounded-l-2xl">
        <Chats />
      </div>
      <div className="w-4/6 bg-white rounded-r-2xl px-6 pb-4">
        <Conversation />
      </div>
    </div>
  );
}
