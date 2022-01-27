import React from "react";
import { Avatar, Divider } from "@mui/material";
import Link from "next/link";
import styles from "../styles/comment.module.css";

const Reply = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, margin: "5px" }}>
        <Avatar
          height={5}
          width={5}
          src="https://material-ui.com/static/images/avatar/1.jpg"
          alt="Remy Sharp"
        />
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
            <h6>Francis Balimuttajjo</h6>
            <h6 style={{ marginTop: "-2.5em", opacity: 0.4 }}>
              @francisbalimuttajjo
            </h6>
          </div>
          <Link href="/replies">Reply</Link>
        </div>
        <div style={{ marginTop: "-2.0em", marginBottom: "5px" }}>
          <h6 style={{opacity:0.5}}>
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </h6>
          <Divider sx={{  marginRight: "15px" }} />
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
        <h5 style={{ margin: "10px" }}>4 comments</h5>
      </div>
      <Reply />
      <Reply />
      <Reply />
    </div>
  );
}

export default Comments;
