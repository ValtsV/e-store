import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.comp";
import MenuItemSwiper from "../menu-item-swiper/menu-item-swiper.comp";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.comp";
import CollectionPreviewSwiper from "../collection-preview-swiper/collection-preview-swiper.comp";
import useWindowDimensions from "./directory.hooks";

const Directory = ({ sections, shop_data }) => {
  // console.log(Object.values(shop_data.womens).map((obj) => obj.items[0]));
  const items = Object.values(shop_data.womens).map((obj) => obj.items[0]);
  const itemsMen = Object.values(shop_data.mens).map((obj) => obj.items[0]);

  const width = useWindowDimensions() > 767 ? true : false;

  return (
    <div className="bg">
      {width ? (
        <div>
          <div className="directory-menu">
            {sections.map(({ id, ...sectionProps }) => (
              <MenuItem key={id} {...sectionProps} />
            ))}
          </div>
          <CollectionPreview title="title" items={items} />
          <CollectionPreview title="mens" items={itemsMen} />
        </div>
      ) : (
        <div>
          <MenuItemSwiper />
          <CollectionPreviewSwiper title="womens" items={items} />
          <CollectionPreviewSwiper title="mens" items={itemsMen} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  shop_data: selectCollections,
});

export default connect(mapStateToProps)(Directory);
