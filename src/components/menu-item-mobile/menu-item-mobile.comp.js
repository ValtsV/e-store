import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item-mobile.styles.scss";
import "../../scss/_utilities.styles.scss";

const MenuItemMobile = ({ title, image, history, linkUrl, match }) => {
  return (
    <div className="menu-item-mobile">
      <div className="menu-item-mobile-content">
        <img className="menu-item-img-mobile" src={image} alt="title" />
        <button
          onClick={() => history.push(`${match.url}${linkUrl}`)}
          className="btn btn-bg-mobile"
        >
          shop now
        </button>
      </div>
    </div>
  );
};

export default withRouter(MenuItemMobile);
