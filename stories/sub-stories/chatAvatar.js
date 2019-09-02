import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChatAvatar from "../../src/components/ContactList/ChatAvatar";

const story = () => {
  // Chat Avatar
  storiesOf("Avatar", module)
    .add("Avatar", () => <ChatAvatar></ChatAvatar>)
    .add("Avatar_clickable", () => (
      <ChatAvatar onClick={action("clicked!")}></ChatAvatar>
    ));
};

export default story;
