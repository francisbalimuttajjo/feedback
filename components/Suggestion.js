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
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        <div className={styles.likes}>
          <KeyboardArrowUpIcon sx={{ marginLeft: "-7px" }} />
          <h6 className={styles.upvotes}>{props.upvotes}</h6>
        </div>
      </div>
      <div className={styles.divFeedback}>
        <h5 className={styles.feedBackTitle}>{props.feedback}</h5>
        <h6 style={{ margin: "-20px", opacity: 0.4 }}>{props.description}</h6>

        <h5 className={styles.category}>{props.category}</h5>
      </div>
      <div className={styles.comment}>
        {props.homepage && (
          <IconButton onClick={() => router.push(`/${props.id}`)}>
            <ChevronRightIcon />
          </IconButton>
        )}
        <div style={{display:'flex'}}>
          <CommentIcon sx={{ color: "#6696de",marginTop:'20px' }} />

          <h6 style={{ padding: "5px" }}>{props.comment}</h6>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
