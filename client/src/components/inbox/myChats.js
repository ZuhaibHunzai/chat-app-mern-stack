export default function MyChats() {
  const chats = [
    {
      friendProfilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      name: "John",
      lastMessage: "hello how are you",
      latestTextTime: "06:03",
      read: true,
    },
    {
      friendProfilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      name: "Doe",
      lastMessage: "hello how are you",
      latestTextTime: "02:32",
      read: false,
    },
    {
      friendProfilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      name: "Micheal",
      lastMessage: "hello how are you",
      latestTextTime: "12:13",
      read: true,
    },
    {
      friendProfilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      name: "Brian",
      lastMessage: "hello how are you",
      latestTextTime: "06:27",
      read: true,
    },
    {
      friendProfilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      name: "Robert",
      lastMessage: "hello how are you",
      latestTextTime: "14 Aug",
      read: false,
    },
  ];
  return (
    <div className="flex flex-col gap-2 p-4 ">
      <div className="py-4">
        <input
          type="text"
          placeholder="search chat"
          className="w-full bg-[#F5F6FA] rounded-full h-10 pl-3 outline-none "
        />
      </div>
      {chats?.map((chat, index) => {
        return (
          <div
            key={index}
            className="flex justify-between cursor-pointer hover:bg-[#F1F2F7] p-2"
          >
            <div className="w-full flex gap-2 items-center ">
              <div>
                <img
                  src={chat.friendProfilePic}
                  alt={chat?.name}
                  className="w-10 h-10 rounded-full "
                />
              </div>
              <div className="flex flex-col  ">
                <h2 className="text-lg font-semibold ">{chat?.name}</h2>
                <h2 className="text-slate-500">{chat?.lastMessage}</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center text-center">
              <p className="text-sm text-slate-500">{chat.latestTextTime}</p>
              <p className="text-sm font-bold rounded-full">{chat.read}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
