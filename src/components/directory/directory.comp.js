import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.comp";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";

const Directory = ({ sections, shop_data }) => {
  console.log(shop_data);
  console.log(sections);
  return (
    <div className="p-1 bg">
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
      <div>
        <span>womens</span>
      </div>
      <div>
        <span>mens</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  shop_data: selectCollections,
});

export default connect(mapStateToProps)(Directory);
