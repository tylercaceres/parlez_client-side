import React from "react";
import Box from "@material-ui/core/Box/Box";
const SingleChatName = props => {
  return (
    <Box
      className="button"
      onClick={() => {
        props.onClick();
      }}
    >
      Tyler
    </Box>
  );
};

export default SingleChatName;
