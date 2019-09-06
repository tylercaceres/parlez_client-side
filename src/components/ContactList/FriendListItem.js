import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChatAvatar from "./ChatAvatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const FriendListItem = props => {
  return (
    <li>
      <ListItem button>
        <ListItemAvatar>
          <ChatAvatar avatar={props.avatar} />
        </ListItemAvatar>
        <ListItemText primary={props.name} />
      </ListItem>
    </li>
  );
};

export default FriendListItem;
