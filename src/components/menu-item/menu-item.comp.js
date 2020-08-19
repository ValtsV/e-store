import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, price, img }) => {
  let imgBig = null;
  let imgSmall = null;
  price
    ? (imgSmall = <img className="smImg" src={img} alt="title" />)
    : (imgBig = <img className="big" src={img} alt="title" />);

  return (
    <div className={`menu-item ${price ? "small" : "big"}`}>
      <div className="imgCont">{imgSmall}</div>

      <div className="content">
        <span className="title">{title}</span>
        {price ? <span className="price">{price}€</span> : null}
        <button className={`btn ${price ? "btn-sm" : "btn-bg"}`}>
          shop now
        </button>
      </div>
      {imgBig}
    </div>
  );
};

export default MenuItem;
