import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Suggestion from "./Suggestion";
import Form from "./Form";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "../styles/main.module.css";
import { categories } from "../data";
import Modal from "./Modal";

//
function MainBar(props) {
  const [view, setView] = React.useState(false);
  const open = () => setView(true);
  const close = () => setView(false);
  const router = useRouter();

  //
  return (
    <div className="w-full text-white  ">
      <div
        className="bg-purple-900 flex justify-around w-full h-12 sm:h-20 sm:rounded-md sm:w-11/12 sm:ml-16
       md:mt-12 
      "
      >
        <div className="hidden sm:block mt-2">
          <AccountBalanceIcon sx={{ marginTop: "15px", marginLeft: "10px" }} />
          <h5 className="ml-5 -mt-6  sm:ml-12">
            {props.data.length} Suggestion (s)
          </h5>
        </div>
        <div>
          <div className="opacity-70 mt-3 ml-2.5 mr-5 sm:mt-6">
            <label htmlFor="selectBy">Select By: &nbsp;</label>
            <select name="categories" className="text-black">
              <option value="">choose Option</option>
              {categories.map((optionValue) => (
                <option value={optionValue} key={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={() => setView(true)}
          className=" bg-fuchsia-500 h-8 px-1 mt-2 hover:bg-blue-500 rounded-md sm:mt-6 "
        >
          + add Feedback
        </button>
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
        <Modal handleOpen={open} open={view}>
          <Form handleBack={close} />
        </Modal>
      )}
    </div>
  );
}

export default MainBar;
