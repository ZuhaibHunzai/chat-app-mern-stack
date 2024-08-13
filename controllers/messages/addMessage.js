const User = require("../../models/user");
const Message = require("../../models/message");

// Send a direct message to a single user by username
module.exports = async (req, res) => {
  try {
    const { sender, recipient, message, chatRoom } = req.body;

    // Validate input
    if (!sender || !recipient || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the recipient user by ID
    const recipientUser = await User.findById(recipient);
    if (!recipientUser) {
      return res.status(404).json({ message: "Recipient user not found" });
    }

    // Create a new message
    const newMessage = await Message.create({
      sender,
      recipient,
      message,
      chatRoom: chatRoom || null, // Use the provided chatRoom or set to null
    });

    // Optionally emit the message to the recipient via Socket.IO
    // io.to(recipient.toString()).emit('receiveDirectMessage', newMessage);

    return res.status(200).json({ message: "Message sent", data: newMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
