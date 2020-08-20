import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, price, image, history, linkUrl, match }) => {
  let imgBig = null;
  let imgSmall = null;
  price
    ? (imgSmall = <img className="smImg" src={image} alt="title" />)
    : (imgBig = <img className="big" src={image} alt="title" />);

  return (
    <div
      className={`menu-item ${price ? "small" : "big"}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
