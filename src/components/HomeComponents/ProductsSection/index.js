import React, { useEffect } from "react";
import Product from "../../../containers/ProductContainer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import { getProducts } from "../../../data/store/action";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className={styles.product_section}>
      <div className="container">
        <div className={styles.product_top_wrapper}>
          <p>Shop Products</p>
          <h1>Open 24/7/365.</h1>
        </div>

        <div className="product_list_wrapper">
          <div className="product_list_item">
            {product?.slice(0, 3).map((item) => (
              <Product
                category={item.category}
                discount={item.discount}
                key={item.productId}
                sale={item.sale}
                title={item.title}
                img={item.img}
                price={item.price}
                id={item.productId}
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
