export default function MyChats({ inboxUsers }) {
  return (
    <div className="flex flex-col gap-2 p-4 ">
      <div className="py-4">
        <input
          type="text"
          placeholder="search chat"
          className="w-full bg-[#F5F6FA] rounded-full h-10 pl-3 outline-none "
        />
      </div>
      {inboxUsers?.map((inboxUsers, index) => {
        return (
          <div
            key={index}
            className="flex justify-between cursor-pointer hover:bg-[#F1F2F7] p-2"
          >
            <div className="w-full flex gap-2 items-center ">
              <div>
                <img
                  src={inboxUsers.profilePic}
                  alt={inboxUsers?.username}
                  className="w-10 h-10 rounded-full "
                />
              </div>
              <div className="flex flex-col  ">
                <h2 className="text-lg font-semibold ">{inboxUsers?.name}</h2>
                <h2 className="text-slate-500">{inboxUsers?.username}</h2>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center text-center">
              <p className="text-sm text-slate-500 ">{chat.latestTextTime}</p>
              <p className="text-sm font-bold rounded-full">{chat.read}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
