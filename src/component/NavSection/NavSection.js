import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                      to="/home"
                      className={styles.link}
                      activeClassName={styles.isActive}
                    >
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li className={styles.item}>
                    <NavLink
                      to="/stats"
                      className={styles.link}
                      activeClassName={styles.isActive}
                    >
                      <p>Statistic</p>
                    </NavLink>
                  </li>
                  {document.documentElement.clientWidth < 768 && (
                    <li className={styles.item}>
                      <NavLink
                        to="/currencies"
                        className={styles.link}
                        activeClassName={styles.isActive}
                      >
                        <p>Currensies</p>
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
              <div className={styles.balanceContainer}>
                <p className={styles.balanceTitle}>Balance</p>
                <p className={styles.balanceSum}>100000.00 UAN</p>
              </div>
            </div>
          </section>
        );
    }
}