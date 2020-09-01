import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.comp";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";
import {
  selectCollections,
  selectCollectionsForPreviewWomens,
} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.comp";

const Directory = ({ sections, shop_data }) => {
  console.log(Object.values(shop_data.womens).map((obj) => obj.items[0]));
  const items = Object.values(shop_data.womens).map((obj) => obj.items[0]);
  const itemsMen = Object.values(shop_data.mens).map((obj) => obj.items[0]);

  return (
    <div className="p-1 bg">
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
      <CollectionPreview title="title" items={items} />
      <CollectionPreview title="mens" items={itemsMen} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  shop_data: selectCollections,
});

export default connect(mapStateToProps)(Directory);
