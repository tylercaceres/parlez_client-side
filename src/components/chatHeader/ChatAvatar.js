import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ChatProfile from "./ChatProfile";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className="chatSideDrawerBox" role="presentation">
      <ChatProfile />
    </div>
  );

  return (
    <div>
      <img alt={"avatar"} src="pic" className="chatAvatar" onClick={toggleDrawer("left", true)} />
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
