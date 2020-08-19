import React from "react";
import "../scss/_config.styles.scss";
import "./homepage.styles.scss";

import Directory from "../components/directory/directory.comp";

const HomePage = () => {
  return (
    <Directory />

    // <div className="homepage">
    //   <div className="directory-menu m-1">
    //     <div className="menu-item m-1">
    //       <div className="content">
    //         <p className="title">womens collection</p>
    //         <button className="btn btn-large">shop now</button>
    //       </div>
    //     </div>

    //     <div className="menu-item m-1">
    //       <div className="content">
    //         <p className="title">mens collection</p>
    //         <button href="#" className="btn btn-large">
    //           shop now
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="directory-menu m-1">
    //     <div className="menu-item m-1">
    //       <div className="content">
    //         <p className="title">Stetson Fedora</p>
    //         <p className="price">299,99€</p>
    //         <button className="subtitle">shop now</button>
    //       </div>
    //     </div>

    //     <div className="menu-item m-1">
    //       <div className="content">
    //         <p className="title">Nike Air Smth</p>
    //         <p className="price">249,99€</p>
    //         <button className="subtitle">shop now</button>
    //       </div>
    //     </div>

    //     <div className="menu-item m-1">
    //       <div className="content">
    //         <p className="title">Ray Ban Collection</p>
    //         <p className="price">99,99€</p>
    //         <button className="subtitle">shop now</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;
