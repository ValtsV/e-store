import React, { Component } from "react";
import Img1 from "../../resources/img/girl1.webp";
import Img2 from "../../resources/img/man1.webp";
import Img3 from "../../resources/img/hat1.webp";
import Img4 from "../../resources/img/shoe1.webp";
import Img5 from "../../resources/img/glass1.webp";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.comp";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      bigSections: [
        {
          id: "b1",
          title: "womens collection",
          image: Img1,
        },
        {
          id: "b2",
          title: "mens collection",
          image: Img2,
        },
      ],
      smallSections: [
        {
          id: "s1",
          title: "Stetson Fedora",
          price: 299.99,
          image: Img3,
          linkUrl: "hats",
        },
        {
          id: "s2",
          title: "Nike Air Max Smth",
          price: 249.99,
          image: Img4,
          linkUrl: "",
        },
        {
          id: "s3",
          title: "Ray Ban Collection",
          price: 99.99,
          image: Img5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="p-1 bg">
        <div className="directory-menu">
          {this.state.bigSections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
          ))}
        </div>
        <div className="directory-menu">
          {this.state.smallSections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
