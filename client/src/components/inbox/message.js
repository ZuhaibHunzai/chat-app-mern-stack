export default function Message({ profilePic, name, message, userType }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={profilePic}
        alt={name}
        className="w-10 h-10 rounded-full hidden md:flex"
      />
      <div
        className={`flex items-center gap-2 p-[8px] ${
          userType === "friend" ? "bg-yellow-500" : "bg-[#F3F3F4]"
        } rounded-xl max-w-[70%]`}
      >
        <div className="flex flex-col ">
          <h1
            className={`${
              userType === "friend" ? "text-white" : "text-black"
            }  text-md inline-block text-justify`}
          >
            {message}
          </h1>
          <p
            className={`${
              userType === "friend" ? "text-[#F3F3F4]" : "text-black"
            } text-xs text-right`}
          >
            10:55PM
          </p>
        </div>
      </div>
    </div>
  );
}
