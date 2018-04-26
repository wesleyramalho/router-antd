import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Page from "./Page";
import AnotherPage from "./AnotherPage";
const App = () => (
  <Switch>
    <Route exact path="/" component={Page} />
    <Route path="/pagina" component={AnotherPage} />
  </Switch>
);

export default App;
