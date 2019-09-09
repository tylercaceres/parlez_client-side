import React, { useContext } from "react";
import ContactButton from "./ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import "./ChatHeader.scss";
import { ChatViewContext } from "../../Context";
import ChatBubble from "../../assets/img/chatbubble.png";
import Contacts from "../../assets/img/contacts1.png";

const ChatHeader = () => {
  const { dispatch } = useContext(ChatViewContext);

  const handleChatClick = () => {
    dispatch({ type: "CHAT_VIEW" });
  };

  const handleFriendsClick = () => {
    dispatch({ type: "FRIENDS_VIEW" });
  };

  return (
    <div className="chat_header">
      <div className="chat_button">
        <ContactButton onClick={handleChatClick}>
          <img src={ChatBubble} className="chatImg" />
        </ContactButton>
      </div>
      <div className="contacts_button">
        <ContactButton onClick={handleFriendsClick}>
          <img src={Contacts} className="chatImg" />
        </ContactButton>
      </div>
    </div>
  );
};

export default ChatHeader;
