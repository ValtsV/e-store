import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import "../../scss/_config.styles.scss";

const Header = ({ currentUser }) => (
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
      </ul>
    </div>
  </div>
);

export default Header;
