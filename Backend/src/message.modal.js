import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userName",
    required: true,
  },
  users: Array,
  content: {
    type: String,
  },
  time: {
    type: String,
    default: function () {
      return new Date()
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(" ", "");
    },
  },
  seen: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Message", MessageSchema);
