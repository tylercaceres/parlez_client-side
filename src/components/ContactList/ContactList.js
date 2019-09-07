import React, { useState, useContext } from "react";
import ContactListItem from "./ContactListItems";
import { ChatViewContext } from "../../Context";

// helper to shorten message length:
const recentMessage = message => {
  const hide = "...";
  let conciseMessage = message
    .trim()
    .split(" ")
    .slice(0, 7)
    .join(" ");
  const finalMessage = (conciseMessage += hide);
  return message.length >= 50 ? finalMessage : message;
};

const ContactList = () => {
  const { masterState, dispatch } = useContext(ChatViewContext);

  const ContactListItems = masterState.chatrooms.map(chat => {
    return (
      <ContactListItem
        key={chat.id}
        id={chat.id}
        chatType={chat.type}
        chatName={chat.name}
        chatAvatar={chat.avatar}
        selected={masterState.activeChat === chat.id}
        recentMessage={recentMessage(chat.messages[0].content)}
        onClick={() =>
          dispatch({
            type: "ACTIVATE_CHAT",
            id: chat.id
          })
        }
      />
    );
  });

  return (
    <section>
      <ul style={{ padding: 0 }}>{ContactListItems}</ul>
    </section>
  );
};

export default ContactList;
