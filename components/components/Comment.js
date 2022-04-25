import React from "react";
import CommentReply from "./CommentReply";
import { Avatar, Divider } from "@mui/material";
import { useSession } from "next-auth/react";
import Notification from "./Notification";
import axios from "axios";

const Comments = (props) => {
  const [reply, setReply] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");
  const session = useSession();
  const name = props.comment.name.split(" ");
  

  const handleReply = () => {
    if (!text.length) {
      setError("please add reply");
      return;
    }
    setLoading(true);
    axios
      .post("/api/replies", {
        name: session.data.user.name,
        email: session.data.user.email,
        image: session.data.user.image,
        reply: text,
        comment: props.comment._id,
      })
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          setText("");
          setMessage("reply saved");
          window.location.reload();
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("something went wrong try again");
      });
  };
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
                  onClick={() => setReply(true)}
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
            className="bg-gray-200 h-20 ml-12 mt-3 p-2 rounded-md  mb-2 resize-none  w-9/12"
            placeholder="enter reply"
            maxLength="250"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex justify-center ml-10">
            <button
              className="bg-purple-600 hover:bg-blue-500  mb-2 mr-10 p-2 rounded-md text-white h-10"
              onClick={() => setReply(false)}
            >
              cancel
            </button>
            <button
              onClick={handleReply}
              disabled={loading}
              className="bg-blue-600 hover:bg-purple-500  mb-2 mr-10 p-2 rounded-md text-white h-10"
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
