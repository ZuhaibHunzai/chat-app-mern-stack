import ConversationBody from "./conversationBody";
import ConversationHeader from "./conversationHeader";

export default function Conversation() {
  return (
    <div className="flex flex-col">
      <ConversationHeader />
      <ConversationBody />
    </div>
  );
}
