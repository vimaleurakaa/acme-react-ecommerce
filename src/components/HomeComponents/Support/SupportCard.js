import React from "react";
import styles from "./index.module.scss";

const SupportCard = ({ title, desc, number, img }) => {
  return (
    <div className={`col-md-6 col-lg-4 col-xl-4 ${styles.support_column}`}>
      <div className={styles.support_square}>
        <div className={styles.support_square_number}>{number}</div>
        <div className={styles.support_square_text}>
          <h1>{title}</h1>
        </div>
        <img src={img} alt="support" />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default SupportCard;
