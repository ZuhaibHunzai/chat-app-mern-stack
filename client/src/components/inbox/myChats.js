import React, { useState } from "react";

export default function MyChats({ inboxUsers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = inboxUsers?.filter((user) => {
    return user?.user?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-2 p-4 ">
      <div className="py-4">
        <input
          type="text"
          placeholder="search chat"
          className="w-full bg-[#F5F6FA] rounded-full h-10 pl-3 outline-none "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredUsers?.length > 0 ? (
        filteredUsers.map((inboxUser, index) => {
          return (
            <div
              key={index}
              className="flex justify-between cursor-pointer hover:bg-[#F1F2F7] p-2"
            >
              <div className="w-full flex gap-2 items-center ">
                <div>
                  <img
                    src={inboxUser.user.profilePic}
                    alt={inboxUser?.user.username}
                    className="w-10 h-10 rounded-full "
                  />
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-lg font-semibold ">
                    {inboxUser?.user?.name}
                  </h2>
                  <h2 className="text-slate-500">
                    {inboxUser?.lastMessage?.message}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-sm text-slate-500 ">
                  {inboxUser?.lastMessage.createdAt}
                </p>
                <p className="text-sm font-bold rounded-full">
                  {inboxUser.read}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center">No users found</p>
      )}
    </div>
  );
}
