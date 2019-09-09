import React, { useState, useContext } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import LoginPage from "../src/components/login/LoginPage";
import HomePage from "../src/components/HomePage";
import SignUpPage from "../src/components/signUp/SignUpPage";
import history from "./history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/chat" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
