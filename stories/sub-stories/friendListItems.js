import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FriendListItem from "../../src/components/ContactList/FriendListItem";

const story = () => {
  storiesOf("FriendListItems", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("ContactCard_groupChat", () => (
      <FriendListItem avatar="avatar/two.png" />
    ));
};

export default story;
