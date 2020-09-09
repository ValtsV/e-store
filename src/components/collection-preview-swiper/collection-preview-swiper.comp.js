import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CollectionItem from "../collection-item/collection-item.comp";

import "swiper/swiper.scss";
import "./collection-preview-swiper.styles.scss";
import CustomButton from "../custom-button/custom-button.comp";

const CollectionPreviewSwiper = ({ title, items }) => {
  const slides = items
    .filter((item, index) => index < 4)
    .map((item) => (
      <SwiperSlide key={item.id}>
        <div className="coll-item-wrapper">
          <div className="coll-item-wrapper-wrapper">
            <CollectionItem key={item.id} item={item} />
          </div>
        </div>
      </SwiperSlide>
    ));
  return (
    <div className="rando">
      <span className="coll-title">{title.toLowerCase()}</span>
      <Swiper slidesPerView={1.2} spaceBetween={5} centeredSlides={true}>
        {slides}
        <SwiperSlide>
          <div className="coll-item-wrapper">
            <div className="coll-item-wrapper-wrapper"></div>
            <div className="coll-item">
              <div className="coll-item-content">
                <div className="divDummy"></div>
                <div className="coll-lower">
                  <CustomButton className="btn btn-item">see all</CustomButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CollectionPreviewSwiper;
