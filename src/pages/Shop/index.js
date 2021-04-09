import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "../../components/ShopComponents/CategoryMenu";
import FeaturedProduct from "../../components/ShopComponents/FeaturedPorduct";
import ProductCard from "../../containers/ProductContainer";
import styles from "./index.module.scss";
import { filterProducts } from "../../data/store/action";

const Shop = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state);

  const [active, setActive] = useState(null);

  const catClickHandler = (e, category) => {
    dispatch(filterProducts(product.items, e.target.id));
    setActive(category);
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
                    category={item.category}
                    discount={item.discount}
                    key={item.productId}
                    sale={item.sale}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    id={item.productId}
                    externalStyle="product_list_style"
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
