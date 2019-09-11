import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChatViewProvider, FriendProvider, MsgProvider, NtfProvider } from "./Context";

let socket = require("socket.io-client")("ws://localhost:8080");

ReactDOM.render(
  <NtfProvider>
    <ChatViewProvider>
      <FriendProvider>
        <MsgProvider>
          <App />
        </MsgProvider>
      </FriendProvider>
    </ChatViewProvider>
  </NtfProvider>,
  document.getElementById("root")
);
