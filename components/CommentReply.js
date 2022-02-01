import React from "react";
import { Avatar, Divider } from "@mui/material";



function CommentReply(props) {
  return (
    <div className="ml-4 my-2">
      <div className="flex ">
        <Avatar height={5} width={5} src={props.src} alt={props.alt} />
        <div className="flex flex-col ml-3">
          <h6 className="font-semibold">{props.name}</h6>
          <p className="opacity-40 -mt-1  mb-1">{props.username}</p>
        </div>
      </div>

      <>
        <h6 className=" font-bold text-sm text-blue-500 inline">
         @{props.authorName} &nbsp;
        </h6>
        <p className="inline  opacity-70">{props.reply}</p>
      </>
      {/* <Divider  /> */}
    </div>
  );
}



export default CommentReply;
