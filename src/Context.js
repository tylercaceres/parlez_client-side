import React, { useReducer } from "react";

const initialState = {
  username: "rparlot3",
  userId: 4,
  friendsView: false,
  activeChat: null,
  hover: null,
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

let reducer = (state, action) => {
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
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const ChatViewContext = React.createContext(initialState);

const ChatViewProvider = props => {
  const [masterState, dispatch] = useReducer(reducer, initialState);

  return (
    <ChatViewContext.Provider value={{ masterState, dispatch }}>
      {props.children}
    </ChatViewContext.Provider>
  );
};

export { ChatViewContext, ChatViewProvider };
