import React from "react";
import ContactButton from "./ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import "./ChatHeader.scss";

const ChatHeader = () => {
  return (
    <div className="chat_header">
      <div className="chat_button">
        <ContactButton>
          <ForumRoundedIcon />
        </ContactButton>
      </div>
      <div className="contacts_button">
        <ContactButton>
          <RecentActorsRoundedIcon />
        </ContactButton>
      </div>
    </div>
  );
};

export default ChatHeader;
