import React, { useReducer } from "react";

const initialMasterState = {
  userId: null,
  isLoggedIn: false,
  friendsView: false,
  activeChat: null,
  chatrooms: []
};

let masterReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, userId: action.id, isLoggedIn: action.data };
    case "LOAD_INITIAL_DATA":
      return { ...state, chatrooms: action.data };
    case "CHAT_VIEW":
      return { ...state, friendsView: false };
    case "FRIENDS_VIEW":
      return { ...state, friendsView: true };
    case "ACTIVATE_CHAT":
      return { ...state, friendsView: false, activeChat: action.id };
    case "ACTIVATE_SETTINGS":
      return { ...state, activeChat: null };
    // case "HOVER_ON":
    //   return { ...state, hover: action.id };
    // case "HOVER_OFF":
    //   return { ...state, hover: null };
    case "ADD_MESSAGE":
      console.log("ADD MESSAGE HAS BEEN FIRED", state);
      let matchChat = state.chatrooms.findIndex(chat => chat.id === action.data.id);
      if (matchChat != -1) {
        const temp = state.chatrooms.map(chatroom => {
          if (chatroom.id === action.data.id) {
            return {
              ...chatroom,
              messages: [...chatroom.messages, action.data.messages[0]]
            };
          } else {
            return { ...chatroom };
          }
        });
        return { ...state, chatrooms: temp };
      } else {
        return { ...state, chatrooms: [...state.chatrooms, action.data] };
      }
    case "DELETE_MESSAGE":
      const temp2 = state.chatrooms.map(chatroom => {
        if (chatroom.id === action.chatroom_id) {
          let msgIndex = chatroom.messages.findIndex(msg => msg.id === action.message_id);
          let MsgArr = chatroom.messages;
          MsgArr.splice(msgIndex, 1);
          return { ...chatroom, messages: [...MsgArr] };
        } else {
          return { ...chatroom };
        }
      });
      return { ...state, chatrooms: temp2 };
    case "UPDATE_DELETE_MESSAGE":
      const temp3 = state.chatrooms.map(chatroom => {
        if (chatroom.id === action.chatroom_id) {
          let msgIndex = chatroom.messages.findIndex(msg => msg.id === action.message_id);
          let newMsgArr = chatroom.messages;
          newMsgArr.splice(msgIndex, 1, action.message);

          return { ...chatroom, messages: [...newMsgArr] };
        } else {
          return { ...chatroom };
        }
      });
      return { ...state, chatrooms: temp3 };
    case "DELETE_CHATROOM":
      let tempChatrooms = state.chatrooms;
      let chatIndex = tempChatrooms.findIndex(chat => chat.id === action.chatroom_id);
      tempChatrooms.splice(chatIndex, 1);
      return { ...state, chatrooms: tempChatrooms };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const ChatViewContext = React.createContext(initialMasterState);

const ChatViewProvider = props => {
  const [masterState, dispatch] = useReducer(masterReducer, initialMasterState);

  return <ChatViewContext.Provider value={{ masterState, dispatch }}>{props.children}</ChatViewContext.Provider>;
};

/********************************* FRIENDS CONTEXT ***********************************/

const initialFriendState = {
  selectedFriend: null,
  friends: []
};

let friendReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_FRIEND":
      return { ...state, selectedFriend: action.data };
    case "LOAD_FRIENDS":
      return { ...state, friends: action.data };
    case "ADD_FRIEND":
      return { ...state, friends: action.data };
    case "DELETED_FRIEND":
      return { ...state, selectedFriend: null };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const FriendContext = React.createContext(initialFriendState);

const FriendProvider = props => {
  const [friendState, dispatchFriend] = useReducer(friendReducer, initialFriendState);

  return <FriendContext.Provider value={{ friendState, dispatchFriend }}>{props.children}</FriendContext.Provider>;
};

/********************************* NEW MSG CONTEXT ***********************************/

const initialMsgState = {
  newMessage: "",
  charCount: 0,
  showEmoji: false,
  msgBtnStatus: true,
  countDisplay: "0 characters"
};

let msgReducer = (state, action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return { ...state, newMessage: action.data };
    case "MSG_AND_EMOJI":
      return { ...state, newMessage: action.data };
    case "SHOW_EMOJI":
      return { ...state, showEmoji: !state.showEmoji };
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
        charCount: action.data
      };
    case "DISPLAY_COUNT":
      return {
        ...state,
        countDisplay: `${state.charCount.toString()} characters`
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const MsgContext = React.createContext(initialMsgState);

const MsgProvider = props => {
  const [msgState, dispatch] = useReducer(msgReducer, initialMsgState);

  return <MsgContext.Provider value={{ msgState, dispatch }}>{props.children}</MsgContext.Provider>;
};

/********************************* NEW PROFILE CONTEXT ***********************************/

const initialProfileState = {
  username: "",
  avatar: "",
  status: ""
};

let profileReducer = (state, action) => {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, username: action.data.username, avatar: action.data.avatar, status: action.data.status };
    case "UPDATED_USERNAME":
      return { ...state, username: action.data.username };
    case "UPDATED_AVATAR":
      return { ...state, avatar: action.data.avatar };
    case "UPDATED_STATUS":
      return { ...state, status: action.data.status };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const ProfileContext = React.createContext(initialProfileState);

const ProfileProvider = props => {
  const [profileState, dispatchProfile] = useReducer(profileReducer, initialProfileState);

  return <ProfileContext.Provider value={{ profileState, dispatchProfile }}>{props.children}</ProfileContext.Provider>;
};

/********************************* NOTIFICATION CONTEXT ***********************************/

const initialNtfState = {
  activeChat: null
};

let ntfReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE_CHAT":
      return { ...state, activeChat: action.id };
    case "SET_NOTIFICATION":
      console.log("action.id", action.id);
      if (state.activeChat !== action.id) {
        if (state[action.id]) {
          return { ...state, [action.id]: state[action.id] + 1 };
        } else {
          return { ...state, [action.id]: 1 };
        }
      }
    case "CLEAR_NOTIF":
      return { ...state, [action.id]: null };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const NtfContext = React.createContext(initialNtfState);

const NtfProvider = props => {
  const [ntfState, dispatchNtf] = useReducer(ntfReducer, initialNtfState);

  return <NtfContext.Provider value={{ ntfState, dispatchNtf }}>{props.children}</NtfContext.Provider>;
};

export {
  ChatViewContext,
  ChatViewProvider,
  FriendContext,
  FriendProvider,
  MsgContext,
  MsgProvider,
  NtfContext,
  NtfProvider,
  ProfileContext,
  ProfileProvider
};
