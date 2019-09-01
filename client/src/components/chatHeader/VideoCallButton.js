import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const VideoCallButton = props => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
    >
      <VideoCallIcon />
    </button>
  );
};

export default VideoCallButton;
