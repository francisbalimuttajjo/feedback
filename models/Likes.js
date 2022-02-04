import mongoose from "mongoose";


const likesModel = new mongoose.Schema(
  {
    like: {
      type: String,
      default:'like'
    },
    user: {
      type: String,
        required: [true, "enter category"],
    },
   
    suggestion: {
      type: mongoose.Schema.ObjectId,
      ref: "Suggestion",
      required: [true, "Like must belong to a suggestion"],
    },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toOject: { virtuals: true },
  }
);
// commentModel.pre(/^find/, function () {
//   this.populate({
//     path: "replies",
//     model: Reply,
//   });
// });

// commentModel.virtual("replies", {
//   ref: "Reply",
//   foreignField: "comment",
//   localField: "_id",
// });
export default mongoose.models["Likes"] ||
  mongoose.model("Likes", likesModel);
