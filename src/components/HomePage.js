import React, { useContext } from "react";
import ContactList from "./ContactList/ContactList";
import FriendList from "./ContactList/FriendList";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import "./HomePage.scss";
import { ChatViewContext } from "../Context";

let socket = require("socket.io-client")("ws://localhost:8080");

socket.emit("create messages", 2);
socket.on("load messages", msg => {
  console.log("SERVER", msg);
});

/***************************** HOME PAGE ********************************/

const HomePage = () => {
  const { masterState } = useContext(ChatViewContext);

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
          {masterState.activeChat && masterState.chatrooms ? (
            <MsgChatItemList user="tyler" />
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
