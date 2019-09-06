import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./AddFriend.scss";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  }
}));

const AddFriend = () => {
  const classes = useStyles();
  return (
    <div className="addContainer">
      <TextField
        id="standard-search"
        label="Enter Email"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-search"
        label="Enter Name"
        type="search"
        className={classes.textField}
        margin="normal"
      />

      <Button>Button</Button>
    </div>
  );
};

export default AddFriend;
