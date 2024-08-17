import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import MyChats from "./myChats";
import { useState } from "react";

export default function Chats({ inboxUsers }) {
  const user = useAuth();
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center  p-4 rounded-t-2xl ">
        <div
          className="flex items-center gap-3  
        "
        >
          <div>
            <img
              className="w-14 h-14 rounded-full"
              src={user?.user?.profilePic}
              alt={user?.user?.name}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-xl font-semibold">{user?.user?.name}</h2>
            </div>
            <div>
              <h2 className="text-sm">@{user?.user?.username}</h2>
            </div>
          </div>
        </div>
        <div className=" ">
          <MdOutlinePersonAddAlt
            className="h-8 w-8 font-semibold cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
      {!search ? (
        <MyChats inboxUsers={inboxUsers} />
      ) : (
        <div className="flex flex-col gap-2 p-4">
          <input
            type="text"
            placeholder="search a friend"
            className="w-full bg-[#F5F6FA] rounded-full h-10 pl-3 outline-none "
          />
          <button
            onClick={handleSearch}
            className="py-2 bg-yellow-500 rounded-xl text-white"
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
}
