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

    // Step 3: Fetch the usernames/names of these unique users
    const users = await User.find({
      _id: { $in: Array.from(uniqueUserIds) },
    }).select("username name"); // Fetch only the username and name fields

    // Log the users for debugging
    console.log("Users found:", users);

    // Step 4: Return the list of users in the response
    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching inbox:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
