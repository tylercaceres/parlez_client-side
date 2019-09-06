import React from "react";
import "./SignUpPage.scss";
import { makeStyles } from "@material-ui/core/styles";
import picbox from "../../assets/img/signup-image.jpg";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "50px"
  }
}));

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div className="purple-square-container">
      <div className="red-square">
        <div className="input-box-area">
          <h1>Sign up</h1>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Your Name" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Your Email" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Password" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Repeat Password" />
              </Grid>
            </Grid>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
        <div className="picture-container">
          <div>
            <img src={picbox} className="picture-box" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
