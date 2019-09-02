import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchBar from "../../src/components/ContactList/SearchBar";

const chatrooms = [
  {
    id: 1,
    type: "Single",
    name: "Single Chat",
    avatar: "image/path"
  },
  {
    id: 2,
    type: "Group",
    name: "Group Chat",
    avatar: "image/path"
  }
];

const story = () => {
  // Chat Search Bar:
  storiesOf("SearchBar", module)
    .add("SearchBar", () => <SearchBar chatrooms={chatrooms}></SearchBar>)
    .add("SearchBar_clickable", () => (
      <SearchBar onClick={action("clicked!")} chatrooms={chatrooms}></SearchBar>
    ));
};

export default story;
