import React from "react";
import styles from "./index.module.scss";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.footer_wrapper} row`}>
          <div className={`${styles.footer_left} col-md-6`}>
            <a href="#home">
              <img src="./assets/logo.svg" alt="logo" />
            </a>
          </div>
          <div className={`${styles.footer_right} col-md-6`}>
            <div className={styles.footer_social_icons}>
              <FaFacebook className={styles.icon} />
              <FaTwitterSquare className={styles.icon} />
              <FaInstagram className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p>
            © {new Date().getFullYear()} Vimal Thanikachalam,
            <a
              href="https://github.com/vimaleurakaa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
