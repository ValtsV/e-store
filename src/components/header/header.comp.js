import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";
import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown.comp.js/cart-dropdown.comp";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="bg-pink">
    <div className="header bg-pink">
      <Link to="/">logo</Link>
      <div className="header-options-cont">
        <ul>
          <li className="bigscreen-option">
            <Link to="/shop">shop</Link>
          </li>
          {currentUser ? (
            <li className="bigscreen-option">
              <div className="pointer" onClick={() => auth.signOut()}>
                sign out
              </div>
            </li>
          ) : (
            <li className="bigscreen-option">
              <Link to="/signin">sign in | register</Link>
            </li>
          )}

          <li className="cart-icon-cont">
            <CartIcon />
          </li>
        </ul>
        <div className="hamburger">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
