import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import pic from "../../../src/assets/img/Image-1.png";
import "./UserAvatar.scss";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import UserProfile from "./UserProfile";

const TemporaryDrawer = () => {
  const [sideDrawer, setSideDrawer] = useState(false);

  return (
    <div>
      <img
        alt={"avatar"}
        src={pic}
        className="userAvatar"
        onClick={() => setSideDrawer(true)}
      />
      <Drawer
        open={sideDrawer}
        onClose={() => {
          setSideDrawer(false);
        }}
      >
        {UserProfile()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
