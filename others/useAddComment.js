import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const UseFns = () => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const session = useSession();
  const handleTextChange = (e) => setText(e.target.value);

  function addComment(suggestion) {
    if (!text.length) {
      setError("No comment provided");
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
          setMessage("success!");
          window.location.reload();
        }
        return;
      });
  }
  return {
    text,
    error,
    message,
    loading,
    addComment,
    session,
    handleTextChange,
  };
};

export default UseFns;
