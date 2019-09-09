import React, { useState, useContext } from "react";
import "./SignUpPage.scss";
import { makeStyles } from "@material-ui/core/styles";
import picbox from "../../assets/img/signup-image.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ChatViewContext } from "../../Context";
import history from "../../history";

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
  // const state = {
  //   name: name,
  //   email: email,
  //   password: password
  // };

  const { masterState, dispatch } = useContext(ChatViewContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3003/auth/register",
        {
          username: name,
          email: email,
          password: password,
          confirmPassword: password
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("CHECKING ON SIGN UP PAGE TO SEE RESPONSE", response.data);

        if (response.data["email"] === email) {
          history.push("/chat");
        }
        if (response.data["email"] !== email) {
          alert("Email does not exist");
        }
        /**************************** TYLERS CODE ****************************/
        // if (
        //   response.data.logged_in &&
        //   masterState.loggedInStatus === "NOT_LOGGED_IN"
        // ) {
        //   //set state with user:res.data.user_id and loggedInStatus: true
        // } else if (
        //   !response.data.logged_in &&
        //   masterState.loggedInStatus === "LOGGED_IN"
        // ) {
        // }
        //set state with loggedInStatus: false, user: null
        /**************************** TYLERS CODE ****************************/
      })
      .catch(err => console.log("error:", err));
  };

  return (
    <div className="purple-square-container">
      <div className="red-square">
        <form onSubmit={onSubmit} className="input-box-area">
          <h1>Sign up</h1>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item></Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Your Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onChangeName}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item></Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Your Email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={onChangeEmail}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item></Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Password"
                  name="password"
                  type="text"
                  value={password}
                  onChange={onChangePassword}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item></Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Repeat Password" />
              </Grid>
            </Grid>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
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
