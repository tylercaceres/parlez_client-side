import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import RoundSettingsButton from "../../src/components/ContactList/RoundSettingsButton";

const story = () => {
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
};

export default story;
