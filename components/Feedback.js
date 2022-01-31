import React from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import Suggestion from "./Suggestion";
import AddComment from "./AddComment";
import Comment from "./Comments";


function Feedback(props) {
  const router = useRouter();
  return (
    <div>
      <div className="flex  opacity-50 ">
        <div className="flex mt-2  ">
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewIcon fontSize="small" sx={{ fontSize: "14px" }} />
          </IconButton>

          <h6 className="mt-1  ">Go back</h6>
        </div>
        <div className="right-3 absolute">
          <button
            onClick={() => setView(true)}
            className=" bg-purple-900 text-white
             h-8 px-2 mt-2 hover:bg-blue-900 rounded-md  "
          >
            Edit Feedback
          </button>
        </div>
      </div>
      <Suggestion
        upvotes={props.upvotes}
        comment={props.comment}
        feedback={props.feedback}
        description={props.description}
        category={props.category}
        length={props.length}
      />
      <Comment comments={props.comments} />
      <AddComment />
    </div>
  );
}

export default Feedback;
