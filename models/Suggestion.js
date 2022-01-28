import mongoose from "mongoose";


const suggestionModel = new mongoose.Schema({ 
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
      comments: {
        type: Number,
       
      },
    
    
    

})
  




export default mongoose.models["Suggestion"] || mongoose.model("Suggestion", suggestionModel);
