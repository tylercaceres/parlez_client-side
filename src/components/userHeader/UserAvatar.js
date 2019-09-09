import React, { useState } from "react";
import "./UserAvatar.scss";
import pic from "../../../src/assets/img/Image-1.png";

export default function ImageAvatars(props) {
  const [newAvatar, setNewAvatar] = useState(pic);

  return (
    <div>
      <img
        alt={"avatar"}
        src={newAvatar}
        className="avatar"
        onClick={() => {
          props.onClick(setNewAvatar);
        }}
      />
    </div>
  );
}
