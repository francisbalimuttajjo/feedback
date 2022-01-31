import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Avatar } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import CommentIcon from "@mui/icons-material/Comment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Suggestion(props) {
  const router = useRouter();
  return (
    <div className="bg-white  mx-3 md:ml-20    
    rounded-lg text-black mt-4 py-3 sm:pl-6 sm:py-3   sm:ml-16    ">
      <div className="min-w-full sm:min-w-10/12">
        <div className="flex flex-row  px-3">
          <div
            className=" hidden sm:block flex bg-gray-200 h-12 w-12 sm:w-10 sm:p-1
            flex-col m-2 -ml-4 opacity-500 rounded-md p-2 justify-center"
          >
            <KeyboardArrowUpIcon />
            <p className="self-start  ml-2  -mt-2">{props.upvotes}</p>
          </div>
          <div className="grow sm:mt-4 sm:ml-4 flex  ">
            <Avatar />
            <div className="ml-6">
              <h4 className="font-semibold">Francis Mayanja</h4>
              <p className=" ml-2 text-sm opacity-50">28th Jan,2022</p>
            </div>
          </div>

          {props.homepage && (
            <IconButton onClick={() => router.push(`/${props.id}`)}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </div>
        <div>
          <header className="mt-15 ml-2  sm:ml-14  grow  font-semibold sm:font-bold opacity-90 capitalize">
            {props.feedback}
          </header>
          <p className="px-2 sm:ml-12   opacity-50">{props.description}</p>
        </div>

        <div className="flex mt-2 ">
          <div className="flex grow ">
            <div className="flex bg-gray-200 h-10 w-12 sm:hidden   flex-col m-2  opacity-500 rounded-md p-2 justify-center">
              <KeyboardArrowUpIcon />
              <p className="self-start  ml-2  -mt-2">{props.upvotes}</p>
            </div>
            <h5 className="bg-gray-200 text-violet-900 font-semibold sm:ml-24 px-2 py-2 h-10 mt-2 mr-4  rounded-md opacity-70 ">
              {props.category}
            </h5>
            <IconButton>
              <Image
                height="36px"
                width="36px"
                alt="upvote "
                src="/upvote.jpg"
              />
            </IconButton>
          </div>
          <div className="flex mt-6 px-2">
            <CommentIcon
              sx={{
                color: "#6696de",
              }}
            />
            <h6 className="mt-1 opacity-60">{props.length}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
