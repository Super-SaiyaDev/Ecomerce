import React from "react";
import { CiShare2 } from "react-icons/ci";
import { RiSaveFill } from "react-icons/ri";
import img1 from "../../../assets/image-12.jpg";
import "../../../css/heroreserva.css";

const HeroReserva = () => {
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
        <div className="imag">
          <img className="imgReserva" src={img1} alt="" />
          <div className="btn-most-img">
            <button className="btn-img"> Mostrar imagenes</button>
          </div>
        </div>

        <div className="imag">
          <img className="imgReserva" src={img1} alt="" />
          <div className="btn-most-img">
            <button className="btn-img"> Mostrar imagenes</button>
          </div>
        </div>

        <div className="imag">
          <img className="imgReserva" src={img1} alt="" />
          <div className="btn-most-img">
            <button className="btn-img"> Mostrar imagenes</button>
          </div>
        </div>

        <div className="imag">
          <img className="imgReserva" src={img1} alt="" />
          <div className="btn-most-img">
            <button className="btn-img"> Mostrar imagenes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroReserva;
