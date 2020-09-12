import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./hamb-menu.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

const HambMenu = ({ currentUser }) => (
  <div className="hamb-menu">
    <div className="hamb-menu-flex-cont">
      <ul className="hamb-menu-list">
        <li>
          <Link to="/mens">mens</Link>
        </li>
        <li>
          <Link to="/womens">womens</Link>
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
          <Link to="/checkout">checkout</Link>
        </li>
      </ul>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(HambMenu);
