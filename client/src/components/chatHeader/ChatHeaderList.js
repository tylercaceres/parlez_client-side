import React, { Component } from "react";

import ChatNameContainer from "./ChatNameContainer";

class ChatNameContainer extends Component {
  state = {
    chatRooms: {
      name: "single name",
      type: "single",
      avatar: "image/path"
    }
  };

  render() {
    return (
      <div>
        <ChatNameContainer
          name={this.state.chatRooms.name}
          type={this.state.chatRooms.type}
          avatar={this.state.chatRooms.avatar}
        />
      </div>
    );
  }
}

export default ChatNameContainer;
