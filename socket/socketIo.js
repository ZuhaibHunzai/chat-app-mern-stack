// socketIo.js

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    // Handle joining a room
    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    // Handle leaving a room
    socket.on("leaveRoom", (roomId) => {
      socket.leave(roomId);
      console.log(`User left room: ${roomId}`);
    });

    // Handle sending a group message
    socket.on("sendGroupMessage", async (data) => {
      const { chatRoomId, senderId, message } = data;
      const newMessage = await Message.create({
        chatRoom: chatRoomId,
        sender: senderId,
        message,
      });
      io.to(chatRoomId).emit("receiveGroupMessage", newMessage);
    });

    // Handle sending a direct message
    socket.on("sendDirectMessage", async (data) => {
      const { senderId, recipientId, message } = data;
      const newMessage = await Message.create({
        sender: senderId,
        recipient: recipientId,
        message,
      });
      io.to(recipientId).emit("receiveDirectMessage", newMessage);
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
