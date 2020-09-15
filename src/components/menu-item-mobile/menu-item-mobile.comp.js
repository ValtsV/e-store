import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item-mobile.styles.scss";
import "../../scss/_utilities.styles.scss";

const MenuItemMobile = ({ title, image, history, linkUrl, match }) => {
  return (
    <div className="menu-item-mobile">
      <div className="menu-item-mobile-content">
        <div className="menu-item-image-mobile-cont">
          <div
            className={`menu-item-image-mobile ${
              title === "mens" ? "men-image" : null
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
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
