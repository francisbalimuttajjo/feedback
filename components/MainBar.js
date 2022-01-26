import React from "react";
import { Button } from "@mui/material";
import Suggestion from "./Suggestion";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "../styles/main.module.css";

const categories = ["all", "ui", "feature", "ux", "bug"];
const feedBack = [
  {
    comment: 50,
    feedback: "window display",
    description: "window freezes on start up",
    category: "faeture",
    upvotes: 9000,
  },
  {
    comment: 4,
    feedback: " display",
    description: "display slow sdfghjkadfghsj",
    category: "ui",
    upvotes: 50,
  },
  {
    comment: 2,
    feedback: "display",
    description: "window ereefefefe freezes on start up",
    category: "ux",
    upvotes: 100,
  },
];
function MainBar() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <AccountBalanceIcon sx={{ marginTop: "12px", marginLeft: "10px" }} />
          <h5 className={styles.suggestion}>{feedBack.length} Suggestions</h5>
        </div>
        <div>
          <div className={styles.label}>
            <label htmlFor="selectBy">Select By: &nbsp;</label>
            <select name="categories">
              <option value="">choose Option</option>
              {categories.map((optionValue) => (
                <option value={optionValue} key={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            sx={{
              height: "2em",
              textTransform: "lowercase",
              backgroundColor: "#ba56a9",
              textTransform: "lowercase",
              marginTop: "1em",
              marginLeft: "2em",
            }}
          >
            + add Feedback
          </Button>
        </div>
      </div>
      {feedBack.map((item) => (
        <Suggestion
          key={item.feedback}
          category={item.category}
          description={item.description}
          comment={item.comment}
          feedback={item.feedback}
          upvotes={item.upvotes}
        />
      ))}
    </div>
  );
}

export default MainBar;
