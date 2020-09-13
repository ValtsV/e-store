import React from "react";
import { Link } from "react-router-dom";

const ShopSubMenu = ({ collection, path }) => {
  return (
    <div>
      <div className="hamb-menu-flex-cont">
        <ul className="hamb-menu-list">
          {collection.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${path}/${title.toLowerCase()}`}>
                {title.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopSubMenu;
