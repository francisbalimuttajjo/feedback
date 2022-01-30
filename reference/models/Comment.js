import mongoose from "mongoose";
// import Suggestion from './Suggestion'

const commentModel = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "enter comment"],
    },
    user: {
      // type: mongoose.Schema.ObjectId,
      type: String,
      //   required: [true, "enter category"],
    },
    suggestion: {
      type: mongoose.Schema.ObjectId,
      ref: "Suggestion",
      required: [true, "Comment must belong to a suggestion"],
    },
  },
  {
    toJSON: { virtuals: true },
    toOject: { virtuals: true },
  }
);

export default mongoose.models["Comments"] ||
  mongoose.model("Comments", commentModel);
