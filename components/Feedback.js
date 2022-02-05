import React from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import Suggestion from "./Suggestion";
import AddComment from "./AddComment";
import MainComment from "./Comments";



function Comments(props) {
 
  return (
    <div className="    flex rounded-md     flex-col bg-white     w-11/12  m-auto mt-4 px-2      sm:ml-16   ">
      <div>
        <h5 className="m-5 font-bold">
          {props.comments.length}{" "}
          {props.comments.length <= 1 ? "comment" : "comments"}
        </h5>
      </div>
     
      {props.comments.map((comment) => (
         
          <MainComment
          key={comment._id}
          src={comment.image}
          name={comment.name}
          alt={comment.name}
          username={comment.email}
          replies={comment.replies}
          reply={comment.comment}
          id={comment._id}
          
        />
        
     
      ))}
    </div>
  );
}


function Feedback(props) {
  const router = useRouter();
  return (
    <div className="sm:w-9/12 sm:mx-auto md:w-2/4 mt-4">
      <div className="flex  opacity-80 font-bold ">
        <div className="flex mt-2  ">
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewIcon fontSize="small" sx={{ fontSize: "14px" }} />
          </IconButton>

          <h6 className="mt-1  ">Go back</h6>
        </div>
        <div className="right-3 absolute  sm:mr-20 md:mr-64">
          <button
          onClick={()=>router.push(`/edit/${props.id}`)}
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
        src={props.src}
        name={props.name}
        createDate={props.createDate}
        id={props.id}
      />

      <Comments comments={props.comments} />
      <AddComment id={props.id} />
    </div>
  );
}

export default Feedback;
