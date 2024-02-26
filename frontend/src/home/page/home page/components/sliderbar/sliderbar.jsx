import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./css/sliderbar.css"

import slide_image_1 from "../assets/image-1.jpg";
import slide_image_2 from "../assets/image-2.jpeg";
import slide_image_3 from "../assets/image-3.jpeg";
import slide_image_4 from "../assets/image-4.jpg";
import slide_image_5 from "../assets/R.jpeg";

const Sliderbar = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 15,
            stretch: 12.5,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img className="s-img" src={slide_image_1} alt="slide_image_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="s-img" src={slide_image_2} alt="slide_image_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="s-img" src={slide_image_3} alt="slide_image_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="s-img" src={slide_image_4} alt="slide_image_4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="s-img" src={slide_image_5} alt="slide_image_5" />
          </SwiperSlide>
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev silder-arrow">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next silder-arrow">
            <FaArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default Sliderbar;