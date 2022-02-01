import React from "react";
import { Avatar, Divider } from "@mui/material";

const replies = [
  { email: "f@gma.com", reply: "i also have the same feeling about the topic" },
  {
    email: "f@gma.com",
    reply: "i also havekkk the same feeling about the topic",
  },
  {
    email: "f@gma.com",
    reply:
      "i also havellll gdfdf cvcbcbcf hdhdhdhd jdjdjd dhdhd the same feeling about the topic",
  },
];

function CommentReply(props) {
  return (
    <div className="ml-4 my-2">
      <div className="flex ">
        <Avatar height={5} width={5} src={props.src} alt={props.alt} />
        <div className="flex flex-col ml-3">
          <h6 className="font-semibold">francis</h6>
          <p className="opacity-40 -mt-1  mb-1">@jst_franckie</p>
        </div>
      </div>

      <p>
        <h6 className=" font-bold text-sm text-blue-500 inline">
          {props.username} &nbsp;
        </h6>
        <p className="inline  opacity-70">{props.reply}</p>
      </p>
      {/* <Divider  /> */}
    </div>
  );
}

const Reply = (props) => {
  const [reply, setReply] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex  mb-2 ">
        <div className="flex m-2">
          <Avatar height={5} width={5} src={props.src} alt={props.alt} />
        </div>
        <div className="flex flex-col">
          <div className="flex  ">
            <div className="flex flex-col">
              <h6 className="font-semibold">{props.name}</h6>
              <p className="opacity-40 -mt-1  mb-1">{props.username}</p>
            </div>
            <div className="text-blue-700  right-12 absolute sm:mr-24 md:mr-80     ">
              <button
                onClick={() => setReply(true)}
                className="hover:font-bold hover:underline"
              >
                Reply
              </button>
            </div>
          </div>
          <div>
            <h6 className="opacity-50">{props.reply}</h6>
            <Divider sx={{ marginRight: "15px" }} />
            {replies.map((reply) => (
              <CommentReply key={reply} reply={reply.reply} name={props.name} username={props.username} />
            ))}
          </div>
        </div>
      </div>
      {reply && (
        <div>
          <textarea
            className="bg-gray-200 h-20 ml-24 mt-3 p-2 rounded-md  mb-2 resize-none ml-4 w-9/12"
            placeholder="enter reply"
            maxLength="250"
          ></textarea>
          <div className="flex justify-center ml-10">
            <button
              className="bg-purple-600 hover:bg-blue-500 h-10 mb-2 mr-10 p-2 rounded-md text-white h-10"
              onClick={() => setReply(false)}
            >
              cancel
            </button>
            <button className="bg-blue-600 hover:bg-purple-500 h-10 mb-2 mr-10 p-2 rounded-md text-white h-10">
              Post Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

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
