import React from "react";

import CollectionItem from "../components/collection-item/collection-item.comp";
import { connect } from "react-redux";
import {
  selectCollectionMens,
  selectCollectionWomens,
} from "../redux/shop/shop.selectors";

const CollectionPage = ({ collectionWomens, collectionMens, match }) => {
  const urlArray = match.path.split("/");

  const collection =
    urlArray[1] === "womens" ? collectionWomens : collectionMens;

  const { title, items } = collection;

  return items ? (
    <div className="category-page">
      <h1>{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <div className="category-page">
      <h1>{title}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionWomens: selectCollectionWomens(ownProps.match.params.collectionId)(
    state
  ),
  collectionMens: selectCollectionMens(ownProps.match.params.collectionId)(
    state
  ),

  // collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionPage);
