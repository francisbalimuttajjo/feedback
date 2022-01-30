import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import CommentIcon from "@mui/icons-material/Comment";
import styles from "../styles/suggestion.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Suggestion(props) {
  const router = useRouter();
  return (
    
    
  
  
  
 
  
   
    <div className='bg-white mx-3 rounded-lg text-black mt-4 py-5 flex   '   
    >
      <div style={{ flex: 1 }}>
        <div className="flex bg-gray-200  flex-col m-2  opacity-500 rounded-md p-2 justify-center">
          <KeyboardArrowUpIcon sx={{ marginLeft: "-7px" }} />
          <h6 className='self-start'>{props.upvotes}</h6>
        </div>
      </div>
      <div className="flex  w-3/4  ml-4 flex-col">
     
 
        <h5 className='mt-15 font-semibold opacity-70 capitalize'>{props.feedback}</h5>
        <h6 style={{ margin: "-20px", opacity: 0.4 }}>{props.description}</h6>

        <h5 className={styles.category}>{props.category}</h5>
      </div>
      <div className={styles.comment}>
        {props.homepage && (
          <IconButton onClick={() => router.push(`/${props.id}`)}>
            <ChevronRightIcon />
          </IconButton>
        )}
        <div style={{ display: "flex" }}>
          <CommentIcon
            sx={{
              color: "#6696de",
              marginTop: props.homepage ? "20px" : "60px",
            }}
          />

          <h6 style={{ marginTop: props.homepage ? "30px" : "70px" }}>{props.length}</h6>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
