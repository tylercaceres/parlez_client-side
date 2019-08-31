import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactListItems from "../../src/components/ContactList/ContactListItems";

const chatrooms = [
  {
    id: 1,
    type: "Single",
    name: "Single Chat",
    avatar: "image/path"
  }
];

const story = () => {
  storiesOf("ContactListItems", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("ContactCard_groupChat", () => (
      <ContactListItems
        chatName={chatrooms.name}
        chatType="group"
      ></ContactListItems>
    ))
    .add("ContactCard_singleChat", () => (
      <ContactListItems chatType={chatrooms.type}></ContactListItems>
    ));
};

export default story;
