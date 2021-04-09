import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

const CategoryMenu = ({ click, active }) => {
  const products = useSelector((state) => state);
  const categories = [...new Set(products.items?.map((item) => item.category))];
  categories.unshift("All");

  return (
    <div className="col-12 col-md-4 col-lg-3 ">
      <div className={styles.category_menu}>
        <h5>Shop by category</h5>
        <div className={styles.category_list}>
          {categories?.map((category, i) => (
            <div className={styles.category_list_item} key={category + i}>
              <button
                className={`btn ${styles.category_btn} ${
                  active === category && "category-active"
                } `}
                onClick={(e) => click(e, category)}
                id={category}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
