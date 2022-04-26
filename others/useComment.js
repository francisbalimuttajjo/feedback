import axios from "axios";
import React from "react";
import { useSession } from "next-auth/react";

const UseComment = (props) => {
  const [reply, setReply] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");
  const session = useSession();
  const name = props.comment.name.split(" ");

  const closeReply = () => setReply(false);
  const openReply = () => setReply(true);
    const handleText = (e) => setText(e.target.value)
    
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

  return {
    reply,
    error,
    message,
    loading,
    text,
    name,
    handleReply,
    closeReply,
    openReply,
    session,
    handleText
  };
};
export default UseComment;
