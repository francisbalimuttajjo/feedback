import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormControl, Select } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Header = (props) => {
  const session = useSession();
  const router = useRouter();
  
  const styles = {
    google_icon: { fontSize: "16px", color: "red", marginRight: "6px" },
    select: { color: "white", fontSize: "15px" },
    icon: { marginTop: "15px", marginLeft: "10px" },
    form_control: { minWidth: 120, textDecoration: "none", marginTop: -0.2 },
  };

  return (
    <div className="header_container ">
      <div className="header_subcontainer ">
        <div className="hidden sm:block mt-2">
          <AccountBalanceIcon sx={styles.icon} />
          <h5 className="ml-5 -mt-6  sm:ml-12">
            {props.data.length}&nbsp;
            {props.data.length > 1 ? "Suggestions" : "Suggestion"}
          </h5>
        </div>
        <div>
          <div className="opacity-80 mt-4   ml-2.5 mr-5 sm:mt-6">
            <label htmlFor="selectBy">Sort by: &nbsp;</label>
            <FormControl variant="standard" sx={styles.form_control}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={props.value}
                onChange={props.handleChange}
                sx={styles.select}
              >
                {props.categories.map((optionValue) => (
                  <MenuItem value={optionValue} key={optionValue}>
                    {optionValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        {session.status === "authenticated" && (
          <button
            onClick={() => router.replace("/add")}
            className=" header_add_btn "
          >
            + add Feedback
          </button>
        )}
        {session.status === "unauthenticated" && (
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://feedbackbafra.vercel.app/",
              })
            }
            className=" header_login_btn"
          >
            <GoogleIcon sx={styles.google_icon} />
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
