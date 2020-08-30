import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.comp";
import { connect } from "react-redux";
import {
  selectCollectionsForPreview,
  selectCollections,
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({ collections, match }) => {
  console.log("----");
  console.log(match);

  const collection =
    match.path === "/womens"
      ? Object.values(collections[0])
      : Object.values(collections[1]);

  // const womens = Object.values(collections[0]);
  // const mens = Object.values(collections[1]);

  return (
    <div className="collections-overview">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  // collectionsMen: selectCollectionsForMen,
  // collectionsWomen: selectCollectionsForWomen,
});

export default connect(mapStateToProps)(CollectionsOverview);
