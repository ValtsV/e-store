import React from "react";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="chck-item-img">
        <div className="image-cont">img</div>
      </div>
      <div className="product-flex">
        <div className="chck-item-block chck-item-name">
          <span className="checkout-item-name">{name}</span>
        </div>
        <div className="chck-item-info-flex">
          <div className="chck-item-block">
            <span className="checkout-item-quantity">
              <span onClick={() => removeItem(cartItem)}>&minus; </span>{" "}
              {quantity}
              <span onClick={() => addItem(cartItem)}> &#43;</span>
            </span>
          </div>
          <div className="chck-item-block">
            <span className="checkout-item-price">{price}€</span>
          </div>
          <div className="chck-item-block">
            <div
              className="checkout-remove-button"
              onClick={() => clearItem(cartItem)}
            >
              &#9587;
            </div>
          </div>
        </div>
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
