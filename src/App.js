import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/header";
import Layout from "./component/Layout/layout";
import CurrencyExchange from "./component/CurrencyExchange/CurrencyExchange";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route path="/home" />
          <Route path="/stats" />
          <Route path="/currencies" component={CurrencyExchange} />
          <Route path="/login" />
          <Route path="/registration" />
        </Switch>
        {/* <CurrencyExchange></CurrencyExchange> */}
      </Layout>
    );
  }
}

export default App;
