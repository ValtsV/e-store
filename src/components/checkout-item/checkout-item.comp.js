import React from "react";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-cont"></div>
      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-quantity">
        <span onClick={() => removeItem(cartItem)}>&#10094;</span> {quantity}
        <span onClick={() => addItem(cartItem)}>&#10095;</span>
      </span>
      <span className="checkout-item-price">{price}</span>
      <div
        className="checkout-remove-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
