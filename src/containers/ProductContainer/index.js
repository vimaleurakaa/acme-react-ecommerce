import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  category,
  discount,
  img,
  title,
  price,
  sale,
  externalStyle,
  id,
  addToCart,
}) => {
  return (
    <>
      <div className={`product_item_wrapper ${category} ${externalStyle}`}>
        <Link to={`/product/${id}`}>
          <div
            className="product_image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            {sale === true ? <div className="product_badge">New</div> : ""}
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
          <button className="shop_btn btn" onClick={() => addToCart(id)}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
