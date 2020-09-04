import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <div className="item-details">
      <div className="img-frame"></div>
      <div className="cart-text-cont">
        <div className="item-details-name">{name}</div>
        <span className="item-details-price">
          {quantity} x {price}€
        </span>
      </div>
    </div>
  </div>
);

export default CartItem;
