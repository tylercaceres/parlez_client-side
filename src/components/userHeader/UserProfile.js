import React from "react";
import pic from "../../../src/assets/img/Image-1.png";
import "./UserProfile.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const SideList = side => {
  const classes = useStyles();
  return (
    <div className="sideDrawerBox" role="presentation">
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="testGrid"
        >
          <img alt="anchen" src={pic} className="bigAvatarBox" />
        </Grid>
      </div>
      <div className="profileInfoBox">
        <h5 className="profileName">Your Name</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Your Name"
            //value={values.age}
            //onChange={handleChange("age")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab">
            <EditIcon />
          </button>
        </div>
        <h5 className="profileName">Change Avatar</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="URL"
            //value={values.age}
            //onChange={handleChange("age")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab">
            <EditIcon />
          </button>
        </div>

        <h5 className="profileName">Update Status</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Status"
            //value={values.age}
            //onChange={handleChange("age")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button color="secondary" aria-label="edit" className="fab">
            <EditIcon className="editBtnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideList;
