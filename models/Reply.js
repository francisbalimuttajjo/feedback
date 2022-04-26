import mongoose from "mongoose";


const replyModel = new mongoose.Schema(
  {
    reply: {
      type: String,
      required: [true, "enter reply"],
    },
    email: {
      
      type: String,
      
    },
    image: {
      
      type: String,
      
    },
    name: {
      
      type: String,
      
    },
    comment: {
      type: mongoose.Schema.ObjectId,
      ref: "Comments",
      required: [true, "Comment must belong to a suggestion"],
    },
  
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.models["Reply"] ||
  mongoose.model("Reply", replyModel);
