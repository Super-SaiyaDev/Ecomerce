import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import "./css/swiper.css"

// install Swiper modules
SwiperCore.use([Navigation]);

const ProductsNav = () => {
  return (
    <div className="container-products-nav">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation  // enable navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add as many SwiperSlides as you want */}
      </Swiper>
      <div className="filtros"></div>
      <div className="prc-impuestos"></div>
    </div>
  );
};

export default ProductsNav;