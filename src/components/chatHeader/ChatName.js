import React from "react";
import "./ChatName.scss";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button";

const SingleChatName = props => {
  return (
    <Button className="chatNameButton" onClick={() => console.log("hello")}>
      <p className="chatName">Tyler</p>
    </Button>
  );
};

export default SingleChatName;
