import React from "react";
// import LoginPage from "../src/components/login/LoginPage";
import HomePage from "../src/components/HomePage";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatViewProvider } from "./Context";

function App() {
  return (
    <ChatViewProvider>
      <HomePage />
    </ChatViewProvider>
    // <div>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path={"/login"} render={<LoginPage />}></Route>
    //       <Route exact path={"/"} render={<HomePage />}></Route>
    //     </Switch>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
