import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import logo from "./Image/logo.svg";
import logoTablet from "./Image/wallet icon.png";

export default class Header extends Component {
    render() {
        return (
          <header className={styles.header}>
            <div className={styles.container}>
              <Link to="/home" className={styles.logoContainer}>
                <div className={styles.imgContainer}>
                  <img src={logo} alt="logo" srcSet={`${logoTablet} 768w`} />
                </div>
                <p className={styles.logoName}>Wallet</p>
              </Link>
              <div className={styles.logoutContainer}>
                <p className={styles.name}>Name</p>
                <button type="button" className={styles.button}>
                  <p>Logout</p>
                </button>
              </div>
            </div>
          </header>
        );
    }
}