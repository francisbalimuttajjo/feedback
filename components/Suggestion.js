import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Avatar } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Notification from "./Notification";
import { useSession } from "next-auth/react";
import Tooltip from "@mui/material/Tooltip";
import CommentIcon from "@mui/icons-material/Comment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Suggestion(props) {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const handleLike = () => {
    setLoading(true);
    axios
      .post("/api/likes", {
        user: session.data.user.email,
        suggestion: props.id,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setMessage("upvote Saved");
          setTimeout(() => window.location.reload(), 4000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };
  return (
    <div className="suggestion-container ">
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}
      <div className="min-w-full sm:min-w-10/12">
        <div className="flex flex-row  px-3">
          <div className=" upvote-sm opacity-500 ">
            <KeyboardArrowUpIcon />
            <p className="  ml-2  -mt-2">{props.upvotes}</p>
          </div>
          <div className="grow sm:mt-4 sm:ml-4 flex  ">
            <Avatar src={props.src} />
            <div className="ml-6">
              <h4 className="font-semibold">{props.name}</h4>
              <p className=" ml-2 text-sm opacity-50">{props.createDate}</p>
            </div>
          </div>

          {props.homepage && (
            <IconButton onClick={() => router.push(`/${props.id}`)}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </div>
        <div>
          <header className="suggestion-heading  mt-15">
            {props.feedback}
          </header>
          <p className="px-2 sm:ml-12   opacity-50">{props.description}</p>
        </div>

        <div className="flex mt-2 ">
          <div className="flex grow ">
            <div className="suggestionUpvote opacity-500">
              <KeyboardArrowUpIcon />
              <p className="self-start  ml-2  -mt-2">{props.upvotes}</p>
            </div>
            <h5 className="suggestionCategory ">{props.category}</h5>
            {session.data && (
              <Tooltip
                disableFocusListener
                arrow
                placement="top"
                title="click to upvote"
              >
                <IconButton
                sx={{marginTop:'-10px', marginLeft:'-15px'}}
                 disabled={loading} onClick={handleLike}>
                  <Image
                    className="opacity-60"
                    height="60px"
                    width="60px"
                    alt="upvote "
                    src="/like.jpg"
                  />
                </IconButton>
              </Tooltip>
            )}
          </div>
          <div className="flex mt-6 px-2">
            <IconButton
          onClick={() => router.push(`/${props.id}`)}
            >
              <CommentIcon
                sx={{
                  color: "#6696de",
                }}
              />
              <span className="mt-1 opacity-80 text-base">{props.length}</span>
            </IconButton>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
