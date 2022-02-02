import mongoose from "mongoose";
import Reply from "./Reply";

const commentModel = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "enter comment"],
    },
    email: {
      type: String,
      //   required: [true, "enter category"],
    },
    image:{
      type: String,
    },

    name: {
      type: String,
      //   required: [true, "enter category"],
    },
    suggestion: {
      type: mongoose.Schema.ObjectId,
      ref: "Suggestion",
      required: [true, "Comment must belong to a suggestion"],
    },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toOject: { virtuals: true },
  }
);
commentModel.pre(/^find/, function () {
  this.populate({
    path: "replies",
    model: Reply,
  });
});

commentModel.virtual("replies", {
  ref: "Reply",
  foreignField: "comment",
  localField: "_id",
});
export default mongoose.models["Comments"] ||
  mongoose.model("Comments", commentModel);
