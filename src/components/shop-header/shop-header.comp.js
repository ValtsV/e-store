import React from "react";

import "./shop-header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import ShopSubMenu from "../shop-sub-menu/shop-sub-menu.comp";

const ShopHeader = ({ match, collections }) => {
  const underline = match.path === "/womens" ? true : false;
  const womensCollection = Object.values(collections[0]);
  const mensCollection = Object.values(collections[1]);

  return (
    <div className="shop-header">
      <ul>
        <li
          className={`${
            underline === true ? "shop-header-underline" : null
          } shop-header-womens`}
        >
          <Link to="/womens">womens</Link>
        </li>
        <li
          className={`${
            underline === false ? "shop-header-underline" : null
          } shop-header-mens`}
        >
          <Link to="/mens">mens</Link>
        </li>
      </ul>

      {underline ? (
        <div className="haha">
          <ShopSubMenu collection={womensCollection} path={"/womens"} />
        </div>
      ) : (
        <div className="haha">
          <ShopSubMenu collection={mensCollection} path={"/mens"} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ShopHeader);
