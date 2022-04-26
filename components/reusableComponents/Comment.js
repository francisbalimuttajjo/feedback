import React from "react";
import CommentReply from "./CommentReply";
import { Avatar, Divider } from "@mui/material";
import Notification from "./Notification";
import useFns from "../../others/useComment";

const Comments = (props) => {
  const {
    reply,
    error,
    message,
    loading,
    text,
    name,
    handleReply,
    closeReply,
    openReply,
    handleText,
    session,
  } = useFns(props);

  return (
    <div className="flex flex-col">
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}
      <div className="flex  mb-2 ">
        <div className="flex m-2">
          <Avatar
            height={5}
            width={5}
            src={props.comment.image}
            alt={name[1]}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex  ">
            <div className="flex flex-col">
              <h6 className="font-semibold">{props.comment.comment}</h6>
              <p className="opacity-40 -mt-1  mb-1">@{name[0]}</p>
            </div>
            <div className="text-blue-700  right-12 absolute sm:mr-24 md:mr-80     ">
              {session.data && (
                <button
                  onClick={openReply}
                  className="hover:font-bold hover:underline"
                >
                  Reply
                </button>
              )}
            </div>
          </div>
          <div>
            <Divider sx={{ marginRight: "15px" }} />
            {props.comment.replies.map((reply) => (
              <CommentReply
                key={reply._id}
                reply={reply}
                authorName={name[0]}
              />
            ))}
          </div>
        </div>
      </div>
      {reply && (
        <div>
          <textarea
            className="comment_textarea"
            placeholder="enter reply"
            maxLength="250"
            value={text}
            onChange={handleText}
          ></textarea>
          <div className="flex justify-center ml-10">
            <button
              className="comment_cancelbtn"
              onClick={closeReply}
            >
              Cancel
            </button>
            <button
              onClick={handleReply}
              disabled={loading}
              className="comment_submitbtn"
            >
              {!loading && "Post Reply"}
              {loading && "Replying...."}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
