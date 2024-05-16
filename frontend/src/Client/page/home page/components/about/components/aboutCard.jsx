import React from "react";
import  "../../about/css/about.css";

const AboutCard = (props) => {

  return (
    <div className="about">
      <div className="icons-about">


        <div className="ico1">
        {props.icono1}
        </div>
        <div className="ico2">
        {props.icono2}
        </div>
        <div className="ico3">
        {props.icono3}
        </div>
      </div>
      <div className="titulo">{props.titulo}</div>
      <div className="info">
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque tenetur, quam sit dolor non suscipit quisquam quod. Earum, qui mollitia?
        </span>
      </div>

      <div className="about-footer">

      </div>
    </div>
  );
};

export default AboutCard;
