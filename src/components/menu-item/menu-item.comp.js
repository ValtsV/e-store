import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

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
      <img className="big" src={image} alt="title" />
    </div>
  );
};

export default withRouter(MenuItem);
