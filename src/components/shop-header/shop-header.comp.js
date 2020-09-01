import React from "react";

import "./shop-header.styles.scss";
import { Link } from "react-router-dom";

const ShopHeader = ({ match }) => {
  const underline = match.path === "/womens" ? true : false;
  return (
    <div className="shop-header">
      <ul>
        <li className={underline === true ? "shop-header-underline" : null}>
          <Link to="/womens">womens</Link>
        </li>
        <li className={underline === false ? "shop-header-underline" : null}>
          <Link to="/mens">mens</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopHeader;
