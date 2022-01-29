import React from "react";
import { Avatar, Divider } from "@mui/material";
import Link from "next/link";
import styles from "../styles/comment.module.css";

const Comment = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, margin: "5px" }}>
        <Avatar height={5} width={5} src={props.src} alt={props.alt} />
      </div>
      <div style={{ flex: 10, display: "flex", flexDirection: "column" }}>
        <div className={styles.user}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "-1em",
              flex: 8,
            }}
          >
            <h6>{props.name}</h6>
            <h6 style={{ marginTop: "-2.5em", opacity: 0.4 }}>{props.user}</h6>
          </div>
          <Link href="/replies">Reply</Link>
        </div>
        <div style={{ marginTop: "-2.0em", marginBottom: "5px" }}>
          <h6 style={{ opacity: 0.5 }}>{props.comment}</h6>
          <Divider sx={{ marginRight: "15px" }} />
        </div>
      </div>
    </div>
  );
};

function Comments(props) {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "7px",
        flexDirection: "column",
        backgroundColor: "white",
        width: "90%",
        margin: "auto",
        marginTop: "1em",
      }}
    >
      <div>
        <h5 style={{ margin: "10px" }}>
          {props.comments.length}{" "}
          {props.comments.length <= 1 ? "comment" : "comments"}
        </h5>
      </div>
      {props.comments.map((comment) => (
        <Comment
          key={comment.user}
          src={comment.src}
          name={comment.name}
          alt={comment.alt}
          user={comment.user}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default Comments;
