import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Avatar } from "@mui/material";
import Notification from "./Notification";
import useFns from "../../others/useFeedbackFns";
import CommentIcon from "@mui/icons-material/Comment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Feedback(props) {
  const { router, error, message, handleLike } = useFns(props.feedback._id);
  return (
    <div
      className="feedback_container "
    >
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}
      <div className="min-w-full ">
        <div className="flex flex-row  px-3">
          <div
            className=" upvote-sm opacity-500 cursor-pointer active:bg-blue-200 "
            onClick={handleLike}
          >
            <KeyboardArrowUpIcon />
            <p className="  ml-2  -mt-2">{props.feedback.likes.length}</p>
          </div>
          <div className="grow sm:mt-4 sm:ml-4 flex  ">
            <Avatar src={props.feedback.image} />
            <div className="ml-6">
              <h4 className="font-semibold">{props.feedback.name}</h4>
              <p className=" ml-2 text-sm opacity-50">
                {props.feedback.createdAt}
              </p>
            </div>
          </div>

          {props.homepage && (
            <IconButton onClick={() => router.push(`/${props.feedback._id}`)}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </div>
        <div className="w-full">
          <header className="suggestion-heading  mt-15">
            {props.feedback.title}
          </header>
          <p className="px-2 sm:ml-12   opacity-50">
            {props.feedback.suggestion}
          </p>
        </div>

        <div className="flex mt-2 ">
          <div className="flex grow ">
            <div
              className="suggestionUpvote opacity-500 cursor-pointer active:bg-blue-200 "
              onClick={handleLike}
            >
              <KeyboardArrowUpIcon />
              <p className="self-start  ml-2  -mt-2">
                {props.feedback.likes.length}
              </p>
            </div>
            <h5 className="suggestionCategory ">{props.feedback.category}</h5>
          </div>
          <div className="flex mt-6 px-2">
            <IconButton onClick={() => router.push(`/${props.feedback._id}`)}>
              <CommentIcon
                sx={{
                  color: "#6696de",
                }}
              />
              <span className="mt-1 opacity-80 text-base">
                {props.feedback.comment.length}
              </span>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
