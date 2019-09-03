import React, { useState } from "react";
import ContactListItem from "./ContactListItems";

const ContactList = props => {
  const [select, setSelect] = useState({});
  const ContactListItems = props.chats.map(chat => {
    return (
      <ContactListItem
        key={chat.id}
        id={chat.id}
        chatType={chat.type}
        chatName={chat.name}
        chatAvatar={chat.avatar}
        onClick={() => setSelect({ [chat.id]: true })}
        selected={select[chat.id]}
        recentMessage={props.recentMessage}
      />
    );
  });

  return (
    <section>
      <ul>{ContactListItems}</ul>
    </section>
  );
};

export default ContactList;
