import React from "react";
import { Link } from "react-router-dom";
import "../../css/home-page.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="container-h-left">
          <div className="h-circule">
            <div className="circule cr-1"></div>
            <div className="circule cr-2"></div>
          </div>

          <div className="header-title">
            <h1>Json House</h1>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eius
              quasi excepturi! Iure perferendis ipsam alias? Laboriosam eveniet
              atque accusamus, magni quisquam nesciunt ipsum, adipisci libero
              deserunt sint qui non!
            </p>
          </div>

          <div className="btn-compra">
            <Link className="btn" to={"/"}>
              Hola mundo
            </Link>
          </div>
        </div>

        <div className="container-hright">
          <div className="content-img ">
            <img src="../assets/image-4.jpg" className="h-img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
