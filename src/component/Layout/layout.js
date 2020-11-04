import React from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";
import NavSection from "../NavSection/NavSection";
import styles from "../../globalStyles.module.css";

const Layout = ({ children }) => (
  <div className={styles.gridContainer}>
    <Header />
    <NavSection />
    <Container>
      {children}
    </Container>
  </div>
);

export default Layout;
