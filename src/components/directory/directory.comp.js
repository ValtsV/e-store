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
          title: "hats",
          price: 299.99,
          image: Img3,
        },
        {
          id: "s2",
          title: "sneakers",
          price: 249.99,
          image: Img4,
        },
        {
          id: "s3",
          title: "glasses",
          price: 99.99,
          image: Img5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="m-1 bg">
        <div className="directory-menu">
          {this.state.bigSections.map(({ id, title, image }) => (
            <MenuItem key={id} title={title} img={image} />
          ))}
        </div>
        <div className="directory-menu">
          {this.state.smallSections.map(({ id, title, price, image }) => (
            <MenuItem key={id} title={title} price={price} img={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
