// React Component
import React from "react";
import "../../css/home-page.css";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaUserCog, FaCalendarAlt } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="container-navbar">
        <div className="menu-container-menu">
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
                    <i>icon</i>
                    Estados Unidos
                  </option>
                </select>
              </li>
            </ul>
          </div>

          <div className="container-list left">
            <ul>
              <li>
                <span>
                  <i>
                    <FaUserCog className="icono-color" />
                  </i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    perfil
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i>
                    <MdFavorite className="icono-color" />
                  </i>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    favoritos
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <FaCalendarAlt className="icono-color" />
                  <Link to={'/reserva'}>Reserva</Link>
                </span>
              </li>
              <li>
                <span>
                  <FiHelpCircle className="icono-color" />
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
