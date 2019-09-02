import React from "react";
import CallIcon from "@material-ui/icons/Call";

const VoiceCallButton = props => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
    >
      <CallIcon />
    </button>
  );
};

export default VoiceCallButton;
