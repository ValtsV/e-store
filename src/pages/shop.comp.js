import React, { Component } from "react";

import CollectionPreview from "../components/collection-preview/collection-preview.comp";
import "./shop.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../redux/shop/shop.selectors";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => (
  <div className="shop-page bg-pink">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
