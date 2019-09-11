import React, { useContext, useEffect, Fragment } from "react";
import ContactList from "./ContactList/ContactList";
import FriendList from "./ContactList/FriendList";
import FriendProfile from "./ContactList/FriendProfile";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import "./HomePage.scss";
import { ChatViewContext, FriendContext, NtfContext } from "../Context";
import UserAvatar from "./userHeader/UserAvatar";
import UserButton from "./userHeader/UserAddButton";
import Divider from "@material-ui/core/Divider";
import img1 from "../assets/img/dog1.png";
import img2 from "../assets/img/dog2.png";
import img3 from "../assets/img/dog3.png";
import img4 from "../assets/img/dog4.png";
import img5 from "../assets/img/dog5.png";

import axios from "axios";
import {
  sendUserId,
  loadInitialChatroomsData,
  loadInitialFriendsData,
  receiveMessage,
  socket
} from "../server_api";

const HomePage = () => {
  const { ntfState, dispatchNtf } = useContext(NtfContext);
  const { masterState, dispatch } = useContext(ChatViewContext);
  const { friendState, dispatchFriend } = useContext(FriendContext);

  console.log("HOME_PG", masterState);
  console.log("FRIEND_STATE", friendState);

  useEffect(() => {
    axios
      .get("http://localhost:3003/auth/checkloggedin", {
        withCredentials: true
      })
      .then(res => {
        console.log("res", res);
        if (res.data.logged_in && masterState.isLoggedIn === false) {
          dispatch({
            type: "SIGNUP",
            id: res.data.user_id,
            data: res.data.logged_in
          });
          loadInitialChatroomsData(data => {
            console.log("bleep bloop", data);
            dispatch({
              type: "LOAD_INITIAL_DATA",
              data
            });
          });
          sendUserId(res.data.user_id);
        }
      })
      .catch(err => console.log("error:", err));

    if (masterState.isLoggedIn) {
      console.log("LOOOGGED IN");
    }

    loadInitialFriendsData(data => {
      dispatchFriend({
        type: "LOAD_FRIENDS",
        data
      });
    });

    socket.on("new chatroom message", data => {
      dispatch({ type: "ADD_MESSAGE", data });
      dispatchNtf({ type: "SET_NOTIFICATION", id: data.id });
    });

    socket.on("to be disconnected", () => {
      alert("we have been disconnected");
    });

    socket.on("delete my message", data => {
      let chatroom_id = data.chatroom;
      let message_id = data.message.id;
      dispatch({
        type: "DELETE_MESSAGE",
        chatroom_id: chatroom_id,
        message_id: message_id
      });
    });

    socket.on("delete owner message", data => {
      let chatroom_id = data.chatroom;
      let message_id = data.message.id;
      let message = data.message;
      console.log("DELETE OWNER MESSAGE", data);
      dispatch({
        type: "UPDATE_DELETE_MESSAGE",
        chatroom_id: chatroom_id,
        message_id: message_id,
        message: message
      });
    });

    socket.on("delete viewable messages", data => {
      let chatroom_id = data;
      dispatch({
        type: "DELETE_CHATROOM",
        chatroom_id: chatroom_id
      });
    });
  }, []);

  return (
    <body className="layout">
      <div className="contactsArea">
        <div className="userHeader">
          <UserAvatar />
          <UserButton />
        </div>

        <Fragment>
          <ChatHeader />
        </Fragment>
        <Divider />
        <Fragment>
          <SearchBar />
        </Fragment>
        <Fragment>
          {masterState.friendsView ? <FriendList /> : <ContactList />}
        </Fragment>
      </div>

      <div>
        <div className="chatBox">
          {masterState.activeChat &&
          masterState.chatrooms.length > 0 &&
          !masterState.friendsView ? (
            <>
              <div className="chatArea">
                <MsgChatItemList />
              </div>
              <div className="chatInput">
                <MsgChatBox />
              </div>
            </>
          ) : masterState.friendsView && friendState.selectedFriend ? (
            <FriendProfile />
          ) : (
            <div className="emptyChat">
              <fragment>
                <img src={img1} alt="dog" />
              </fragment>
              <fragment>
                <img src={img2} alt="dog" />
              </fragment>
              <fragment>
                <img src={img3} alt="dog" />
              </fragment>
              <fragment>
                <img src={img4} alt="dog" />
              </fragment>
              <fragment>
                <img src={img5} alt="dog" />
              </fragment>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default HomePage;
