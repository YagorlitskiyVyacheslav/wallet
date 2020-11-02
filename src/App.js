import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={SignIn}/>
          <Route path="/registration" component={SignUp}/>
          <Redirect to="/dashboard/home"/>
        </Switch>
      </>
    );
  }
}

export default App;
