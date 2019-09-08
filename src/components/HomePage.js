import React, { useContext, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import FriendList from "./ContactList/FriendList";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import "./HomePage.scss";
import { ChatViewContext } from "../Context";
import { loadInitialData } from "../server_api";

/***************************** HOME PAGE ********************************/

const HomePage = () => {
  const { masterState, dispatch } = useContext(ChatViewContext);

  useEffect(() => {
    loadInitialData(data => {
      dispatch({
        type: "LOAD_INITIAL_DATA",
        data
      });
    });
  });

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
        <div className="chatArea">
          {masterState.activeChat && masterState.chatrooms.length > 0 ? (
            <MsgChatItemList />
          ) : null}
        </div>
        <div className="chatInput">
          <MsgChatBox />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
