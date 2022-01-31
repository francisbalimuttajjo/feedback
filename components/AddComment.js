import { Button } from "@mui/material";
import React from "react";


function AddComment() {
  const [text, setText] = React.useState("");

  return (
    <div className="flex flex-col p-10 bg-white rounded-md mt-4 w-11/12 mx-auto">
      <h4 className="mb-2 font-semibold">Add Comment</h4>
      <div>
        <textarea
          className="bg-gray-200 h-20 resize-none ml-4 w-10/12"
          placeholder="enter comment"
          maxLength="250"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-row justify-around">
        <p className="flex flex-row justify-around mt-2">
          {250 - text.length} Characters Left
        </p>

        <button
          className=" bg-blue-900 text-white
             h-8 px-2 mt-2 hover:bg-blue-400 rounded-md  "
        >
          Post Comment
        </button>
       
        
      </div>
    </div>
  );
}

export default AddComment;
