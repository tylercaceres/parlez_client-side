import React, { useReducer } from "react";

const initialMasterState = {
  username: "rparlot3",
  userId: 4,
  friendsView: false,
  activeChat: null,
  hover: null,
  // newMessage: "",
  // msgInputCharCount: 0,
  friends: [
    {
      id: 1,
      email: "friend_1@email.com",
      username: "Friend_1",
      avatar: "/avatar/one.png",
      status: "busy"
    },
    {
      id: 2,
      email: "friend_2@email.com",
      username: "Friend_2",
      avatar: "/avatar/two.png",
      status: "busy"
    },
    {
      id: 3,
      email: "friend_3@email.com",
      username: "Friend_3",
      avatar: "/avatar/three.png",
      status: "busy"
    }
  ],
  chatrooms: []
};

let masterReducer = (state, action) => {
  switch (action.type) {
    // case 'LOAD_INITIAL_DATA':
    //   return {...state, chatrooms: '5'};
    case "LOAD_INITIAL_DATA":
      return { ...state, chatrooms: action.data };
    case "CHAT_VIEW":
      return { ...state, friendsView: false };
    case "FRIENDS_VIEW":
      return { ...state, friendsView: true };
    case "ACTIVATE_CHAT":
      return { ...state, friendsView: false, activeChat: action.id };
    case "HOVER_ON":
      return { ...state, hover: action.id };
    case "HOVER_OFF":
      return { ...state, hover: null };
    // case "NEW_MESSAGE":
    //   return { ...state, newMessage: action.data };
    // case "MESSAGE_SENT":
    //   return { ...state, newMessage: "" };
    // case "UPDATE_COUNT":
    //   return { ...state, msgInputCharCount: action.data };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const ChatViewContext = React.createContext(initialMasterState);

const ChatViewProvider = props => {
  const [masterState, dispatch] = useReducer(masterReducer, initialMasterState);

  return (
    <ChatViewContext.Provider value={{ masterState, dispatch }}>
      {props.children}
    </ChatViewContext.Provider>
  );
};

// export { ChatViewContext, ChatViewProvider };

/********************************* NEW MSG CONTEXT ***********************************/

const initialMsgState = {
  newMessage: "",
  charCount: 0,
  msgBtnStatus: true,
  countDisplay: "0 characters"
};

let msgReducer = (state, action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return { ...state, newMessage: action.data };
    case "MESSAGE_SENT":
      return {
        ...state,
        newMessage: "",
        countDisplay: "0 characters",
        msgBtnStatus: true
      };
    case "CHECK_COUNT":
      return { ...state, msgBtnStatus: !true };
    case "UPDATE_COUNT":
      return {
        ...state,
        charCount: action.data,
        countDisplay: `${action.data.toString()} characters`
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const MsgContext = React.createContext(initialMsgState);

const MsgProvider = props => {
  const [msgState, dispatch] = useReducer(msgReducer, initialMsgState);

  return (
    <MsgContext.Provider value={{ msgState, dispatch }}>
      {props.children}
    </MsgContext.Provider>
  );
};

export { ChatViewContext, ChatViewProvider, MsgContext, MsgProvider };
