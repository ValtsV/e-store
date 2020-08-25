import React from "react";
import CustomButton from "../custom-button/custom-button.comp";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>got to checkout</CustomButton>
  </div>
);

export default CartDropdown;
