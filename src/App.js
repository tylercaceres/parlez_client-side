import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../src/components/login/LoginPage";
import HomePage from "../src/components/HomePage";
import SignUpPage from "../src/components/signUp/SignUpPage";

export default function App() {
  const state = {
    auth: true
  };

  return (
    <>
      <HomePage />

      <div>
        <BrowserRouter>
          <Switch>
            {state.auth ? <Route path="/chat" component={HomePage} /> : null}
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Redirect from="/" to="/login" />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
