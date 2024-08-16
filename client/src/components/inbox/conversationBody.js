import { useAuth } from "../../hooks/useAuth";
import { RiFontSize } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCameraReverseOutline } from "react-icons/io5";
import { MdOutlineSettingsVoice } from "react-icons/md";

export default function ConversationBody() {
  const me = useAuth();
  return (
    <>
      <div className="flex flex-col gap-2 py-4 ">
        <div className="flex items-center gap-2">
          <img
            src={me?.user?.profilePic}
            alt={me?.user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-2 p-[8px] bg-yellow-500 rounded-xl max-w-[70%]">
            <div className="flex flex-col ">
              <h1 className=" text-white text-md inline-block text-justify">
                Hello how are you Hello
              </h1>
              <p className="text-xs text-right text-[#F3F3F4]">10:55PM</p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end gap-2">
          <div className="flex items-center gap-2 p-[8px] bg-[#F3F3F4] rounded-xl max-w-[70%]">
            <div className="flex flex-col">
              <h1 className=" text-black text-md inline-block text-justify">
                I am good, how are you?
              </h1>
              <p className="text-xs text-right text-black">10:55PM</p>
            </div>
          </div>
          <img
            src={me?.user?.profilePic}
            alt={me?.user?.name}
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <img
            src={me?.user?.profilePic}
            alt={me?.user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-2 p-[8px] bg-yellow-500 rounded-xl max-w-[70%]">
            <div className="flex flex-col">
              <h1 className=" text-white text-md inline-block text-justify">
                Hello how are you Hello how are you Hello how are you Hello how
                are you Hello how are you Hello how are you Hello how are you
                Hello how
              </h1>
              <p className="text-xs text-right text-[#F3F3F4]">10:55PM</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={me?.user?.profilePic}
            alt={me?.user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-2 p-[8px] bg-yellow-500 rounded-xl max-w-[70%]">
            <div className="flex flex-col">
              <h1 className=" text-white text-md inline-block text-justify">
                Hello how are you Hello how are you Hello how are you Hello how
                are you Hello how are you Hello how are you Hello how are you
                Hello how
              </h1>
              <p className="text-xs text-right text-[#F3F3F4]">10:55PM</p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end gap-2">
          <div className="flex items-center gap-2 p-[8px] bg-[#F3F3F4] rounded-xl max-w-[70%]">
            <div className="flex flex-col">
              <h1 className=" text-black text-md inline-block text-justify">
                Hello how are you Hello how are you Hello how are you Hello how
                are you Hello how are you Hello how are you Hello how are you
                Hello how
              </h1>
              <p className="text-xs text-right text-black">10:55PM</p>
            </div>
          </div>
          <img
            src={me?.user?.profilePic}
            alt={me?.user?.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
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
