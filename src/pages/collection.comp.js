import React from "react";

import CollectionItem from "../components/collection-item/collection-item.comp";
import { connect } from "react-redux";
import {
  selectCollectionMens,
  selectCollectionWomens,
} from "../redux/shop/shop.selectors";

const CollectionPage = ({ collectionWomens, collectionMens, match }) => {
  console.log("match--");
  console.log(match.path);

  const array = match.path.split("/");

  const collection = array[1] === "womens" ? collectionWomens : collectionMens;

  const { title, items } = collection;
  return (
    <div className="category-page">
      <h1>{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
  collectionWomens: selectCollectionWomens(ownProps.match.params.collectionId)(
    state
  ),
  collectionMens: selectCollectionMens(ownProps.match.params.collectionId)(
    state
  ),

  // collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionPage);
