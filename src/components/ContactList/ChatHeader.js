import React, { useContext } from "react";
import ContactButton from "./ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import "./ChatHeader.scss";
import { ChatViewContext } from "../../Context";

const ChatHeader = () => {
  const { dispatch } = useContext(ChatViewContext);

  return (
    <div className="chat_header">
      <div className="chat_button">
        <ContactButton onClick={() => dispatch({ type: "CHAT_VIEW" })}>
          <ForumRoundedIcon />
        </ContactButton>
      </div>
      <div className="contacts_button">
        <ContactButton onClick={() => dispatch({ type: "FRIENDS_VIEW" })}>
          <RecentActorsRoundedIcon />
        </ContactButton>
      </div>
    </div>
  );
};

export default ChatHeader;
