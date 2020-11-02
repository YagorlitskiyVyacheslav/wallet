import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../component/Header/header";
import Layout from "../component/Layout/layout";
import Container from "../component/Container/Container";
import CurrencyExchange from "../component/CurrencyExchange/CurrencyExchange";
import NavSection from "../component/NavSection/NavSection";
import Home from "../component/Home/Home";
import Stats from "../component/Statistic/Statistic";

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <NavSection />
        <Container>
          <Switch>
            <Route path={`${this.props.match.url}/home`} component={Home} />
            <Route path={`${this.props.match.url}/stats`} exact component={Stats} />
            <Route path={`${this.props.match.url}/currencies`} component={CurrencyExchange} />
          </Switch>
        </Container>
      </Layout>
    );
  }
}

export default Dashboard;
