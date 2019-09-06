import React, { useState } from "react";
import FriendListItem from "./FriendListItem";

const FriendList = props => {
  const FriendListItems = props.friends.map(friend => {
    return (
      <FriendListItem
        key={friend.id}
        id={friend.id}
        name={friend.username}
        avatar={friend.avatar}
      />
    );
  });

  return (
    <section>
      <ul style={{ padding: 0 }}>{FriendListItems}</ul>
    </section>
  );
};

export default FriendList;
