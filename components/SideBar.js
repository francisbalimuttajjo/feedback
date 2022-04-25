import React from "react";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { signOut, useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import RoadMap from "./components/RoadMap";
import DrawerComponent from "./components/DrawerComponent";
import { categories } from "../data";
//

export default function SideBar(props) {
  const session = useSession();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full  mx-auto sm:w-11/12 md:w-1/4  sm:flex sm:flex-row   sm:mb-4 sm:mt-4 md:flex-col   md:mt-32 sticky md:h-screen top-0 ">
      {open && (
        <div className="sm:hidden">
          <DrawerComponent
            handleFilter={props.handleFilter}
            open={open}
            data={props.data}
            categories={categories}
            close={handleClose}
          />
        </div>
      )}

      <div className="w-full sm:w-1/3 md:w-full  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex justify-around  sm:h-36 sm:rounded-lg  ">
        <div>
          <div className="hidden  sm:block w-full">
            {session.data && (
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
            )}
          </div>

          <p className=" font-semibold text-3xl  sm:mt-6 ">Budget App</p>
          <p className=" opacity-70 "> Feedback Forum</p>
        </div>
        <div className="my-auto sm:hidden -right-10 relative  md:hidden lg:hidden ">
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <div className="hidden  overflow-hidden sm:block rounded-lg  bg-white px-2  mx-2 md:mx-0 w-1/3  h-36 py-4 md:h-36  md:w-full  md:mt-3 ">
        {categories.map((item) => (
          <Chip
            label={item}
            variant="outlined"
            key={item}
            onClick={() => props.handleFilter(item)}
          />
        ))}
      </div>
      <div className=" hidden overflow-hidden sm:block  rounded-lg  bg-white   w-3/12  h-36 md:py-4 md:h-36  md:w-full  md:mt-3">
        <RoadMap data={props.data} />
      </div>
    </div>
  );
}
