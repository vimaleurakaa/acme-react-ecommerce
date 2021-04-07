import React from "react";
import styles from "./index.module.scss";
import SupportCard from "./SupportCard";
import { data } from "../../../data/supportCard.data";

const Support = () => {
  return (
    <section className={styles.support}>
      <div className="container">
        <div className={`row ${styles.support_top_wrapper}`}>
          <div className={`col-md-6 ${styles.support_top_left}`}>
            <p>Ways to support</p>
            <h1>Support Acme Outdoors.</h1>
          </div>
          <div className={`col-md-6 ${styles.support_top_right}`}>
            <p>
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we’ve listed the best ways to help us through this season.
            </p>
          </div>
        </div>
        <div
          className={`row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  ${styles.support_wrapper}`}
        >
          {data.map(({ title, desc, number, img }, index) => (
            <SupportCard
              key={title + index}
              title={title}
              desc={desc}
              number={number}
              img={img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
