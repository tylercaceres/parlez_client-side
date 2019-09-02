import React from "react";
import { storiesOf } from "@storybook/react";
import ContactList from "../../src/components/ContactList/ContactList";

const chatrooms = [
  {
    id: 1,
    type: "group",
    name: "Anchen & Tyler",
    avatar: "public/user_avatar/avatar_user_five.png"
  },
  {
    id: 2,
    type: "single",
    name: "Anchen",
    avatar: "public/user_avatar/avatar_user_three.png"
  },
  {
    id: 3,
    type: "group",
    name: "Anchen/Tyler/Selin",
    avatar: "public/user_avatar/avatar_user_one.png"
  }
];

let longMessage =
  "Most recent message in this chat what if its super super super super super super super super long";

let conciseMessage = "Concise message.";

const showMessage = message => {
  const hide = "...";
  let conciseMessage = message
    .trim()
    .split(" ")
    .slice(0, 7)
    .join(" ");
  const finalMessage = (conciseMessage += hide);
  return message.length >= 50 ? finalMessage : message;
};

const story = () => {
  storiesOf("ContactList", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("Contacts_longRecentMessage", () => (
      <ContactList
        recentMessage={showMessage(longMessage)}
        chats={chatrooms}
      ></ContactList>
    ))
    .add("Contacts_conciseRecentMessage", () => (
      <ContactList
        recentMessage={showMessage(conciseMessage)}
        chats={chatrooms}
      ></ContactList>
    ));
};

export default story;
