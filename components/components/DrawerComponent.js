import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSession, signOut } from "next-auth/react";
import RoadMap from "./RoadMap";

const DrawerComponent = (props) => {
  const sm = useMediaQuery("(min-width:650px)");
  const session = useSession();
  
  const styles = {
    drawer: { display: sm ? "none" : "block" },
    list_container: { backgroundColor: "#e6e2da", minHeight: "100vh" },
    close_icon: { margin: "2px", color: "red" },
    logout_icon: { marginLeft: "10px", color: "red" },
  };

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={props.open}
      sx={styles.drawer}
      onClose={props.close}
    >
      <div>
        <List sx={styles.list_container}>
          <IconButton onClick={() => props.close()}>
            <CloseIcon sx={styles.close_icon} />
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
            <RoadMap data={props.data} />
          </div>
          {session.data && (
            <button onClick={() => signOut()} className="drawer_signout_btn">
              SignOut
              <LogoutIcon sx={styles.logout_icon} />
            </button>
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
