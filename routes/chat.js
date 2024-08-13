const userRoutes = require("express").Router();

const useAuth = require("../middleware/useAuth");
const userInbox = require("../controllers/chat/userInbox");
const userConversation = require("../controllers/chat/userChats");
const sendMessageController = require("../controllers/chat/sendMessageToUser");

userRoutes
  .post("/send", useAuth, sendMessageController)
  .get("/inbox", useAuth, userInbox)
  .get("/conversation/:receiverId/:senderId", useAuth, userConversation);

module.exports = userRoutes;
