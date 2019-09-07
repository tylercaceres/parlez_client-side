import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../src/components/login/LoginPage";
import HomePage from "../src/components/HomePage";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatViewProvider } from "./Context";

import SignUpPage from "../src/components/signUp/SignUpPage";

export default function App() {
  const state = {
    auth: true
  };

  return (
    <>
      <ChatViewProvider>
        <HomePage />
      </ChatViewProvider>
      {/* // <div>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path={"/login"} render={<LoginPage />}></Route>
    //       <Route exact path={"/"} render={<HomePage />}></Route>
    //     </Switch>
    //   </BrowserRouter>
    // </div> */}

      <div>
        <Switch>
          {state.auth ? <Route path="/chat" component={HomePage} /> : null}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </>
  );
}
