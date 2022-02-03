import React from "react";
import axios from "axios";
import Notification from "./Notification"
import { useSession } from "next-auth/react";

function AddComment(props) {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const session = useSession();
  function addComment(suggestion) {
    if (!text.length) {
      setError("no empty fields");
      return;
    }
    setLoading(true);
    axios
      .post("/api/comments", {
        name: session.data.user.name,
        suggestion,
        comment: text,
        image: session.data.user.image,
        email: session.data.user.email,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setMessage('success!')
          window.location.reload();
        }
        return;
      });
  }
  return (
    <>
    {error && <Notification severity='error' message={error} />}
    {message && <Notification severity='success' message={message} />}
      {session.data && (
        <div className="flex  sm:ml-16 flex-col p-10 bg-white rounded-md mt-4 w-11/12 mx-auto">
          <h4 className="mb-2 font-semibold">Add Comment</h4>
          <div>
            <textarea
              className="bg-gray-200 mt-3 p-2  rounded-md  ml-8 h-20 resize-none  w-10/12"
              placeholder="enter comment"
              maxLength="300"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-row justify-around">
            <p className="flex flex-row justify-around mt-2">
              {300 - text.length} Characters Left
            </p>

            <button
              className=" bg-blue-900 text-white
             h-8 px-2 mt-2 hover:bg-blue-400 rounded-md  "
              onClick={() => addComment(props.id)}
            >
              {!loading && "Comment"}
              {loading && "commenting .."}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddComment;
