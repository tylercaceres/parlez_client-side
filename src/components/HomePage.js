import React, { useContext, useEffect, Fragment } from "react";
import ContactList from "./ContactList/ContactList";
import FriendList from "./ContactList/FriendList";
import FriendProfile from "./ContactList/FriendProfile";
import SearchBar from "./ContactList/SearchBar";
import ChatHeader from "./ContactList/ChatHeader";
import MsgChatBox from "./chatArea/MsgChatBox";
import MsgChatItemList from "./chatArea/MsgChatItemList";
import "./HomePage.scss";
import { ChatViewContext, FriendContext } from "../Context";
import { loadInitialData } from "../server_api";
import UserAvatar from "./userHeader/UserAvatar";
import UserButton from "./userHeader/UserAddButton";
import Divider from "@material-ui/core/Divider";
import img1 from "../assets/img/dog1.png";
import img2 from "../assets/img/dog2.png";
import img3 from "../assets/img/dog3.png";
import img4 from "../assets/img/dog4.png";
import img5 from "../assets/img/dog5.png";

const HomePage = () => {
  const { masterState, dispatch } = useContext(ChatViewContext);
  const { friendState } = useContext(FriendContext);

  useEffect(() => {
    loadInitialData(data => {
      dispatch({
        type: "LOAD_INITIAL_DATA",
        data
      });
    });
  });

  return (
    <body className="layout">
      <div className="contactsArea">
        <div className="userHeader">
          <UserAvatar />
          <UserButton />
        </div>

        <Fragment>
          <ChatHeader />
        </Fragment>
        <Divider />
        <Fragment>
          <SearchBar />
        </Fragment>
        <Fragment>
          {masterState.friendsView ? <FriendList /> : <ContactList />}
        </Fragment>
      </div>

      <div>
        <div className="chatBox">
          {masterState.activeChat &&
          masterState.chatrooms.length > 0 &&
          !masterState.friendsView ? (
            <>
              <div className="chatArea">
                <MsgChatItemList />
              </div>
              <div className="chatInput">
                <MsgChatBox />
              </div>
            </>
          ) : masterState.friendsView && friendState.selectedFriend ? (
            <FriendProfile />
          ) : (
            <div className="emptyChat">
              <fragment>
                <img src={img1} alt="dog" />
              </fragment>
              <fragment>
                <img src={img2} alt="dog" />
              </fragment>
              <fragment>
                <img src={img3} alt="dog" />
              </fragment>
              <fragment>
                <img src={img4} alt="dog" />
              </fragment>
              <fragment>
                <img src={img5} alt="dog" />
              </fragment>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default HomePage;
