import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.comp";
import CartItem from "../cart-item/cart-item.comp";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>got to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  carItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartDropdown);
