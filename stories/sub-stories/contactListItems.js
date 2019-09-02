import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactListItems from "../../src/components/ContactList/ContactListItems";

const story = () => {
  storiesOf("ContactListItems", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("ContactCard_groupChat", () => (
      <ContactListItems
        chatName="Anchen/Tyler/Selin"
        chatType="group"
        recentMessage="Most recent message."
      ></ContactListItems>
    ))
    .add("ContactCard_singleChat", () => (
      <ContactListItems
        chatName="Anchen"
        recentMessage="Most recent message."
        chatType="single"
      ></ContactListItems>
    ))
    .add("ContactCard_clickable", () => (
      <ContactListItems
        chatName="Anchen"
        chatType="single"
        recentMessage="Most recent message."
        onClick={action("Clicked!")}
      ></ContactListItems>
    ))
    .add("ContactCard_selected", () => (
      <ContactListItems
        chatName="Anchen"
        chatType="single"
        recentMessage="Most recent message."
        selected
      ></ContactListItems>
    ));
};

export default story;
