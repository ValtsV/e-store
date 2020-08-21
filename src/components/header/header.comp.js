import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="bg-pink padding-sides">
    <div className="header bg-pink">
      <Link to="/">logo</Link>
      <ul>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/signin">sign in | register</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
