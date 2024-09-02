import React from "react";
import { CiShare2 } from "react-icons/ci";
import { RiSaveFill } from "react-icons/ri";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleLeft } from "react-icons/md"; // Import icons
import img1 from "../../../assets/image-12.jpg";
import "../../../css/heroreserva.css";

//? Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../../css/swiper.css";

//* Initialize Swiper with Navigation module
SwiperCore.use([Navigation]);

const HeroReserva = () => {
  const images = [img1, img1, img1, img1, img1, img1, img1, img1]; // Add more images as needed

  return (
    <div className="hero">
      <div className="lin">
        <h1>nombre de la casa</h1>
        <div className="enlaces">
          <div className="part1">
            <a href="">1 evaluacion </a>
            <p>,</p>
            <a href="">Aqui va la direccion de la casa que esta en venta</a>
          </div>
          <div className="part2">
            <div className="com">
              <CiShare2 />
              <a href="">Compartir</a>
            </div>
            <div className="guar">
              <RiSaveFill />
              <a href="">Guardar</a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-img">
        <Swiper
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          spaceBetween={40}
          slidesPerView={2}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="imag">
                <img className="imgReserva" src={image} alt={`Slide ${index}`} />
              </div>
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

      <div className="btn-most-img">
        <button className="btn-img"> Mostrar imagenes</button>
      </div>
    </div>
  );
};

export default HeroReserva;