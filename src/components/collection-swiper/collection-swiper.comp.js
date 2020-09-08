import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

const CollectionSwiper = () => (
  <Swiper spaceBetween={50} slidesPerView={2}>
    <SwiperSlide>Slide1</SwiperSlide>
    <SwiperSlide>Slide2</SwiperSlide>
    <SwiperSlide>Slide3</SwiperSlide>
    <SwiperSlide>Slide4</SwiperSlide>
  </Swiper>
);

export default CollectionSwiper;
