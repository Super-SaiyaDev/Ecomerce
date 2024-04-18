import React from "react";
import { Link } from "react-router-dom";
// !
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./css/swiper.css";
// !
import {
  MdOutlineArrowCircleRight,
  MdOutlineArrowCircleLeft,
} from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";

// ! 
SwiperCore.use([Navigation ]);

//! 
const slide = Array(18).fill(0);

const ProductsNavbar = () => {
  return (
    <div className="nav-products">
      <div className="swiper">
        <Swiper
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          spaceBetween={40}
          slidesPerView={10}
        >
          {/* Add as many SwiperSlide components as needed */}
          {slide.map((_, index) => (
            <SwiperSlide key={index}>
              <button className="btn-nv-pr">
                <Link className="lnk-pr" to={`/products/${index + 1}`}><BsHouseDoorFill /></Link>
              </button>
            </SwiperSlide>
          ))}
          <div className="swiper-next-button">
            <MdOutlineArrowCircleRight />
          </div>
          <div className="swiper-prev-button">
            <MdOutlineArrowCircleLeft />
          </div>
        </Swiper>
      </div>

      <div className="content-btn-nv-pr">
        <div className="btn-nav-filter">
          <button className="btn-filter btn-pr">
            <i>
              <IoFilterSharp />
            </i>{" "}
            <span>Filtros</span>
          </button>
        </div>

        <div className="btn-nav-opc">
          <i></i>
          <button className="btn-opc btn-pr">opcion</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsNavbar;
