import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  category,
  discount,
  img,
  title,
  price,
  id,
  sale,
  externalStyle,
  index,
}) => {
  return (
    <>
      <div className={`product_item_wrapper ${category} ${externalStyle}`}>
        <Link to={`/product/${title}&${index}`}>
          <div
            className="product_image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            {sale === "true" ? <div className="product_badge">Sale</div> : ""}
          </div>
          <div className="product_details_wrapper">
            <div className="product_details">
              <h5>{title}</h5>
              <div className="product_price_wrapper">
                <p>
                  $ {price} USD
                  {discount !== "false" ? <span>$ {discount} USD</span> : ""}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="shop_btn_wrapper">
          <a className="shop_btn btn" href="#shop">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
