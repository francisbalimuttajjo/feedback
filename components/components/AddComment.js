import React from "react";
import Notification from "./Notification";
import useFns from "../../others/useAddComment";

function AddComment(props) {
  const {
    text,
    error,
    message,
    loading,
    addComment,
    session,
    handleTextChange,
  } = useFns();

  return (
    <>
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}
      {session.data && (
        <div className="add_container">
          <h4 className="mb-2 font-semibold">Add Comment</h4>
          <div>
            <textarea
              className="add_textarea"
              placeholder="enter comment"
              maxLength="300"
              onChange={handleTextChange}
            ></textarea>
          </div>

          <div className="flex flex-row justify-around">
            <p className="flex flex-row justify-around mt-2">
              {300 - text.length} Characters Left
            </p>

            <button
              disabled={loading}
              className=" add_btn "
              onClick={() => addComment(props.feedback._id)}
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
