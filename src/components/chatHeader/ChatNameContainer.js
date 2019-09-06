import React from "react";
import SingleChatName from "./SingleChatName";
import GroupChatName from "./GroupChatName";
import ChatAvatar from "./ChatAvatar";
import "./ChatNameContainer.scss";
import VideoCallButton from "./VideoCallButton";
import VoiceCallButton from "./VoiceCallButton";

// const chatrooms =[{

// }]

const chatRoom = props => {
  if (props.type === "single") {
    return (
      <div className="container">
        <div className="leftSide">
          <fragment>
            <ChatAvatar />
          </fragment>
          <fragment>
            <SingleChatName />
          </fragment>
        </div>
        <div className="rightSide">
          <fragment>
            <VideoCallButton />
          </fragment>
          <fragment>
            <VoiceCallButton />
          </fragment>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="leftSide">
        <fragment>
          <ChatAvatar />
        </fragment>
        <fragment>
          <GroupChatName />
        </fragment>
      </div>
      <div className="rightSide">
        <fragment>
          <VideoCallButton />
        </fragment>
        <fragment>
          <VoiceCallButton />
        </fragment>
      </div>
    </div>
  );
};

export default chatRoom;
