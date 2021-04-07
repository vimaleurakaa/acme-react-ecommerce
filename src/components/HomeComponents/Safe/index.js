import React from "react";
import styles from "./index.module.scss";

const Safe = () => {
  return (
    <section className={styles.safe_section}>
      <div className="container">
        <div className={styles.safe_wrapper}>
          <h2>
            How we're keeping
            <br /> you safe during COVID-19
          </h2>
          <p>
            As an outdoor shop, we’ve taken precautionary measures to <br />
            ensure the safety of all our customers and team members.
          </p>
          <div className={styles.safe_btn_wrapper}>
            <a className={`btn ${styles.safe_btn}`} href="#safeBtn">
              Read Our Statement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safe;
