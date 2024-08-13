const Message = require("../../models/message");

module.exports = async (req, res) => {
  try {
    const { receiverId, senderId } = req.params;

    // Find all messages between the receiver and sender
    const messages = await Message.find({
      $or: [
        { sender: senderId, recipient: receiverId },
        { sender: receiverId, recipient: senderId },
      ],
    }).populate("sender recipient", "username");

    return res.status(200).json({ messages });
  } catch (error) {
    console.error("Error fetching conversation:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
