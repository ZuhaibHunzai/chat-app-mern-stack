import Chats from "./myInbox";
import Conversation from "./conversation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInboxUsers } from "../../redux/inbox/action";

export default function Inbox() {
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state);
  const inboxUsers = inbox.users?.users?.users;
  useEffect(() => {
    dispatch(getInboxUsers());
  }, [dispatch]);
  return (
    <div className="flex gap-2 justify-between">
      <div className="w-2/6 bg-white rounded-l-2xl">
        <Chats inboxUsers={inboxUsers} />
      </div>
      <div className="w-4/6 bg-white rounded-r-2xl px-6 pb-4">
        <Conversation />
      </div>
    </div>
  );
}
