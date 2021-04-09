import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const FeaturedProduct = () => {
  return (
    <section className={styles.featured_section}>
      <div className="container">
        <Link to="/">
          <div
            className={styles.product_wrapper}
            style={{
              backgroundImage:
                'url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg")',
            }}
          >
            <div className={styles.badge}>Featured Item</div>
            <div className={styles.featured_text}>
              <h3>White Tent</h3>
              <p>$ 200.00 USD</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProduct;
