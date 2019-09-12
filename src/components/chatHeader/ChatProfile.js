import React from "react";
import Grid from "@material-ui/core/Grid";
import "./ChatProfile.scss";

const ChatProfile = () => {
  return (
    <div className="sideDrawerBox" role="presentation">
      <div>
        <Grid container justify="center" alignItems="center" className="testGrid">
          <img alt="friends avatar" src="pic here" className="bigAvatarBox" />
        </Grid>
      </div>
      <div className="profileInfoBox">
        <h5 className="profileName">friends usersname</h5>
        <h5 className="profileName">friends status</h5>
        <div className="ChatProfileDrawerBtns">
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            DO SOMETHING BUTTON
          </button>
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            DO SOMETHING BUTTON
          </button>
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            DO SOMETHING BUTTON
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
