import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactButton from "../../src/components/ContactList/ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";

const story = () => {
  // Contact Buttons
  storiesOf("ContactButton", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("Chats", () => (
      <ContactButton>
        <ForumRoundedIcon />
      </ContactButton>
    ))
    .add("Chats_Clickable", () => (
      <ContactButton onClick={action("button-clicked")}>
        <ForumRoundedIcon />
      </ContactButton>
    ))
    .add("Chats_Selected", () => (
      <ContactButton selected onClick={action("button-clicked")}>
        <ForumRoundedIcon />
      </ContactButton>
    ))
    .add("Contacts", () => (
      <ContactButton>
        <RecentActorsRoundedIcon />
      </ContactButton>
    ))
    .add("Contacts_Clickable", () => (
      <ContactButton onClick={action("button-clicked")}>
        <RecentActorsRoundedIcon />
      </ContactButton>
    ))
    .add("Contacts_Selected", () => (
      <ContactButton selected onClick={action("button-clicked")}>
        <RecentActorsRoundedIcon />
      </ContactButton>
    ));
};

export default story;
