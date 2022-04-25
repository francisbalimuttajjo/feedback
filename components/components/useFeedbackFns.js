import React from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";

const Fns = (id) => {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleLike = () => {
    axios
      .post("/api/likes", {
        user: session.data.user.email,
        suggestion: id,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setMessage("upvote Saved");
          setTimeout(() => window.location.reload(), 4000);
        }
      })
      .catch((err) => {
        setError(err.response.data.data);
      });
  };
  return { router ,error,message,handleLike};
};
export default Fns