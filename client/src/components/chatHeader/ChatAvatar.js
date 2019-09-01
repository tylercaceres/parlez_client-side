import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../../src/assets/img/Image-1.png";

const ChatAvatar = props => {
  const [newAvatar, setNewAvatar] = useState(pic);

  return (
    <Avatar
      alt="Remy Sharp"
      src={newAvatar}
      className="bigAvatar"
      onClick={() => {
        props.onClick(setNewAvatar);
      }}
    />
  );
};

export default ChatAvatar;
