import React, { useState } from "react";
import ContactListItem from "./ContactListItems";

const ContactList = props => {
  const ContactListItems = props.chats.map(chat => {
    return (
      <ContactListItem
        key={chat.id}
        id={chat.id}
        chatType={chat.type}
        chatName={chat.name}
        chatAvatar={chat.avatar}
        setActiveChat={props.setActiveChat}
        selected={props.selected(chat.id)}
        recentMessage={props.recentMessage(chat.messages[0].content)}
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
