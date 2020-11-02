import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Balance from '../Balance/balance';
import CurrencyExchange from '../CurrencyExchange/CurrencyExchange';
import styles from './NavSection.module.css';

export default class NavSection extends Component {
    
    render() {
        return (
          <section className={styles.section}>
            <div className={styles.sectionContainer}>
              <nav className={styles.container}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <NavLink
                      to="/dashboard/home"
                      className={styles.link}
                      activeClassName={styles.isActive}
                    >
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li className={styles.item}>
                    <NavLink
                      to="/dashboard/stats"
                      className={styles.link}
                      activeClassName={styles.isActive}
                    >
                      <p>Statistic</p>
                    </NavLink>
                  </li>
                  {document.documentElement.clientWidth < 768 && (
                    <li className={styles.item}>
                      <NavLink
                        to="/dashboard/currencies"
                        className={styles.link}
                        activeClassName={styles.isActive}
                      >
                        <p>Currensies</p>
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
              {document.documentElement.clientWidth < 768 && (
                <Route path="/dashboard/home" component={Balance} />
              )}
              {document.documentElement.clientWidth >= 768 && <Balance />}
              {document.documentElement.clientWidth >= 1280 && (
                <CurrencyExchange />
              )}
            </div>
          </section>
        );
    }
}