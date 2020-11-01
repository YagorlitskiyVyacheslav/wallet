import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" />
          <Route path="/registration" />
        </Switch>
      </>
    );
  }
}

export default App;
