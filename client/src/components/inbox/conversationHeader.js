import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function ConversationHeader() {
  return (
    <div className="flex justify-between items-center h-16 py-10 border-b border-b-yellow-500">
      <div>
        <h2 className="font-semibold text-xl text-yellow-500">Zuhaib Alam</h2>
      </div>
      <div className="flex items-center gap-6 text-2xl text-yellow-500">
        <IoCall className="cursor-pointer" />
        <FaVideo className="cursor-pointer" />
        <IoIosInformationCircleOutline className="cursor-pointer *:text-black" />
      </div>
    </div>
  );
}
