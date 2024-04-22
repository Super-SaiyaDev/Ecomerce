import React from "react";
import { CiShare2 } from "react-icons/ci";
import { RiSaveFill } from "react-icons/ri";
import img1 from "./assets/img1.jpg";
import "./heroreserva.css";

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

      <div className="imag">
        <img className="imgReserva" src={img1} alt="" />
          <button>Mostrar imagenes</button>
      </div>
    </div>
  );
};

export default HeroReserva;
