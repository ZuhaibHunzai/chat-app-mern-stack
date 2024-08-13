const { model, Schema } = require("mongoose");

const Group = model(
  "Group",
  new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Group;
