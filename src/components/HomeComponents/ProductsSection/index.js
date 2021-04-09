import React from "react";
import Product from "../../../containers/ProductContainer";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const product = useSelector((state) => state);
  const dataLength = product.items?.length - 3;

  let initialValue = 0;
  let endValue = 0;

  const getRandomProduct = () => {
    if (dataLength > 0) {
      const randomIndex = Math.floor(Math.random() * dataLength);
      initialValue = randomIndex;
      endValue = randomIndex + 3;
    }
  };

  if (dataLength !== 0) {
    getRandomProduct();
  }

  return (
    <section className={styles.product_section}>
      <div className="container">
        <div className={styles.product_top_wrapper}>
          <p>Shop Products</p>
          <h1>Open 24/7/365.</h1>
        </div>

        <div className="product_list_wrapper">
          <div className="product_list_item">
            {product.items?.slice(initialValue, endValue).map((item, index) => (
              <Product
                index={index}
                category={item.category}
                discount={item.discount}
                key={item.productId}
                sale={item.sale}
                title={item.title}
                img={item.img}
                price={item.price}
                id={item.productId}
                externalStyle=""
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="explore_btn_wrapper">
          <Link to="/shop">
            <button className="shop_btn btn">Load more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
