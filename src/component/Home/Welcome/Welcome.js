import React from "react";
import logo from "../../Header/Image/logo.svg";
import logoTablet from "../../Header/Image/wallet icon.png";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.hello}>Hello!</h2>
      <h1 className={styles.title}>Welcome to Wallet!</h1>
      <div className={styles.logoWrapper}>
        <div className={styles.imgContainer}>
          <img
            src={logo}
            alt="logo-walet"
            srcSet={`${logoTablet} 768w`}
            className={styles.image}
          />
        </div>
        <p className={styles.logoName}>Wallet</p>
      </div>
      <p className={styles.text}>Add your first transaction using the button</p>
    </div>
  );
};

export default Welcome;
