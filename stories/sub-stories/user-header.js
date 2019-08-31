import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import UserAddButton from "../../src/components/userHeader/UserAddButton";
import UserAvatar from "../../src/components/userHeader/UserAvatar";
import UserHeaderContainer from "../../src/components/userHeader/UserHeaderContainer";

const userHeaderStory = () => {
  storiesOf("UserHeader", module)
    .add("User_Add_Button_Clickable", () => <UserAddButton></UserAddButton>)
    .add("User_Avatar_Button_Clickable", () => (
      <UserAvatar onClick={action("Option to set new avatar")}></UserAvatar>
    ))
    .add("User_Header_Container", () => (
      <UserHeaderContainer></UserHeaderContainer>
    ));
};

export default userHeaderStory;
