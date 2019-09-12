import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const ChatProfile = () => {
  const classes = useStyles();

  return (
    <div className="sideDrawerBox" role="presentation">
      <div>
        <Grid container justify="center" alignItems="center" className="testGrid">
          <img alt="anchen" src="pic here" className="bigAvatarBox" />
        </Grid>
      </div>
      <div className="profileInfoBox">
        <h5 className="profileName">profilestate username</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Edit Name"
            //value={changeName}
            //onChange={onChangeName}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            <EditIcon />
          </button>
        </div>
        <h5 className="profileName">Change Avatar</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="URL"
            // value={changeAvatar}
            //onChange={onChangeAvatar}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            <EditIcon />
          </button>
        </div>

        <h5 className="profileName">Update Status</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Status"
            // value={changeStatus}
            // onChange={onChangeStatus}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab" onClick={() => console.log("hello button")}>
            <EditIcon className="editBtnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
