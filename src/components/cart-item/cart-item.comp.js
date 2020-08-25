import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <div className="item-details">
      <span className="item-details-name">{name}</span>
      <span className="item-details-price">
        {quantity} x {price}€
      </span>
    </div>
  </div>
);

export default CartItem;
