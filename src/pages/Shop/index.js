import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "../../components/ShopComponents/CategoryMenu";
import FeaturedProduct from "../../components/ShopComponents/FeaturedPorduct";
import ProductCard from "../../containers/ProductContainer";
import styles from "./index.module.scss";
import { addToCart, filterProducts } from "../../data/store/action";
import { useLocation } from "react-router";

const Shop = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [active, setActive] = useState("All");

  const catClickHandler = (e, category) => {
    dispatch(filterProducts(product.items, e.target.id));
    setActive(category);
  };

  const handleAddToCart = (product_id) => {
    dispatch(addToCart(product_id));
  };

  return (
    <>
      <section className={styles.title_section}>
        <div className="container">
          <h1>Shop Our Products</h1>
        </div>
      </section>

      <FeaturedProduct />
      <div className="container py-5">
        <div className="row">
          <CategoryMenu
            click={(e, category) => catClickHandler(e, category)}
            active={active}
          />

          <div className="col-12 col-md-8 col-lg-9 ">
            <div className="product_list_wrapper">
              <div className="product_list_item">
                {product.filteredItems?.map((item) => (
                  <ProductCard
                    category={item.categories[0].name}
                    discount={item.price.raw + Math.floor(Math.random() * 200)}
                    key={item.id}
                    sale={Math.random() < 0.5}
                    title={item.name}
                    img={item.media.source}
                    price={item.price.raw}
                    id={item.id}
                    externalStyle="product_list_style"
                    addToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
