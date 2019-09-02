import React from "react";

const avatarStyle = {
  border: "5px solid pink",
  borderRadius: "40%"
};

const ChatAvatar = props => {
  return (
    <section>
      <img
        style={avatarStyle}
        src="avatar/two.png"
        alt={"Chat Avatar"}
        onClick={props.onClick}
      ></img>
    </section>
  );
};

export default ChatAvatar;
