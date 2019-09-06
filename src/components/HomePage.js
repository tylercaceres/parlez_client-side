import React, { useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import ChatNameContainer from "./chatHeader/ChatNameContainer";
import UserHeaderContainer from "./userHeader/UserHeaderContainer";
import "./HomePage.scss";

const chatrooms = [
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
];

// helper to shorten message length:
const recentMessage = message => {
  const hide = "...";
  let conciseMessage = message
    .trim()
    .split(" ")
    .slice(0, 7)
    .join(" ");
  const finalMessage = (conciseMessage += hide);
  return message.length >= 50 ? finalMessage : message;
};

//helper to get active chatroom from chatrooms array:
const getActiveChat = (id, chatArr) => {
  for (let chat of chatArr) {
    if (chat.id === id) {
      return chat;
    }
  }
  return null;
};

/***************************** HOME PAGE ********************************/

const HomePage = () => {
  const [select, setSelect] = useState({});
  const activeChat = Number(Object.keys(select));

  const setActiveChat = chat_id => {
    setSelect({ [chat_id]: true });
  };

  const selected = chat_id => {
    return select[chat_id];
  };

  let active = getActiveChat(activeChat, chatrooms);

  return (
    <main className="layout">

      <div className="leftSideContainer">
 
      <header className="header"></header>
      <div className="contacts">
        <ChatHeader />
        <SearchBar chatrooms={chatrooms} />
        <ContactList
          recentMessage={recentMessage}
          chats={chatrooms}
          setActiveChat={setActiveChat}
          selected={selected}
        />
</div>
      </div>
      <div className="chatBox">
        <div className="chatArea">
          {active ? (
            <MsgChatItemList user="tyler" messages={active.messages} />
          ) : null}

        </div>
      </div>
      <div className="rightSideContainer">
        <div className="chatBox">
          <ChatNameContainer />
          <div className="chatArea">
            <MsgChatItemList user="tyler" messages={messages} />
          </div>
          <div className="chatInput">
            <MsgChatBox />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
