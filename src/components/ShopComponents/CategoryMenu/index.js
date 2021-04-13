import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

const CategoryMenu = ({ click, active }) => {
  const products = useSelector((state) => state);

  return (
    <div className="col-12 col-md-4 col-lg-3 ">
      <div className={styles.category_menu}>
        <h5>Shop by category</h5>
        <div className={styles.category_list}>
          {products.categories?.map((category) => (
            <div className={styles.category_list_item} key={category.id}>
              <button
                className={`btn ${styles.category_btn} ${
                  active === category.name && "category-active"
                } `}
                onClick={(e) => click(e, category.name)}
                id={category.name}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
