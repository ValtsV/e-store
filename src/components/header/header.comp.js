import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";
import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown.comp.js/cart-dropdown.comp";
import HambMenu from "../hamb-menu/hamb-menu.comp";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectNavHidden } from "../../redux/nav/nav.selectors";
import { toggleHambMenu } from "../../redux/nav/nav.actions";

const Header = ({ currentUser, hidden, hambMenuHidden, toggleHambMenu }) => (
  <div className="bg-pink">
    <div className="header bg-pink">
      <Link to="/">test v</Link>
      <div className="header-options-cont">
        <ul className="main-nav-list">
          <li className="bigscreen-option">
            <Link to="/womens">shop</Link>
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
        <div className="hamburger" onClick={toggleHambMenu}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        {hidden ? null : <CartDropdown />}
        {hambMenuHidden ? null : <HambMenu />}
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHambMenu: () => dispatch(toggleHambMenu()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  hambMenuHidden: selectNavHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
