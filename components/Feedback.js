import React from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Button } from "@mui/material";
import Suggestion from "./Suggestion";
import Comment from "./Comments";
import styles from "../styles/feedback.module.css";

function Feedback() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.backIcon}>
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewIcon
              fontSize="small"
              sx={{ fontSize: "10px", marginLeft: "5px", marginTop: "-5px" }}
            />
          </IconButton>

          <h6 className={styles.back}>Go back</h6>
        </div>
        <div className={styles.btn}>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              marginTop: "1em",
              marginLeft: "60%",
            }}
          >
            Edit Feedback
          </Button>
        </div>
      </div>
      <Suggestion
        upvotes={7}
        comment={2}
        feedback="disphhlay"
        description="window ereefefefe freezes on start up"
        category="ux"
      />
      <Comment />
    </div>
  );
}

export default Feedback;
