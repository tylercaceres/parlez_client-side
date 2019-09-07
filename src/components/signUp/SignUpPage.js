import React, { useState } from "react";
import "./SignUpPage.scss";
import { makeStyles } from "@material-ui/core/styles";
import picbox from "../../assets/img/signup-image.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import axios from "axios";

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
    const data = {
      name: name,
      email: email,
      password: password
    };
    axios
      .post("/signup", data)
      .then(response => {
        console.log(response);
        this.props.history.push("/chat");
      })
      .catch(error => {
        console.log("this is the error", error);
      });
  };

  return (
    <div className="purple-square-container">
      <div className="red-square">
        <form onSubmit={onSubmit} className="input-box-area">
          <h1>Sign up</h1>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
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
              <Grid item>
                <AccountCircle />
              </Grid>
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
              <Grid item>
                <AccountCircle />
              </Grid>
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
              <Grid item>
                <AccountCircle />
              </Grid>
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
