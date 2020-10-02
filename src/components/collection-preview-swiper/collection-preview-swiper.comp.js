import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CollectionItem from "../collection-item/collection-item.comp";

import "swiper/swiper.scss";
import "./collection-preview-swiper.styles.scss";
import CustomButton from "../custom-button/custom-button.comp";
import useWindowDimensions from "../directory/directory.hooks";
import { Link } from "react-router-dom";

const CollectionPreviewSwiper = ({ title, items, path, length }) => {
  const width = useWindowDimensions();
  let spwRatio = 1.2;

  const seeMore = length < items.length ? true : false;

  if (width > 414) {
    spwRatio = (345 / width) * 100;
  } else {
    spwRatio = 80;
  }

  const slides = items
    .filter((item, index) => index < length)
    .map((item) => (
      <SwiperSlide key={item.id} style={{ width: spwRatio + "%" }}>
        <div className="coll-item-wrapper">
          <div className="coll-item-wrapper-wrapper">
            <CollectionItem key={item.id} item={item} />
          </div>
        </div>
      </SwiperSlide>
    ));

  return (
    <div className="rando">
      <span className="coll-title">
        <Link
          to={
            path === "/womens" || path === "/mens"
              ? `${path}/${title.toLowerCase()}`
              : `/${title.toLowerCase()}`
          }
        >
          {title.toLowerCase()}
        </Link>
      </span>
      <Swiper
        className="swiper"
        slidesPerView={width > 414 ? "auto" : 1.2}
        spaceBetween={15}
      >
        {slides}
        {seeMore ? (
          <SwiperSlide style={{ width: spwRatio + "%" }}>
            <div className="coll-item-wrapper">
              <div className="coll-item-wrapper-wrapper">
                <div className="coll-item bg-alt">
                  <div className="coll-item-contentino">
                    <span>Want to see more?</span>
                    <Link
                      to={`${path}/${title.toLowerCase()}`}
                      className="btn-last-slide-wrapper"
                    >
                      <CustomButton className="btn btn-last-slide">
                        lets go
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ) : null}
      </Swiper>
    </div>
  );
};

export default CollectionPreviewSwiper;
