import mongoose from "mongoose";
import Comment from "./Comment";

const suggestionModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "enter title"],
    },
    category: {
      type: String,
      required: [true, "enter category"],
    },
    suggestion: {
      type: String,
      required: [true, "enter suggestion"],
    },
    upvotes: {
      type: Number,
    },
   
  },
  {
    toJSON: { virtuals: true },
    toOject: { virtuals: true },
  }
);
suggestionModel.virtual("comment", {
  ref: "Comments",
  foreignField: "suggestion",
  localField: "_id",
});


export default mongoose.models["Suggestion"] ||
  mongoose.model("Suggestion", suggestionModel);
