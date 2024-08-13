const { model, Schema } = require("mongoose");

const Message = model(
  "Message",
  new Schema({
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chatRoom: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Message;
