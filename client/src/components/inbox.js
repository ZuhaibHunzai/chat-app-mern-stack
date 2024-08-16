import Chats from "./chats";

export default function Inbox() {
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-2/6 ">
        <Chats />
      </div>
      <div>
        <h1>Chat</h1>
      </div>
      <div>
        <h1>Add Friends</h1>
      </div>
    </div>
  );
}
