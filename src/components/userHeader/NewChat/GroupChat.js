import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { socket } from "../../../server_api";
import { FriendContext, ChatViewContext } from "../../../Context";
import "./CreateChat.scss";
import FriendList from "../../ContactList/FriendList";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  }
}));

const handleSubmit = () => {};

const GroupFriendList = props => {
  const classes = useStyles();

  const { friendState, dispatchFriend } = useContext(FriendContext);
  const { masterState } = useContext(ChatViewContext);

  const [friendlist, setFriendlist] = useState([]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleGroupSubmit = () => {
    console.log("GROUP SUBMIT CLICKED");
    let user_arr = friendlist.push(masterState.userId);
    socket.emit("create group chat", {
      type: "group",
      name: name,
      creatorUserId: masterState.userId,
      usersArr: friendlist,
      avatar: avatar
    });
  };

  const friend = friendState.friends.map(friend => {
    return (
      <>
        <input
          type="checkbox"
          value={friend.id}
          onClick={() => {
            setFriendlist([...friendlist, friend.id]);
          }}
        />
        <img src={friend.avatar}></img>
        {friend.username}
      </>
    );
  });

  console.log("FRIENDLIST", friendlist);
  console.log("GROUP CHAT NAME", name);

  return (
    <div className="addContainer">
      <form>
        <input type="text" placeholder="Enter group name..." value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Avatar URL..." value={avatar} onChange={e => setAvatar(e.target.value)} />
        {friend}
      </form>
      <button onClick={handleGroupSubmit}>Create</button>
    </div>
  );
};

export default GroupFriendList;
