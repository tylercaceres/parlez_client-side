import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./AddFriend.scss";
import Button from "@material-ui/core/Button";
import { socket } from "../../../server_api";
import { FriendContext } from "../../../Context";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  }
}));

const AddFriend = () => {
  const { dispatchFriend } = useContext(FriendContext);

  const classes = useStyles();

  const [showFriends, setShowFriends] = useState({
    username: null,
    email: null,
    avatar: null,
    status: null,
    id: null
  });
  const [addEmail, setAddEmail] = useState("");

  const onChangeEmail = e => {
    setAddEmail(e.target.value);
  };

  const handleSubmit = () => {
    const data = { email: addEmail };
    socket.emit("search friend", data);
    setShowFriends({
      username: null,
      email: null,
      avatar: null,
      status: null,
      id: null
    });
  };

  const handleFriendSubmit = () => {
    socket.emit("add new friend", showFriends);
  };

  useEffect(() => {
    socket.on("found friend", data => {
      setShowFriends(data);
    });
    socket.on("friendlist data", data => {
      dispatchFriend({ type: "ADD_FRIEND", data });
      console.log("CHECKING IN SOCKET TO SEE WAHT DATA IS", data);
    });
  }, []);

  return (
    <div className="addContainer">
      <TextField
        id="standard-search"
        label="Enter Email"
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={onChangeEmail}
        value={addEmail}
      />
      <Button onClick={handleSubmit}>Button</Button>
      {showFriends.username && (
        <div>
          showing friends over here
          <ul>
            <li>{showFriends.username}</li>
            <li>{showFriends.email}</li>
            <li> {showFriends.avatar}</li>
            <li> {showFriends.status}</li>
            <button onClick={handleFriendSubmit}>button here </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddFriend;
