import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../../src/assets/img/Image-1.png";
import "./ChatAvatar.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    size: "large"
  }
}));

const ChatAvatar = props => {
  const classes = useStyles();
  const [newAvatar, setNewAvatar] = useState(pic);

  return (
    <>
      <img alt="Remy Sharp" src={newAvatar} className="bigAvatar" onClick={console.log("hi")} />
    </>
  );
};

export default ChatAvatar;
