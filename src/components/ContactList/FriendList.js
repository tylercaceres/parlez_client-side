import React, { useContext } from "react";
import FriendListItem from "./FriendListItem";
import { ChatViewContext } from "../../Context";

const FriendList = () => {
  const { masterState } = useContext(ChatViewContext);

  const FriendListItems = masterState.friends.map(friend => {
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
