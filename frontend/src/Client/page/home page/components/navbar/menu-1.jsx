// React Component
import React, { useState } from "react";
import "../../css/home-page.css";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdFavorite } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="container-menu">
        <div className="menu-superior">
          <div className="container-list right">
            <ul>
              <li>
                <select name="idiomas" id="idiomas">
                  <option value="spanish">
                    <span>icon</span>spanish
                  </option>
                  <option value="english">
                    <span>icon</span>english
                  </option>
                  <option value="france">
                    <span>icon</span>france
                  </option>
                </select>
              </li>
              <li>
                <select name="country" id="country">
                  <option value="Dominican-Republic">
                    <i>icon</i>Dominican Republic
                  </option>
                  <option value="Espana">
                    <i>icon</i>España
                  </option>
                  <option value="USA">
                    <i>
                      icon
                    </i>
                    Estados Unidos
                  </option>
                </select>
              </li>
            </ul>
          </div>

          <div className="conatiner-list left">
            <ul>
              <li>
                <span>
                  <i>
                    <FaUserCog />
                  </i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    perfil
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i>
                    <MdFavorite />
                  </i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    favoritos
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i>ico</i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    reserva
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i>ico</i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    ayuda
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
