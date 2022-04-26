import React from "react";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { signOut, useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import RoadMap from './reusableComponents/RoadMap'
import DrawerComponent from "./reusableComponents/DrawerComponent";
import { categories } from "../data";

export default function SideBar(props) {
  const session = useSession();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const styles = {
    logout_icon: { marginLeft: "5px", color: "white" },
    menu: { color: "white" },
  };

  return (
    <div className="sidebar_container ">
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

      <div className="sidebar_headingContainer ">
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
                  <LogoutIcon sx={styles.logout_icon} />
                </IconButton>
              </Tooltip>
            )}
          </div>

          <p className=" font-semibold text-3xl  sm:mt-6 ">Budget App</p>
          <p className=" opacity-70 "> Feedback Forum</p>
        </div>
        <div className="sidebar_menubutton ">
          <IconButton sx={styles.menu} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_subcontainer px-1 ">
        {categories.map((item) => (
          <Chip
            label={item}
            variant="outlined"
            key={item}
            onClick={() => props.handleFilter(item)}
          />
        ))}
      </div>
      <div className="sidebar_subcontainer">
        <RoadMap data={props.data} />
      </div>
    </div>
  );
}
