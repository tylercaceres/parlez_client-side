import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import MsgEmojiIcon from "./MsgEmojiIcon";
import MsgSubmitBtn from "./MsgSubmitBtn";
import MsgInputField from "./MsgInputField";

import { ChatViewContext, MsgContext } from "../../Context";
import { sendMessage } from "../../server_api";

const MsgChatBox = () => {
  const { masterState} = useContext(ChatViewContext);
  const { msgState, dispatch } = useContext(MsgContext);

  const message = {
    userId: masterState.userId,
    chatroomId: masterState.activeChat,
    content: msgState.newMessage
  };

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    container: {
      display: "flex",
      alignItems: "center",
      margin: "0",
      border: "1px red solid"
    },
    emoji: {
      padding: "1em"
    }
  }));
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.emoji}>
        <MsgEmojiIcon></MsgEmojiIcon>
      </Box>
      <MsgInputField></MsgInputField>
      <Box className={classes.emoji}>
        <MsgSubmitBtn
          disabled={msgState.msgBtnStatus}
          onClick={e => {
            e.preventDefault();
            sendMessage(message);
            dispatch({ type: "MESSAGE_SENT" });
          }}
        ></MsgSubmitBtn>
      </Box>
    </Box>
  );
};

export default MsgChatBox;
