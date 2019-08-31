import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import ContactButton from "../src/components/ContactList/ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import RoundSettingsButton from "../src/components/ContactList/RoundSettingsButton";
import UserHeader from "./sub-stories/user-header";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

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

// Chat Settings Popup Button:
storiesOf("ChatSettingButton", module)
  .add("Settings_SingleChat", () => (
    <RoundSettingsButton chatType="single"></RoundSettingsButton>
  ))
  .add("Settings_GroupChat", () => (
    <RoundSettingsButton chatType="group"></RoundSettingsButton>
  ))
  .add("Settings_Selected", () => (
    <RoundSettingsButton selected></RoundSettingsButton>
  ));

UserHeader();
