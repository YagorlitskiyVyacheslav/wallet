import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./Navigation.css";

const Navigation = () => (
  <nav className="navigation-list">
    <ul>
      <li>
        <NavLink
          exact
          to='/home'
          className="navigation-link"
          activeClassName="navigation-active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stats"
          className="navigation-link"
          activeClassName="navigation-active">
          Stats
        </NavLink>
      </li>
    </ul>

    {/* {routes
      .filter(
        (route) => route.label === "Home" || route.label === "Movies"
      )
      .map((route) => (
        <NavLink
          key={route.label}
          to={route.path}
          exact={route.exact}
          className="navigation-link"
          activeClassName="navigation-active">
          {route.label}
        </NavLink>
      ))} */}
  </nav>
);

export default Navigation;
