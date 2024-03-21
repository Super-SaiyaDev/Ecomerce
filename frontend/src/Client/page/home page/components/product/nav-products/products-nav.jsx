import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./css/swiper.css";

const ProductsNav = () => {
  return (
    <div className="container-products-nav">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // enable navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add as many SwiperSlides as you want */}
        <div className="swiper-button-next"></div> {/* Next navigation button */}
      <div className="swiper-button-prev"></div>{" "}

      </Swiper>
      {/* Previous navigation button */}
      <div className="filtros"></div>
      <div className="prc-impuestos"></div>
    </div>
  );
};

export default ProductsNav;
