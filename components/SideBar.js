import React from "react";
import Link from "next/link";
import { StyledButton } from "./Elements";
import styles from "../styles/side.module.css";

const categories = ["all", "ui", "feature", "ux", "bug"];
const planned = ["Planned", "In Progress", "Fixed"];
const no = [2, 8, 9];

function SideBar() {
  return (
    <div>
      <div className={styles.container}>
        <h2>Budget App</h2>
        <h6>Feedback Forum</h6>
      </div>
      <div className={styles.div}>
        {categories.map((item) => (
          <StyledButton key={item}>{item}</StyledButton>
        ))}
      </div>
      <div className={styles.div}>
        <div className={styles.subContainer}>
          <h5 className={styles.heading}>Road Map</h5>
          <Link href="/view">view all</Link>
        </div>
        <div className={styles.list}>
          <div>
            <ul>
              {planned.map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className={styles.listItem}>
              {no.map((no) => (
                <li key={no}>{no}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
