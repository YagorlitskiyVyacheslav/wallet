import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../component/Header/header";
import Layout from "../component/Layout/layout";
import Container from "../component/Container/Container";
import NavSection from "../component/NavSection/NavSection";
import Spiner from "../component/Loader";

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <NavSection />
        <Container>
          <Suspense fallback={<Spiner />}>
            <Switch>
              <Route
                path={`${this.props.match.url}/home`}
                component={lazy(() => import("../component/Home/Home"))}
              />
              <Route
                path={`${this.props.match.url}/stats`}
                exact
                component={lazy(() =>
                  import("../component/Statistic/Statistic")
                )}
              />
              <Route
                path={`${this.props.match.url}/currencies`}
                component={lazy(() =>
                  import("../component/CurrencyExchange/CurrencyExchange")
                )}
              />
            </Switch>
          </Suspense>
        </Container>
      </Layout>
    );
  }
}

export default Dashboard;
