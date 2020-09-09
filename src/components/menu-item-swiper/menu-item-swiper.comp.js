import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import MenuItemMobile from "../menu-item-mobile/menu-item-mobile.comp";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./menu-item-swiper.styles.scss";
SwiperCore.use([Pagination, Navigation]);

const MenuItemSwiper = ({ sections }) => {
  const slides = sections.map(({ id, ...sectionProps }) => (
    <SwiperSlide key={id}>
      <div className="menu-item-wrapper">
        <MenuItemMobile key={id} {...sectionProps} />
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper navigation pagination>
      {slides}
    </Swiper>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  shop_data: selectCollections,
});

export default connect(mapStateToProps)(MenuItemSwiper);
