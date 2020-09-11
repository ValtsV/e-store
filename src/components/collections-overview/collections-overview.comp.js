import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.comp";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreviewSwiper from "../collection-preview-swiper/collection-preview-swiper.comp";
import useWindowDimensions from "../directory/directory.hooks";

const CollectionsOverview = ({ collections, match }) => {
  const width = useWindowDimensions();

  const collection =
    match.path === "/womens"
      ? Object.values(collections[0])
      : Object.values(collections[1]);

  const slides = collection.map(({ id, ...otherCollectionProps }) => (
    <div className="coll-item-wrapper">
      <div className="coll-item-wrapper-wrapper">
        <CollectionPreviewSwiper key={id} {...otherCollectionProps} />
      </div>
    </div>
  ));

  return (
    <div className="collections-overview">
      {width > 767
        ? collection.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        : collection.map(({ id, ...otherCollectionProps }) => (
            <div className="coll-item-wrapper">
              <div className="coll-item-wrapper-wrapper">
                <CollectionPreviewSwiper key={id} {...otherCollectionProps} />
              </div>
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
