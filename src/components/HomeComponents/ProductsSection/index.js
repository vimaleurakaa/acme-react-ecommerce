import React from "react";
import styles from "./index.module.scss";

const ProductSection = () => {
  return (
    <section className={styles.product_section}>
      <div className="container">
        <div className={styles.product_top_wrapper}>
          <p>Shop Products</p>
          <h1>Open 24/7/365.</h1>
        </div>

        <div className={styles.product_list_wrapper}>
          <div className={styles.product_list_item}>
            <div className={styles.product_item_wrapper}>
              <a href="#product">
                <div className={styles.product_image}>
                  <div className={styles.product_badge}>Sale</div>
                </div>
                <div className={styles.product_details_wrapper}>
                  <div className={styles.product_details}>
                    <h5>White Tent</h5>
                    <div className={styles.product_price_wrapper}>
                      <p>
                        $ 35.00 USD
                        <span>$ 145.00 USD</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <div className={styles.shop_btn_wrapper}>
                <a className={`${styles.shop_btn} btn`} href="#shop">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
