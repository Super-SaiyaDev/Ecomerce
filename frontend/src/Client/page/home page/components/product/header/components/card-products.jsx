import React from "react";
import "./css/card.css";
import { PiStarThin } from "react-icons/pi";
const CardProducto = ({  image,  location,  distance,  date,  price,  valoracion,}) => {

  return (
    <div className="card">
      <img className="img-card" src={image} alt="" />
      <div className="info">
        <div className="tex-card">
          <span className="txt-card location">
            <strong>
              {location} <br />{" "}
            </strong>
          </span>
          <span className="txt-card distance">
            esta a {distance} km <br />
          </span>
          <span className="txt-card date">
            {date} <br />
          </span>
          <span className="txt-card price">
            <strong> {price} DOP </strong> night
          </span>
        </div>

        <div className="valoracion">
          <span>
            <PiStarThin /> {valoracion}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
