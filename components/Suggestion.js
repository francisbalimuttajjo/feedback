import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import CommentIcon from "@mui/icons-material/Comment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Suggestion(props) {
  const router = useRouter();
  return (
    <div className="bg-white mx-3 rounded-lg text-black mt-4 py-5 flex   ">
      <div style={{ flex: 1 }}>
        <div className="flex bg-gray-200 h-12   flex-col m-2  opacity-500 rounded-md p-2 justify-center">
          <KeyboardArrowUpIcon sx={{ marginLeft: "0px" }} />
          <h6 className="self-start  ml-2  -mt-2">{props.upvotes}</h6>
        </div>
      </div>
      <div className="flex  w-3/4  ml-4 flex-col justify-between">
        <header className="mt-15 font-semibold opacity-90 capitalize">
          {props.feedback}
        </header>
        <p className=" opacity-50">{props.description}</p>
        <div className="flex justify-start  mt-3">
          <h5 className="bg-gray-200 px-2 h-8 mt-3 mr-2  rounded-md opacity-70 ">
            {props.category}
          </h5>
          <IconButton>
            <Image height="36px" width="36px" alt="upvote " src="/upvote.jpg" />
          </IconButton>
        </div>
      </div>

      <div className="flex-1 flex-col opacity-70 ">
        {props.homepage && (
          <IconButton onClick={() => router.push(`/${props.id}`)}>
            <ChevronRightIcon />
          </IconButton>
        )}
        <div className="flex mt-12">
          <CommentIcon
            sx={{
              color: "#6696de",
              marginTop: props.homepage ? "20px" : "60px",
            }}
          />
          <h6 style={{ marginTop: props.homepage ? "30px" : "70px" }}>
            {props.length}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
