import React, { Component } from "react";

import CollectionPreview from "../components/collection-preview/collection-preview.comp";
import "./shop.styles.scss";

import ShopData from "../resources/dummydata";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page bg-pink">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
