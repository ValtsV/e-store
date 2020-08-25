import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";
import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown.comp.js/cart-dropdown.comp";

const Header = ({ currentUser, hidden }) => (
  <div className="bg-pink padding-sides">
    <div className="header bg-pink">
      <Link to="/">logo</Link>
      <ul>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        {currentUser ? (
          <li>
            <div className="pointer" onClick={() => auth.signOut()}>
              sign out
            </div>
          </li>
        ) : (
          <li>
            <Link to="/signin">sign in | register</Link>
          </li>
        )}
        <li>
          <CartIcon />
        </li>
      </ul>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
