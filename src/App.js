import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header/header';
import Layout from './component/Layout/layout';
import NavSection from './component/NavSection/NavSection';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <NavSection />
        <Switch>
          <Route path="/home" />
          <Route path="/stats" />
          <Route path="/currencies" />
          <Route path="/login" />
          <Route path="/registration" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
