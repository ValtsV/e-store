import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../components/checkout-item/checkout-item.comp";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-title">
        <span>your cart</span>
      </div>
      <div className="header-block header-block-product">
        <span>product</span>
      </div>

      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="checkout-footer">
      <div className="checkout-footer-box">
        <span>&#8592; continue shopping</span>
      </div>
      <div className="checkout-footer-box">
        <span className="checkout-total">Total:</span>
        <span className="checkout-total">{total}€</span>
        <button className="btn checkout-btn">checkout</button>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
