import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CollectionItem from "../collection-item/collection-item.comp";

import "swiper/swiper.scss";
import "./collection-preview-swiper.styles.scss";
import CustomButton from "../custom-button/custom-button.comp";
import { useState, useEffect } from "react";
import useWindowDimensions from "../directory/directory.hooks";

const CollectionPreviewSwiper = ({ title, items }) => {
  // const getWindowWidth = () => window.innerWidth;

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowWidth());
  //     }

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   return windowDimensions;
  // }

  const width = useWindowDimensions();
  let spwRatio = 1.2;
  let trans = null;

  if (width > 414) {
    spwRatio = (345 / width) * 100;
    trans = "none";
  } else {
    spwRatio = 80;
  }

  const slides = items
    .filter((item, index) => index < 4)
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
      <span className="coll-title">{title.toLowerCase()}</span>
      <Swiper
        className="swiper"
        slidesPerView={width > 414 ? "auto" : 1.2}
        spaceBetween={5}
        // centeredSlides={width > 414 ? false : true}
        // style={{ transform: trans }}
        // centeredSlides={false}
      >
        {slides}
        <SwiperSlide style={{ width: spwRatio + "%" }}>
          <div className="coll-item-wrapper">
            <div className="coll-item-wrapper-wrapper">
              {/* <div className="final-slide"> */}
              <div className="coll-item bg-alt">
                <div className="coll-item-contentino">
                  {/* <div className="divDummy">Yo Say Smth</div> */}
                  <span>Want to see more?</span>
                  {/* <div className="coll-lower"> */}
                  <CustomButton className="btn btn-last-slide">
                    lets go
                  </CustomButton>
                  {/* </div> */}
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
