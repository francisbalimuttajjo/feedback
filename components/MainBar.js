import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Suggestion from "./Suggestion";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "../styles/main.module.css";
import { data, categories } from "../data";
import Modal from "./Modal";
function MainBar() {
  const[view,setView]=React.useState(false)
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <AccountBalanceIcon sx={{ marginTop: "15px", marginLeft: "10px" }} />
          <h5 className={styles.suggestion}>{data.length} Suggestions</h5>
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
            // onClick={() => router.push("/suggestion/add")}
            onClick={() => setView(true)}
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
      {data.map((item) => (
        <Suggestion
          homepage
          key={item.feedback}
          category={item.category}
          description={item.description}
          comment={item.comment}
          feedback={item.feedback}
          upvotes={item.upvotes}
        />
      ))}
      {view && <Modal  handleOpen={setView} open={view}/> }
      
    </div>
  );
}

export default MainBar;
