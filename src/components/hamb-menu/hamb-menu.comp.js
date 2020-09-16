import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./hamb-menu.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { toggleHambMenu } from "../../redux/nav/nav.actions";
import { selectNavHidden } from "../../redux/nav/nav.selectors";

const HambMenu = ({ currentUser, toggleHambMenu }) => (
  <div className="hamb-menu">
    <div className="hamb-menu-flex-cont">
      <ul className="hamb-menu-list">
        <li>
          <Link to="/womens" onClick={toggleHambMenu}>
            womens
          </Link>
        </li>
        <li>
          <Link to="/mens" onClick={toggleHambMenu}>
            mens
          </Link>
        </li>
        {currentUser ? (
          <li>
            <div className="pointer" onClick={() => auth.signOut()}>
              sign out
            </div>
          </li>
        ) : (
          <li>
            <Link to="/signin" onClick={toggleHambMenu}>
              sign in | register
            </Link>
          </li>
        )}
        <li>
          <Link to="/checkout" onClick={toggleHambMenu}>
            checkout
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHambMenu: () => dispatch(toggleHambMenu()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  hambMenuHidden: selectNavHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(HambMenu);
