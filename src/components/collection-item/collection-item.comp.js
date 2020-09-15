import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import "../../scss/_config.styles.scss";
import CustomButton from "../custom-button/custom-button.comp";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  console.log(imageUrl);
  return (
    <div className="coll-item">
      <div className="coll-item-content">
        {/* <img src={require(imageUrl)} alt="image" className="coll-item-image" /> */}
        {/* <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="coll-item-image"
        ></div> */}
        <div className="divDummy"></div>
        <div className="coll-lower">
          <span className="coll-item-name">{name}</span>
          <span className="coll-item-price">{price}€</span>
          <CustomButton className="btn btn-item" onClick={() => addItem(item)}>
            add to cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
