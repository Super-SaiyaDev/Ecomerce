import React from "react";
import "./css/card.css";
const CardProducto = () => {
  return (
    <>
      <div className="card">
        <div className="title">
          <h4>favorito de los clientes</h4>
        </div>
        <div className="img-card">
          <img src="../../../assets/image-12.jp" alt="" />
        </div>
        <div className="info">
          <span>
            Lorem ipsum dolor <br /> ubicacion <br /> 1.5 km <br /> fecha 231/313/13
          </span>
          <hr />
          <div className="price">
            <span>DOP $13.4
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProducto;
