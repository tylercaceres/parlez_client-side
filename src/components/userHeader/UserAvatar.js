import React, { useState } from "react";
import "./UserAvatar.scss";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../../src/assets/img/Image-1.png";

export default function ImageAvatars(props) {
  const [newAvatar, setNewAvatar] = useState(pic);

  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src={newAvatar}
        className="bigAvatar"
        onClick={() => {
          props.onClick(setNewAvatar);
        }}
      />
    </div>
  );
}
