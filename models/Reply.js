import mongoose from "mongoose";


const replyModel = new mongoose.Schema(
  {
    reply: {
      type: String,
      required: [true, "enter reply"],
    },
    user: {
      // type: mongoose.Schema.ObjectId,
      type: String,
      //   required: [true, "enter category"],
    },
    comment: {
      type: mongoose.Schema.ObjectId,
      ref: "Comments",
      required: [true, "Comment must belong to a suggestion"],
    },
  },
  {
    toJSON: { virtuals: true },
    toOject: { virtuals: true },
  }
);

export default mongoose.models["Reply"] ||
  mongoose.model("Reply", replyModel);
