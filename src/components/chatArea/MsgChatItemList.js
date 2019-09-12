import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MsgChatItem from "./MsgChatItem";
import { ChatViewContext } from "../../Context";

import { height } from "@material-ui/system";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

//helper to get active chatroom messages from chatrooms array:
const getActiveChat = (id, chatArr) => {
  for (let chat of chatArr) {
    if (chat.id === id) {
      return chat;
    }
  }
  return null;
};

const MsgChatItemList = ({ user }) => {
  const { masterState, dispatch } = useContext(ChatViewContext);

  console.log(masterState);

  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollFxn();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [masterState.chatrooms]);

  const scrollFxn = () => {
    scroller.scrollTo("bottomAnchor", {
      duration: 0,
      delay: 0,
      smooth: true,
      containerId: "chatAreaId",
      offset: 50
    });
  };

  let activeChat = getActiveChat(masterState.activeChat, masterState.chatrooms);

  const useStyles = makeStyles(theme => ({
    card: {
      background: "pink",
      marginTop: "100px"
    }
  }));
  const classes = useStyles();

  const chatItems =
    activeChat.messages &&
    activeChat.messages.map(msg => {
      return (
        <MsgChatItem
          creatorId={msg.user_id}
          creatorUsername={msg.username}
          id={msg.id}
          key={msg.id}
          createdTimeStamp={msg.created_at}
          deleted={msg.deleted}
        >
          {msg.content}
        </MsgChatItem>
      );
    });

  return (
    <>
      <div onClick={() => scrollFxn()}>Scroll To Bottom</div>
      {chatItems}
      <span name="bottomAnchor"></span>
    </>
  );
};

export default MsgChatItemList;
