import mongoose from "mongoose";
 import Reply from './Reply'

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
commentModel.pre(/^find/,function(){
  this.populate({
    path:'replies',
    model: Reply
  })
})

commentModel.virtual("replies", {
  ref: "Reply",
  foreignField: "comment",
  localField: "_id",
});
export default mongoose.models["Comments"] ||
  mongoose.model("Comments", commentModel);
