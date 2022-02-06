import React from "react";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { signOut,useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import RoadMap from './RoadMap'
import DrawerComponent from './DrawerComponent'
import { categories, planned } from "../data";
//




export default function SideBar(props) {
  const session = useSession();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="sidebar-mainContainer ">
      {open && (
        <div className="sm:hidden">
          <DrawerComponent
            handleFilter={props.handleFilter}
            open={open}
            number={props.number}
            planned={planned}
            categories={categories}
            close={handleClose}
          />
        </div>
      )}
      <div className="sidebar-subContainer ">
        <div>
          <div className="hidden  sm:block">
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

      <div className="sidebar-btnContainer p-5 ">
        {categories.map((item) => (
          <Chip
            label={item}
            variant="outlined"
            key={item}
            onClick={() => props.handleFilter(item)}
          />
        ))}
      </div>
      <div className=" sidebar-roadmap">
        <RoadMap planned={planned} number={props.number} />
      </div>
    </div>
  );
}
