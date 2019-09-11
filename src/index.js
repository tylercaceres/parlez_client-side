import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ChatViewProvider,
  FriendProvider,
  MsgProvider,
  ProfileProvider
} from "./Context";

let socket = require("socket.io-client")("ws://localhost:8080");

ReactDOM.render(
  <ChatViewProvider>
    <FriendProvider>
      <MsgProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </MsgProvider>
    </FriendProvider>
  </ChatViewProvider>,
  document.getElementById("root")
);
