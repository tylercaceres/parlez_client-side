import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChatAvatar from "../../src/components/chatHeader/ChatAvatar";
import GroupChatName from "../../src/components/chatHeader/GroupChatName";
import SingleChatName from "../../src/components/chatHeader/SingleChatName";
import ChatNameContainer from "../../src/components/chatHeader/ChatNameContainer";
import VideoCallButton from "../../src/components/chatHeader/VideoCallButton";
import VoiceCallButton from "../../src/components/chatHeader/VoiceCallButton";

const chatrooms = [
  {
    id: 1,
    type: "single",
    name: "single Chat",
    avatar: "image/path"
  }
];

const story = () => {
  // Chat Avatar
  storiesOf("ChatHeader", module)
    .add("Chat_Avatar", () => <ChatAvatar></ChatAvatar>)
    .add("Single_Chat_Name", () => (
      <SingleChatName onClick={action("clicked!")}></SingleChatName>
    ))
    .add("Group_Chat_Name", () => (
      <GroupChatName onClick={action("clicked!")}></GroupChatName>
    ))
    .add("Video_Call_Button", () => (
      <VideoCallButton onClick={action("clicked!")}></VideoCallButton>
    ))
    .add("Voice_Call_Button", () => (
      <VoiceCallButton onClick={action("clicked!")}></VoiceCallButton>
    ))
    .add("Chat_Name_Container", () => (
      <ChatNameContainer onClick={action("clicked!")}></ChatNameContainer>
    ));
};

export default story;
