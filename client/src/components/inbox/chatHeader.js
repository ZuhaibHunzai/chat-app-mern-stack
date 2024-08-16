import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";

export default function ChatHeader() {
  const user = useAuth();
  return (
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
        <MdOutlinePersonAddAlt className="h-8 w-8 font-semibold" />
      </div>
    </div>
  );
}
