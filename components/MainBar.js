import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import {useRouter} from "next/router"
import Suggestion from "./Suggestion";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const categories = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least comments",
];
//
function MainBar(props) {

  const [value, setValue] = React.useState(categories[0]);
  const session = useSession();
  const router = useRouter()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //
  return (
    <div className="w-full text-white  ">
      <div
        className="bg-slate-900 sticky top-0
          flex justify-around w-full h-14 sm:h-20 sm:rounded-md sm:w-11/12 sm:ml-16
       md:mt-12 
      "
      >
        <div className="hidden sm:block mt-2">
          <AccountBalanceIcon sx={{ marginTop: "15px", marginLeft: "10px" }} />
          <h5 className="ml-5 -mt-6  sm:ml-12">
            {props.data.length}{" "}
            {props.data.length > 1 ? "Suggestions" : "Suggestion"}
          </h5>
        </div>
        <div>
          <div className="opacity-80 mt-4   ml-2.5 mr-5 sm:mt-6">
            <label htmlFor="selectBy">Sort by: &nbsp;</label>
            <FormControl
              variant="standard"
              sx={{ minWidth: 120, textDecoration: "none", marginTop: -0.2 }}
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
          </div>
        </div>
        {session.data && (
          <button
            onClick={() => router.replace('/add')}
            className=" bg-fuchsia-500 h-8 px-1 mt-3 hover:bg-blue-500 rounded-md sm:mt-6 "
          >
            + add Feedback
          </button>
        )}
        {!session.data && (
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl:
                   "https://feedbackbafra.vercel.app/"
                  //"http://localhost:3000/",
              })
            }
            className=" bg-fuchsia-500 h-8 px-3 mt-3 hover:bg-blue-500 rounded-md sm:mt-6 "
          >
            login
          </button>
        )}
      </div>
      {props.data.map((item) => (
        <Suggestion
          homepage
          key={item._id}
          category={item.category}
          description={item.suggestion}
          feedback={item.title}
          upvotes={item.upvotes}
          name={item.name}
          createDate={item.createdAt.split('T')[0]}
          src={item.image}
          
          id={item._id}
          length={item.comment.length}
        />
      ))}
      
    </div>
  );
}

export default MainBar;
