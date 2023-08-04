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
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      };
      return new Date().toLocaleTimeString([], options).replace(" ", "");
    },
  },
  seen: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: function () {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      };
      return new Date().toLocaleString([], options).replace(",", "");
    },
  },
});

export default mongoose.model("Message", MessageSchema);
