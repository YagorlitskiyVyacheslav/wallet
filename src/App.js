import React, { Component, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Spiner from "./component/Loader";

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Spiner />}>
          <Switch>
            <Route
              path="/dashboard"
              component={lazy(() => import("./views/Dashboard"))}
            />
            <Route
              path="/login"
              component={lazy(() => import("./views/SignIn/SignIn"))}
            />
            <Route
              path="/registration"
              component={lazy(() => import("./views/SignUp/SignUp"))}
            />
            <Redirect to="/dashboard/home" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
