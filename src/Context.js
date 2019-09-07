import React, { useReducer } from "react";

const initialState = {
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
  chatrooms: [
    {
      id: 1,
      type: "group",
      name: "Anchen & Tyler",
      avatar: "/avatar/one.png",
      messages: [
        {
          id: 0,
          user_id: "tyler",
          content: "what whattt CHAT 1111111111",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 1,
          user_id: "bob",
          content: "hello there",
          created_at: "20 sep 2019 2pm",
          deleted: true
        },
        {
          id: 2,
          user_id: "christopher",
          content: "wow, i hate you.",
          created_at: "20 sep 2019 3pm",
          deleted: false
        },
        {
          id: 3,
          user_id: "anchen",
          content: "i only drink sweet drinks.",
          created_at: "20 sep 2019 4pm",
          deleted: true
        },
        {
          id: 4,
          user_id: "tyler",
          content:
            "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 5,
          user_id: "selin",
          content: "*sigh*",
          created_at: "20 sep 2019 6pm",
          deleted: true
        },
        {
          id: 6,
          user_id: "bot",
          content: "have some juice my guyyyy, you look thirsty",
          created_at: "20 sep 2019 5pm",
          deleted: false
        }
      ]
    },
    {
      id: 2,
      type: "single",
      name: "Anchen",
      avatar: "avatar/two.png",
      messages: [
        {
          id: 0,
          user_id: "tyler",
          content: "what whattt CHAT 2222222222",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 1,
          user_id: "bob",
          content: "hello there",
          created_at: "20 sep 2019 2pm",
          deleted: true
        },
        {
          id: 2,
          user_id: "christopher",
          content: "wow, i hate you.",
          created_at: "20 sep 2019 3pm",
          deleted: false
        },
        {
          id: 3,
          user_id: "anchen",
          content: "i only drink sweet drinks.",
          created_at: "20 sep 2019 4pm",
          deleted: true
        },
        {
          id: 4,
          user_id: "tyler",
          content:
            "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 5,
          user_id: "selin",
          content: "*sigh*",
          created_at: "20 sep 2019 6pm",
          deleted: true
        },
        {
          id: 6,
          user_id: "bot",
          content: "have some juice my guyyyy, you look thirsty",
          created_at: "20 sep 2019 5pm",
          deleted: false
        }
      ]
    },
    {
      id: 3,
      type: "group",
      name: "Anchen/Tyler/Selin",
      avatar: "avatar/three.png",
      messages: [
        {
          id: 0,
          user_id: "tyler",
          content: "what whattt CHAT 333333333",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 1,
          user_id: "bob",
          content: "hello there",
          created_at: "20 sep 2019 2pm",
          deleted: true
        },
        {
          id: 2,
          user_id: "christopher",
          content: "wow, i hate you.",
          created_at: "20 sep 2019 3pm",
          deleted: false
        },
        {
          id: 3,
          user_id: "anchen",
          content: "i only drink sweet drinks.",
          created_at: "20 sep 2019 4pm",
          deleted: true
        },
        {
          id: 4,
          user_id: "tyler",
          content:
            "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
          created_at: "20 sep 2019 5pm",
          deleted: false
        },
        {
          id: 5,
          user_id: "selin",
          content: "*sigh*",
          created_at: "20 sep 2019 6pm",
          deleted: true
        },
        {
          id: 6,
          user_id: "bot",
          content: "have some juice my guyyyy, you look thirsty",
          created_at: "20 sep 2019 5pm",
          deleted: false
        }
      ]
    }
  ]
};

let reducer = (state, action) => {
  switch (action.type) {
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
