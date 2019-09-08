import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChatViewProvider, FriendProvider, MsgProvider } from "./Context";

let socket = require("socket.io-client")("ws://localhost:8080");

ReactDOM.render(
  <ChatViewProvider>
    <FriendProvider>
      <MsgProvider>
        <App />
      </MsgProvider>
    </FriendProvider>
  </ChatViewProvider>,
  document.getElementById("root")
);
