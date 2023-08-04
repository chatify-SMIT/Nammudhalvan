import mongoose from "mongoose";
import moment from "moment-timezone";
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
  date: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
});

export default mongoose.model("Message", MessageSchema);
