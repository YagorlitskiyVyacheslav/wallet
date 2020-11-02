import React from "react";
import styles from "../../globalStyles.module.css";

const Layout = (props) => {
  return <div className={styles.gridContainer}>{props.children}</div>;
};

export default Layout;