import React from "react";

import "./collection-item.styles.scss";
import "../../scss/_config.styles.scss";

const CollectionItem = ({ id, name, price, image }) => (
  <div className="coll-item">
    <div className="coll-item-content">
      {/* <img src="#" /> */}
      <div className="divDummy"></div>
      <div className="coll-lower">
        <span className="item-name">{name}</span>
        <span className="item-price">{price}€</span>
        <button className="btn-item bg-dark">add to cart</button>
      </div>
    </div>
  </div>
);

export default CollectionItem;
