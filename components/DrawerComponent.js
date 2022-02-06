import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton,Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSession,signOut } from "next-auth/react";
import RoadMap from "./RoadMap"

const DrawerComponent = (props) => {
    const sm = useMediaQuery("(min-width:650px)");
    const session = useSession();
    return (
      <Drawer
        variant="temporary"
        anchor="right"
        open={props.open}
        sx={{ display: sm ? "none" : "block" }}
        onClose={props.close}
      >
        <div>
          <List sx={{ backgroundColor: "#e6e2da", minHeight: "100vh" }}>
            <IconButton onClick={() => props.close()}>
              <CloseIcon sx={{ margin: "2px", color: "red" }} />
            </IconButton>
            <div className="w-52 mx-5 p-4 rounded-md my-5 bg-white">
              {props.categories.map((item) => (
                <Chip
                  label={item}
                  variant="outlined"
                  key={item}
                  onClick={() => props.handleFilter(item)}
                />
              ))}
            </div>
            <div className="w-52 mx-5 p-4 rounded-md my-5 bg-white">
              <RoadMap planned={props.planned} number={props.number} />
            </div>
            {session.data && (
              <button
                onClick={() => signOut()}
                className="hover:bg-blue-300 w-3/4 rounded-md ml-7 p-2 font-bold text-white bg-blue-900"
              >
                SignOut
                <LogoutIcon sx={{ marginLeft: "10px", color: "red" }} />
              </button>
            )}
          </List>
        </div>
      </Drawer>
    );
  };

  export default DrawerComponent