import React from "react";
import Head from "../../components/Head";
import Side from "../../components/SideBar";
import Main from "../../components/MainBar";
import styles from "../../styles/Home.module.css";

function add() {
  return (
    <div className={styles.container}>
      <Head title="add" />
      <Side />
      {/* <Main /> */}
    </div>
  );
}

export default add;
