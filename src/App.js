import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/header";
import Layout from "./component/Layout/layout";
import Container from "./component/Container";
import CurrencyExchange from "./component/CurrencyExchange";
import NavSection from "./component/NavSection/NavSection";
import Home from "./component/Home";
import Stats from "./component/Stats";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <NavSection />
        <Container>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/stats" exact component={Stats} />
            <Route path="/currencies" component={CurrencyExchange} />
            <Route path="/login" />
            <Route path="/registration" />
          </Switch>
          {/* <CurrencyExchange></CurrencyExchange> */}
        </Container>
      </Layout>
    );
  }
}

export default App;
