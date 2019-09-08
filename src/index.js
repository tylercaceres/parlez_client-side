import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChatViewProvider, MsgProvider } from "./Context";

let socket = require("socket.io-client")("ws://localhost:8080");

ReactDOM.render(
  <ChatViewProvider>
    <MsgProvider>
      <App />
    </MsgProvider>
  </ChatViewProvider>,
  document.getElementById("root")
);
