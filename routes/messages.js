const messagesRouter = require("express").Router();
const useAuth = require("../middleware/useAuth");
const sendMessageController = require("../controllers/messages/addMessage");

messagesRouter.post("/user", useAuth, sendMessageController);

module.exports = messagesRouter;
