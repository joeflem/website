"use client";

import styles from "./Footer.module.css";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Joe Fleming &copy; {new Date().getFullYear()}
      </p>
      <Social />
    </footer>
  );
};

export default Footer;
