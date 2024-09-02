import React from "react";
import { Link } from "react-router-dom";
import "../css/home-page.css";
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

        <div className="container-btn-nav">
          <button className="btn-nav">
            <Link className="lnk-nav" to={"/register"}>
              Register
            </Link>
          </button>
          <button className="btn-nav">
            <Link className="lnk-nav" to={"/login-clie"}>
              Login
            </Link>
          </button>
          <button className="btn-nav">
            <Link className="lnk-nav" to={"/"}>
              Agregar Ubicacion
            </Link>
          </button>
        </div>

        {/* <div className="contanctos">
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
          </div> */}
      </nav>
    </>
  );
};

export default Navbar2;
