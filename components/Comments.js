import React from "react";
import { Avatar, Divider } from "@mui/material";
import Link from "next/link";
import styles from "../styles/comment.module.css";

const replies = [
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjo",
    username: "@bafraUgdd",
    reply:
      "industry. sssss Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjo",
    username: "@bafraUg",
    reply:
      "industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },
];

const Reply = (props) => {
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
            <h6 style={{ marginTop: "-2.5em", opacity: 0.4 }}>
              {props.username}
            </h6>
          </div>
          <Link href="/replies">Reply</Link>
        </div>
        <div style={{ marginTop: "-2.0em", marginBottom: "5px" }}>
          <h6 style={{ opacity: 0.5 }}>{props.reply}</h6>
          <Divider sx={{ marginRight: "15px" }} />
        </div>
      </div>
    </div>
  );
};

function Comments() {
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
          {replies.length} {replies.length <= 1 ? "comment" : "comments"}
        </h5>
      </div>
      {replies.map((reply) => (
        <Reply
          key={reply.username}
          src={reply.src}
          name={reply.name}
          alt={reply.alt}
          username={reply.username}
          reply={reply.reply}
        />
      ))}
    </div>
  );
}

export default Comments;
