import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.comp";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <span className="coll-title">{title.toLowerCase()}</span>
    <div className="coll-item-list">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
