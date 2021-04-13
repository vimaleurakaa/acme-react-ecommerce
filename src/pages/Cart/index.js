import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductList from "../../components/CartComponents/CartProductList";
import { deleteFromCart } from "../../data/store/action";
import "./index.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state);

  const deleteHandler = (product) => {
    dispatch(deleteFromCart(product));
  };

  return (
    <>
      <section className="title_section_cart">
        <div className="container">
          <h1>Your Cart</h1>
        </div>
      </section>

      <div className="container checkout_offer">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="checkout_card">
              <div className="checkout_title">Order Summary</div>
              {cartItems?.map((item) => (
                <CartProductList
                  key={item.id}
                  title={item.name}
                  id={item.id}
                  image={item.media.source}
                  price={item.price.raw}
                  quantity={item.quantity}
                  delete={() => deleteHandler(item.id)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="place_order_card">
              <div className="order_title">Price Breakdown</div>
              <div className="order_amt">
                <div className="amount_title">Amount</div>
                <div className="amount_price">{totalPrice.toFixed(2)}</div>
              </div>

              <div className="order_vat_amt">
                <div className="vat_title">VAT</div>
                <div className="vat_price">2%</div>
              </div>

              <div className="order_vat_amt">
                <div className="vat_title">Total VAT price</div>
                <div className="vat_price">
                  {((2 / 100) * totalPrice).toFixed(2)}
                </div>
              </div>

              <hr />
              <div className="total_amt_container">
                <div className="total_amt_title">Total Amount</div>
                <div className="total_amt_price">
                  {((2 / 100) * totalPrice + totalPrice).toFixed(2)}
                </div>
              </div>
              <div className="place_order">Place Order</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
