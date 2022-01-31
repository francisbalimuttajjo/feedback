import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select } from "@mui/material";
import { useRouter } from "next/router";
import Suggestion from "./Suggestion";
import Form from "./Form";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Modal from "./Modal";
const categories = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least comments",
];
//
function MainBar(props) {
  const [view, setView] = React.useState(false);
  const open = () => setView(true);
  const close = () => setView(false);
  const router = useRouter();
  const [value, setValue] = React.useState(categories[0]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //
  return (
    <div className="w-full text-white  ">
      <div
        className="bg-purple-900 sticky top-0
          flex justify-around w-full h-12 sm:h-20 sm:rounded-md sm:w-11/12 sm:ml-16
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
        
          <div className="opacity-80 mt-4   ml-2.5 mr-5 sm:mt-10">
            <label htmlFor="selectBy">Sort by: &nbsp;</label>
            <FormControl
              variant="standard"
              sx={{ minWidth: 120, textDecoration: "none",marginTop:-0.2 }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={value}
                onChange={handleChange}
                sx={{ color: "white" }}
              >
               
                {categories.map((optionValue) => (
                  <MenuItem value={optionValue} key={optionValue}>
                    {" "}
                    {optionValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* <select name="categories" className=" cursor-pointer bg-purple-900 font-semibold text-white-900 w-35">
              
              {categories.map((optionValue) => (
                <option className='bg-white w-16 my-4   text-black' value={optionValue} key={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select> */}
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
