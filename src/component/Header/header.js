import React, { Component } from 'react';
import logo from './Image/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
          <header className={styles.header}>
            <div className={styles.container}>
              <Link to='/home' className={styles.logoContainer}>
                <div className={styles.imgContainer}>
                  <img src={logo} alt="logo" />
                </div>
                <p className={styles.logoName}>Wallet</p>
              </Link>
              <div className={styles.logoutContainer}>
                <p className={styles.name}>Name</p>
                <button type="button" className={styles.button}>
                  Logout
                </button>
              </div>
            </div>
          </header>
        );
    }
}