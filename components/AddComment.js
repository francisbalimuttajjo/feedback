import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/addComment.module.css";

function AddComment() {
  const [text, setText] = React.useState("");
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h4>Add Comment</h4>
      </div>
      <div>
        <textarea
          className={styles.textArea}
          placeholder="enter comment"
          maxLength="250"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.addComment}>
        <h5 className={styles.charsLeft}>
          {250 - text.length} Characters Left
        </h5>
        <Button
          variant="contained"
          size="small"
          sx={{
            height: "2em",
            
            backgroundColor: "purple",
             padding: "5px",
            textTransform: "capitalize",
            marginTop: "1em",
          }}
        >
         Comment
        </Button>
      </div>
    </div>
  );
}

export default AddComment;
