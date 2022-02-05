import mongoose from "mongoose";

const suggestionModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "enter title"],
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: "planned",
    },
    email: {
      type: String,
    },

    category: {
      type: String,
      required: [true, "enter category"],
    },
    suggestion: {
      type: String,
      required: [true, "enter suggestion"],
    },
   
    createdAt: {
      type: String,
      
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
suggestionModel.virtual("likes", {
  ref: "Likes",
  foreignField: "suggestion",
  localField: "_id",
});

export default mongoose.models["Suggestion"] ||
  mongoose.model("Suggestion", suggestionModel);
