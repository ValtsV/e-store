import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.comp";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items, path }) => {
  return (
    <div className="collection-preview">
      <span className="coll-title">
        <Link
          to={
            path === "/womens" || path === "/mens"
              ? `${path}/${title.toLowerCase()}`
              : `/${title.toLowerCase()}`
          }
        >
          {title.toLowerCase()}
        </Link>
      </span>
      <div className="coll-item-list">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
