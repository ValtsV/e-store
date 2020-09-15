import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
import "../../scss/_utilities.styles.scss";

const MenuItem = ({ title, image, history, linkUrl, match }) => {
  return (
    <div className="menu-item big">
      <div className="content">
        <span
          className="title"
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          {title}
        </span>

        <button
          onClick={() => history.push(`${match.url}${linkUrl}`)}
          className="btn btn-bg"
        >
          shop now
        </button>
      </div>
      {/* <img className="big" src={image} alt="title" /> */}
      <div className="big">
        <div
          className={`menu-item-image ${title === "mens" ? "men-image" : null}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
