import React from "react";
import styles from "./index.module.scss";

const ShopLocalTestimony = () => {
  return (
    <section className={styles.shop_local}>
      <div className="container">
        <div className={styles.shop_local_wrapper}>
          <div className={styles.shop_local_left}></div>
          <div className={styles.shop_local_right}>
            <div className={styles.shop_local_content}>
              <h1>Shop Local.</h1>
              <p>
                We know that during COVID-19, a lot of folks around the city and
                state are feeling uneasy about the future - we’re not sure what
                the future holds either.
                <br />
                <br />
                That said: we know that we love making sure you have the gear
                you need for your adventures, and we’re going to keep doing that
                - with our team - until the city tells us we can’t.
                <br />
                <br />
                But as long as folks like yourself support small businesses
                around the city, then we’ll be here — every day, making sure
                your orders arrive on time.
                <br />
                <br />
                -------
              </p>
              <h6>Jane & John Doe</h6>
              <h5>Acme Outdoors</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopLocalTestimony;
