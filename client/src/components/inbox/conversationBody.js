import { useAuth } from "../../hooks/useAuth";
import { RiFontSize } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCameraReverseOutline } from "react-icons/io5";
import { MdOutlineSettingsVoice } from "react-icons/md";
import Message from "./message";

export default function ConversationBody() {
  const me = useAuth();
  return (
    <>
      <div className="flex flex-col gap-2 py-4 min-h-[400px] max-h-[400px] overflow-y-scroll">
        {/* friend's message */}
        <Message
          profilePic={me?.user?.profilePic}
          name={me?.user?.name}
          message="hello, how are you?"
          userType="friend"
        />
        {/* your message */}
        <Message
          profilePic={me?.user?.profilePic}
          name={me?.user?.name}
          message="hello, I am good, how are you? hello, I am good, how are you? hello, I am good, how are you?"
          userType="me"
        />
      </div>
      {/* conversation input */}
      <div className="w-full h-28 bg-[#F3F3F4] rounded-xl p-4">
        <div className="flex flex-col gap-2">
          <div>
            <input
              type="text"
              placeholder="type a mesage"
              className="w-full h-10 bg-transparent outline-none border-none pl-2 rounded-xl"
            />
          </div>
          <div className="flex justify-between pl-2">
            <div className="flex gap-4">
              <MdOutlineSettingsVoice className="text-xl cursor-pointer" />
              <IoCameraReverseOutline className="text-xl cursor-pointer" />
              <RiFontSize className="text-xl cursor-pointer" />
              <IoMdAttach className="text-xl cursor-pointer" />
              <MdOutlineEmojiEmotions className="text-xl cursor-pointer" />
              <HiOutlineDotsVertical className="text-xl cursor-pointer" />
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 outline-none border-none cursor-pointer text-white rounded-xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
