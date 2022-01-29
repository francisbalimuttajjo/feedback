import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Suggestion from "./Suggestion";
import Form from "./Form";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "../styles/main.module.css";
import {  categories } from "../data";
import Modal from "./Modal";




//
function MainBar(props) {
  const [view, setView] = React.useState(false);
  const open = () => setView(true);
  const close = () => setView(false);
  const router = useRouter();

  //
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <AccountBalanceIcon sx={{ marginTop: "15px", marginLeft: "10px" }} />
          <h5 className={styles.suggestion}>{props.data.length} Suggestions</h5>
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
      {props.data.map((item) => (
      
        <Suggestion
          homepage
          key={item._id}
          category={item.category}
          description={item.suggestion}
         
          feedback={item.title}
          upvotes={item.upvotes}
          id={item._id}
          length={item.comment.length}
        />
      ))}
      {view && (
        <Modal handleOpen={open} open={view} 
        
        >
          <Form  handleBack={close}/>
        </Modal>
      )}
    </div>
  );
}

export default MainBar;
