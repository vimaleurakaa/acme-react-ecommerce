import React from "react";
import styles from "./index.module.scss";

const HeroBanner = () => {
  return (
    <section className={styles.hero_banner}>
      <div className="container">
        <div className={styles.hero_wrapper}>
          <h1 className={styles.hero_heading}>
            Serving you
            <br />
            since 1989.
          </h1>
          <p className={styles.hero_paragraph}>
            Acme Outdoors is an outdoor and adventure shop located in
            <br /> the Boathouse District in Oklahoma City.
          </p>
          <div className={styles.hero_button_wrapper}>
            <a href="#shop" className={`btn ${styles.hero_btn}`}>
              Shop Merch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
