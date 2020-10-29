import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavSection.module.css';
import icon from './svg';

export default class NavSection extends Component {
    
    render() {
        
        return (
          <section>
            <nav className={styles.container}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <NavLink to="/home" className={styles.link} activeClassName={styles.isActive}>
                    Home
                  </NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/stats" className={styles.link} activeClassName={styles.isActive}>
                    Statistic
                  </NavLink>
                </li>
                {document.documentElement.clientWidth < 1280 && (
                  <li className={styles.item}>
                    <NavLink to="/currensies" className={styles.link} activeClassName={styles.isActive}>
                      Currensies
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
            <div className={styles.balanceContainer}>
              <p className={styles.balanceTitle}>Balance</p>
              <p className={styles.balanceSum}>100000.00 UAN</p>
            </div>
          </section>
        );
    }
}