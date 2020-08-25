import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import "../../scss/_config.styles.scss";
import CustomButton from "../custom-button/custom-button.comp";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="coll-item">
      <div className="coll-item-content">
        {/* <img src="#" /> */}
        <div className="divDummy"></div>
        <div className="coll-lower">
          <span className="item-name">{name}</span>
          <span className="item-price">{price}€</span>
          {/* <button className="btn-item bg-dark">add to cart</button> */}
          <CustomButton
            className="btn-item bg-dark"
            onClick={() => addItem(item)}
          >
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
