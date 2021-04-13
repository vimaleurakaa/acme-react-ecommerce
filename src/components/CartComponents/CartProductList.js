import React from "react";

const CartProductList = (props) => {
  return (
    <>
      <div className="checkout_product_card">
        <div className="checkout_product">
          <img src={props.image} alt="product" />
        </div>

        <div className="checkout_prod_details">
          <div className="checkout_prod_title">{props.title}</div>
          <div className="checkout_prod_brand">
            International Delivery : Not Available
          </div>
          <div className="checkout_prod_qty">Quantity : {props.quantity}</div>
          <div className="details_container">
            <div className="checkout_prod_price">Price : {props.price}</div>
            <button className="delete" onClick={props.delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductList;
