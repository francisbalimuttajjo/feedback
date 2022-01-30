import mongoose from "mongoose";

function connect() {
  if (mongoose.connections[0].readyState) {
    
  } else {
    console.log("not yet connected");
    mongoose.connect(
      process.env.DB,

      () => {
        console.log("db is connected now");
      }
    );
  }
}

export default connect;

