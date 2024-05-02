import React from "react";
import  "../../about/css/about.css";

const AboutCard = (props) => {

  return (
    <div className="about">
      <div className="titulo">{props.titulo}</div>
      <div className="info">
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque tenetur, quam sit dolor non suscipit quisquam quod. Earum, qui mollitia?
        </span>
      </div>
    </div>
  );
};

export default AboutCard;
