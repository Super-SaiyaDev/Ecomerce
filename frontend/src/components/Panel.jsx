import React from "react";
import { MdEmojiObjects } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import '../css/hero.css'
const Panel = (props) => {
  return (
    <>
      <div className="content-panel-feild">
        <div className="content-card">
          <div className="card-title">
            <h3>
              {" "}
              <MdEmojiObjects className="icon" /> {props.titulo}
            </h3>
          </div>

          <div>
            <h2 className="card-price">{props.price}</h2>
          </div>

          <div className="card-info">
            <hr className="card-hr" />
            <span>
              <FaArrowTrendUp className="increment" /> {props.info}
            </span>
            <span className="values"> {props.taks} </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
