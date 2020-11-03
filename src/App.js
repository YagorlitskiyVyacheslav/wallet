import React, { Component, lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./component/RestrictedRoute/PrivateRoute";
import Spiner from "./component/Loader";

class App extends Component {
  render() {
    return (
        <Suspense fallback={<Spiner />}>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={lazy(() => import("./views/Dashboard"))}
            />
            <RestrictedRoute
              exact
              path="/login"
              redirect="/"
              component={lazy(() => import("./views/SignIn/SignIn"))}
            />
            <RestrictedRoute
              exact
              path="/registration"
              redirect="/"
              component={lazy(() => import("./views/SignUp/SignUp"))}
            />
          </Switch>
        </Suspense>
    );
  }
}

export default App;
