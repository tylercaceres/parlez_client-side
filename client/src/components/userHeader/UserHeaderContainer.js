import React from "react";
import UserAvatar from "./UserAvatar";
import UserAddButton from "./UserAddButton";
import "./UserHeaderContainer.scss";

const UserHeaderContainer = props => {
  return (
    <div className="container">
      <UserAvatar />
      <UserAddButton />
    </div>
  );
};

export default UserHeaderContainer;
