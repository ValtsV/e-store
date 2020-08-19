import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, price, img }) => {
  return (
    <div className={`menu-item ${price ? "small" : "big"}`}>
      <div className="content">
        <span className="title">{title}</span>
        {price ? <p className="price">{price}€</p> : null}
        <button className="btn btn-large">shop now</button>
      </div>
      {/* {price ? (
        <img className="small" src={img} alt="title" />
      ) : (
        <img className="big" src={img} alt="title" />
      )} */}
    </div>
  );
};

export default MenuItem;
