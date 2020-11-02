import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" />
          <Route path="/registration" />
          <Redirect to="/dashboard/home"/>
        </Switch>
      </>
    );
  }
}

export default App;
