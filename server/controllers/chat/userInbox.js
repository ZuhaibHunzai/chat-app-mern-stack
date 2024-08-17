const User = require("../../models/user");
const Message = require("../../models/message");

// Get a list of users who messaged the logged-in user (Inbox)
module.exports = async (req, res) => {
  try {
    const loggedInUserId = req.user.user._id;

    // Step 1: Find all messages where the logged-in user is either the sender or the recipient
    const messages = await Message.find({
      $or: [{ sender: loggedInUserId }, { recipient: loggedInUserId }],
    }).populate("sender recipient", "username");

    // Step 2: Extract unique user IDs who have interacted with the logged-in user
    const uniqueUserIds = new Set();
    messages.forEach((message) => {
      if (message.sender._id.toString() !== loggedInUserId.toString()) {
        uniqueUserIds.add(message.sender._id.toString());
      }
      if (message.recipient._id.toString() !== loggedInUserId.toString()) {
        uniqueUserIds.add(message.recipient._id.toString());
      }
    });

    // Step 3: Fetch the usernames/names of these unique users along with their last message
    const usersWithLastMessage = await Promise.all(
      Array.from(uniqueUserIds).map(async (userId) => {
        const user = await User.findById(userId).select(
          "username name profilePic"
        );

        // Find the last message in the conversation between logged-in user and this user
        const lastMessage = await Message.findOne({
          $or: [
            { sender: loggedInUserId, recipient: userId },
            { sender: userId, recipient: loggedInUserId },
          ],
        })
          .sort({ createdAt: -1 }) // Sort by createdAt in descending order to get the latest message
          .select("createdAt sender recipient message");

        return {
          user,
          lastMessage,
        };
      })
    );

    // Step 4: Return the list of users with their last message in the response
    return res.status(200).json({ users: usersWithLastMessage });
  } catch (error) {
    console.error("Error fetching inbox:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
