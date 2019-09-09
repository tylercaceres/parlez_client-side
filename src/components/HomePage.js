import React, { useContext, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import FriendList from "./ContactList/FriendList";
import FriendProfile from "./ContactList/FriendProfile";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import "./HomePage.scss";
import { ChatViewContext, FriendContext } from "../Context";
import { initialize, loadInitialData } from "../server_api";

/***************************** HOME PAGE ********************************/

const HomePage = () => {
  const { masterState, dispatch } = useContext(ChatViewContext);
  const { friendState } = useContext(FriendContext);

  // useEffect(() => {
  // emits userId to retrieve user's data
  initialize(masterState.userId);

  // loads user's chatrooms/friends
  loadInitialData(data => {
    dispatch({
      type: "LOAD_INITIAL_DATA",
      data
    });
  });
  // });

  console.log("HOOME_PG:", masterState);

  return (
    <main className="layout">
      <header className="header"></header>
      <div className="contactsArea">
        <div className="chatHeader">
          <ChatHeader />
          <SearchBar />
        </div>
        <div className="contacts">
          {masterState.friendsView ? <FriendList /> : <ContactList />}
        </div>
      </div>
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
        ) : null}
      </div>
    </main>
  );
};

export default HomePage;
