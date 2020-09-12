import React from "react";

import CollectionItem from "../components/collection-item/collection-item.comp";
import { connect } from "react-redux";
import {
  selectCollectionMens,
  selectCollectionWomens,
} from "../redux/shop/shop.selectors";
import CollectionPreviewSwiper from "../components/collection-preview-swiper/collection-preview-swiper.comp";
import useWindowDimensions from "../components/directory/directory.hooks";

import "./collection.styles.scss";

const CollectionPage = ({ collectionWomens, collectionMens, match }) => {
  const urlArray = match.path.split("/");

  const width = useWindowDimensions() > 767 ? true : false;

  const collection =
    urlArray[1] === "womens" ? collectionWomens : collectionMens;

  const { title, items } = collection;

  return items ? (
    <div className="category-page">
      {width ? (
        <div>
          <div className="coll-page-title">{title}</div>
          <div className="coll-item-list coll-page-items">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <CollectionPreviewSwiper
          title={title}
          items={items}
          length={items.length}
          lastSlide={false}
        />
      )}
    </div>
  ) : (
    <div className="empty-coll-page">
      <h1 className="empty-coll-title">{title}</h1>
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
});

export default connect(mapStateToProps)(CollectionPage);
