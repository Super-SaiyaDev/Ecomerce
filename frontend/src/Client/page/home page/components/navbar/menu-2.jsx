import React from "react";
import "../../css/home-page.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsFillHouseHeartFill } from "react-icons/bs";
const Navbar2 = () => {
  return (
    <>
      <nav className="container-menu2">
        <div className="container-logo">
          <i>
            <BsFillHouseHeartFill className="icon" />
          </i>
          <h1>Json House</h1>
        </div>

        <div className="container-input">
          <div className="input-feild">
            <span className="icon-input1">Categoria</span>
            <input type="text" placeholder="Search"
            className="inpu" />
            <i ><CiSearch className="search" /></i>
          </div>
        </div>

          <div className="contanctos">
            <div className="contactos-items whasapp">
              <i>
                <FaWhatsapp className="icons" />
              </i>
              <h4 className="title">whasapp</h4>
              <p className="paragraph">447-433-5690</p>
            </div>

            <div className="contactos-items instagram">
              <i>
                <FaInstagram className="icons" />
              </i>
              <h4 className="title">Instagram</h4>
              <p className="paragraph">447-433-5690</p>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar2;
