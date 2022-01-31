import React from "react";
import { Avatar, Divider } from "@mui/material";
import Link from "next/link";
import styles from "../styles/comment.module.css";

const Reply = (props) => {
  return (
    <div className="flex mb-2 ">
      <div className="flex m-2">
        <Avatar height={5} width={5} src={props.src} alt={props.alt} />
      </div>
      <div className="flex flex-col">
        <div className="flex  ">
          <div className="flex flex-col">
            <h6 className='font-semibold'>{props.name}</h6>
            <p className="opacity-40 -mt-1  mb-1">{props.username}</p>
          </div>
          <div className="text-blue-700 right-12 absolute hover:underline hover:font-bold ">
            <Link  href="/replies">
              Reply
            </Link>
          </div>
        </div>
        <div>
          <h6 className="opacity-50">{props.reply}</h6>
          <Divider sx={{ marginRight: "15px" }} />
        </div>
      </div>
    </div>
  );
};

function Comments(props) {
  return (
    <div
    className='flex rounded-md flex-col bg-white w-11/12  m-auto mt-4 px-2  '
    
    >
      <div>
        <h5 className='m-5 font-bold'>
          {props.comments.length}{" "}
          {props.comments.length <= 1 ? "comment" : "comments"}
        </h5>
      </div>
      {props.comments.map((comment) => (
        <Reply
          key={comment._id}
          src={comment.src}
          name={comment.user}
          alt={comment.alt}
          username="@jst franckie"
          reply={comment.comment}
        />
      ))}
    </div>
  );
}

export default Comments;
