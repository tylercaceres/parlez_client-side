import React from "react";
import Box from "@material-ui/core/Box/Box";
const GroupChatName = props => {
  return (
    <Box
      className="button"
      onClick={() => {
        props.onClick();
      }}
    >
      Cool People Club
    </Box>
  );
};

export default GroupChatName;
