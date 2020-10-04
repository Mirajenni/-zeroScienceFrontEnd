import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Nave from "./Login/Nave/Nave";
import mundo from "./Mundo/mundo";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/nave" component={Nave} />
      <Route path="/mundo" component={mundo} />
      <Route path="/principal" component={mundo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
