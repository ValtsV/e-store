import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../components/checkout-item/checkout-item.comp";

import "./checkout.styles.scss";
import "../scss/_utilities.styles.scss";
import CustomButton from "../components/custom-button/custom-button.comp";
import { Link } from "react-router-dom";

const CheckoutPage = ({ cartItems, total }) => {
  const cartEmpty = <div className="cart-empty">Your cart is empty</div>;

  return (
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
      <div className="chkout-items-cont">
        {cartItems.length === 0 ? cartEmpty : null}
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="checkout-footer">
        <div className="checkout-footer-box">
          <span>
            <Link to="/womens">&#8592; continue shopping</Link>
          </span>
        </div>
        <div className="checkout-footer-box">
          <span className="checkout-total">Total:</span>
          <span className="checkout-total">{total}€</span>
          <CustomButton className="btn checkout-btn">checkout</CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
