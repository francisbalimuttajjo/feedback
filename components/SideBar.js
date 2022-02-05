import React from "react";
import { StyledButton } from "./Elements";
import { IconButton } from "@mui/material";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";
import { signOut } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { categories } from "../data";
//
const planned = ["Planned", "In Progress", "Fixed"];

//drawer
const DrawerComponent = (props) => {
  return (
    <div className="sm:hidden">
      <Drawer
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={props.close}
      >
        <List sx={{ backgroundColor: "#e6e2da", minHeight: "100vh" }}>
          <IconButton onClick={()=>props.close()}>
            <CloseIcon sx={{ margin:'2px',color:'red'}} />
          </IconButton>
          <div className="w-52 mx-5 p-4 rounded-md my-5 bg-white">
            {categories.map((item) => (
              <StyledButton
                onClick={() => props.handleFilter(item)}
                className="bg-gray-200"
                key={item}
              >
                {item}
              </StyledButton>
            ))}
          </div>
          <div className="w-52 mx-5 p-4 rounded-md my-5 bg-white">
            <RoadMap no={props.no} />
          </div>

          <button
            onClick={() => signOut()}
            className="hover:bg-blue-300 rounded-md ml-10 p-2 font-bold text-white bg-blue-900"
          >
            Logout
            <LogoutIcon sx={{ marginLeft: "5px" }} />
          </button>
        </List>
      </Drawer>
    </div>
  );
};
//drawe

//roadmanp
const RoadMap = (props) => {
  return (
    <>
      <div className="flex justify-around mb-4">
        <h5 className="opacity-60 text-blue-900 ml-1">Road Map</h5>
        <div className="text-blue-500 hover:text-blue-900 ">
          <Link href="/roadmap"> view all</Link>
        </div>
      </div>

      <div className="flex flex-row opacity-60">
        <div className="ml-8 md:overflow-hidden ">
          <ul>
            {planned.map((plan) => (
              <li key={plan}>{plan}</li>
            ))}
          </ul>
        </div>
        <div className="ml-9 md:ml-20">
          <ul className="list-none ">
            {props.no.map((no) => (
              <li key={no.index}>{no.number}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

//roadmap

function SideBar(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div
      className="w-full 
    sm:flex sm:flex-row sm:ml-16 sm:mb-4 sm:mt-4 md:flex-col md:w-4/12 md:mt-32 md:sticky md:h-screen md:top-2 "
    >
      {open && (
        <div className="sm:hidden">
          <DrawerComponent
            handleFilter={props.handleFilter}
            open={open}
            no={props.no}
            close={handleClose}
        
          />
        </div>
      )}
      <div
        className="w-full h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex justify-around
       sm:w-3/12 sm:h-32 sm:rounded-lg md:w-full
      "
      >
        <div>
          <div className="hidden  sm:block">
            <Tooltip
              disableFocusListener
              arrow
              placement="right"
              title="LogOut"
            >
              <IconButton onClick={() => signOut()}>
                <LogoutIcon sx={{ marginLeft: "5px", color: "white" }} />
              </IconButton>
            </Tooltip>
          </div>

          <p className="-ml-6 font-semibold text-2xl sm:mt-6 md:-m1-8">
            Budget App
          </p>
          <p className="-ml-6 opacity-70 md:-m1-8"> Feedback Forum</p>
        </div>
        <div className="my-auto sm:hidden -right-10 relative  md:hidden lg:hidden ">
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <div className="hidden  overflow-hidden sm:block  md:block rounded-lg ml-6 bg-white w-3/12  h-32 md:w-full md:ml-0 md:mt-3 md:overflow-hidden">
        {categories.map((item) => (
          <StyledButton
            onClick={() => props.handleFilter(item)}
            className="bg-gray-200"
            key={item}
          >
            {item}
          </StyledButton>
        ))}
      </div>
      <div className="hidden sm:block md:block rounded-lg  bg-white  ml-6 w-3/12  h-32 md:py-4 md:h-36  md:w-full md:ml-0 md:mt-3">
        <RoadMap no={props.no} />
      </div>
    </div>
  );
}

export default SideBar;
