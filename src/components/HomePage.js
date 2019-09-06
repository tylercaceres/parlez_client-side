import React from "react";
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
        creator: "tyler",
        content: "what whattt",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 1,
        creator: "bob",
        content: "hello there",
        created_at: "20 sep 2019 2pm",
        deleted: true
      },
      {
        id: 2,
        creator: "christopher",
        content: "wow, i hate you.",
        created_at: "20 sep 2019 3pm",
        deleted: false
      },
      {
        id: 3,
        creator: "anchen",
        content: "i only drink sweet drinks.",
        created_at: "20 sep 2019 4pm",
        deleted: true
      },
      {
        id: 4,
        creator: "tyler",
        content:
          "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 5,
        creator: "selin",
        content: "*sigh*",
        created_at: "20 sep 2019 6pm",
        deleted: true
      },
      {
        id: 6,
        creator: "bot",
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
        creator: "tyler",
        content: "what whattt",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 1,
        creator: "bob",
        content: "hello there",
        created_at: "20 sep 2019 2pm",
        deleted: true
      },
      {
        id: 2,
        creator: "christopher",
        content: "wow, i hate you.",
        created_at: "20 sep 2019 3pm",
        deleted: false
      },
      {
        id: 3,
        creator: "anchen",
        content: "i only drink sweet drinks.",
        created_at: "20 sep 2019 4pm",
        deleted: true
      },
      {
        id: 4,
        creator: "tyler",
        content:
          "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 5,
        creator: "selin",
        content: "*sigh*",
        created_at: "20 sep 2019 6pm",
        deleted: true
      },
      {
        id: 6,
        creator: "bot",
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
        creator: "tyler",
        content: "what whattt",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 1,
        creator: "bob",
        content: "hello there",
        created_at: "20 sep 2019 2pm",
        deleted: true
      },
      {
        id: 2,
        creator: "christopher",
        content: "wow, i hate you.",
        created_at: "20 sep 2019 3pm",
        deleted: false
      },
      {
        id: 3,
        creator: "anchen",
        content: "i only drink sweet drinks.",
        created_at: "20 sep 2019 4pm",
        deleted: true
      },
      {
        id: 4,
        creator: "tyler",
        content:
          "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
        created_at: "20 sep 2019 5pm",
        deleted: false
      },
      {
        id: 5,
        creator: "selin",
        content: "*sigh*",
        created_at: "20 sep 2019 6pm",
        deleted: true
      },
      {
        id: 6,
        creator: "bot",
        content: "have some juice my guyyyy, you look thirsty",
        created_at: "20 sep 2019 5pm",
        deleted: false
      }
    ]
  }
];

let longMessage =
  "Most recent message in this chat what if its super super super super super super super super long";

let conciseMessage = "Concise message.";

const showMessage = message => {
  const hide = "...";
  let conciseMessage = message
    .trim()
    .split(" ")
    .slice(0, 7)
    .join(" ");
  const finalMessage = (conciseMessage += hide);
  return message.length >= 50 ? finalMessage : message;
};

const messages = [
  {
    id: 0,
    creator: "tyler",
    content: "what whattt",
    created_at: "20 sep 2019 5pm",
    deleted: false
  },
  {
    id: 1,
    creator: "bob",
    content: "hello there",
    created_at: "20 sep 2019 2pm",
    deleted: true
  },
  {
    id: 2,
    creator: "christopher",
    content: "wow, i hate you.",
    created_at: "20 sep 2019 3pm",
    deleted: false
  },
  {
    id: 3,
    creator: "anchen",
    content: "i only drink sweet drinks.",
    created_at: "20 sep 2019 4pm",
    deleted: true
  },
  {
    id: 4,
    creator: "tyler",
    content:
      "have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think",
    created_at: "20 sep 2019 5pm",
    deleted: false
  },
  {
    id: 5,
    creator: "selin",
    content: "*sigh*",
    created_at: "20 sep 2019 6pm",
    deleted: true
  },
  {
    id: 6,
    creator: "bot",
    content: "have some juice my guyyyy, you look thirsty",
    created_at: "20 sep 2019 5pm",
    deleted: false
  }
];

const HomePage = () => {
  return (
    <main className="layout">
      <div className="leftSideContainer">
        <header className="header">
          <UserHeaderContainer />
        </header>
        <div className="contacts">
          <ChatHeader />
          <SearchBar chatrooms={chatrooms} />
          <ContactList
            recentMessage={showMessage(conciseMessage)}
            chats={chatrooms}
          />
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
