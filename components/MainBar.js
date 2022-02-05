import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Suggestion from "./Suggestion";
import GoogleIcon from "@mui/icons-material/Google";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { sortingCategories } from "../data";
import NotFound from "./NotFound"

function MainBar(props) {
  const [value, setValue] = React.useState(sortingCategories[2]);
  const session = useSession();
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
   
    switch (e.target.value) {
      case "Least Comments":
        props.data.sort((a, b) => a.comment.length - b.comment.length);
        break;
      case "Most Comments":
        props.data.sort((a, b) => b.comment.length - a.comment.length);
        break;
      case "Least Upvotes":
        props.data.sort((a, b) => a.likes.length - b.likes.length);
        break;
      case "Most Upvotes":
        props.data.sort((a, b) => b.likes.length - a.likes.length);
        break;
      default:
        props.data.sort((a, b) => a.comment.length - b.comment.length);
    }


  };

  return (
    <div className="w-full text-white  ">
      <div
        className="mainbar-subContainer
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
                sx={{ color: "white",fontSize:'15px' }}
              >
                {sortingCategories.map((optionValue) => (
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
            onClick={() => router.replace("/add")}
            className=" bg-fuchsia-500 h-8 px-1 mt-3 hover:bg-blue-500 rounded-md sm:mt-6 "
          >
            + add Feedback
          </button>
        )}
        {!session.data && (
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://feedbackbafra.vercel.app/",
                //"http://localhost:3000/",
              })
            }
            className=" bg-fuchsia-500 h-8 px-3 mt-3 hover:bg-blue-500 rounded-md sm:mt-6 "
          >
            <GoogleIcon
              sx={{ fontSize: "16px", color: "red", marginRight: "6px" }}
            />
            login
          </button>
        )}
      </div>
      {props.data.length === 0 && <NotFound />}
      {props.data.map((item) => (
        <Suggestion
          homepage
          key={item._id}
          category={item.category}
          description={item.suggestion}
          feedback={item.title}
          upvotes={item.likes.length}
          name={item.name}
          createDate={item.createdAt}
          src={item.image}
          id={item._id}
          length={item.comment.length}
        />
      ))}
    </div>
  );
}

export default MainBar;
