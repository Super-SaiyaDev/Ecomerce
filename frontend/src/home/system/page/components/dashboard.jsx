import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import "../css/dashboard.css";

const Principal = () => {
  const [activeMenu, setActiveMenu] = useState("Inicio");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>Menú</h3>
        <ul>
          <li
            className={activeMenu === "Inicio" ? "active" : ""}
            onClick={() => handleMenuClick("Inicio")}
          >
            Inicio
          </li>
          <li
            className={activeMenu === "Perfil" ? "active" : ""}
            onClick={() => handleMenuClick("Perfil")}
          >
            Perfil
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : ""}
            onClick={() => handleMenuClick("Configuración")}
          >
            Configuración
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="content-table">
          <div className="header-table">
            <div className="title-table">
              <h1>Users Management</h1>
            </div>

            <div className="navigate-table">
              <button to="/">
                <IoMdPersonAdd /> New User
              </button>
              <label htmlFor="search"><IoSearchOutline /></label>
              <input type="text"/>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="https://th.bing.com/th/id/OIP.MhCeRSMugeDNOj-n2SbToQHaHa?pid=ImgDet&w=182&h=182&c=7"
                    alt=""
                  />
                  Juan
                </td>
                <td>Pére Nuñez</td>
                <td>juanperez@example.com</td>
                <td>activo</td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <img
                    src="https://th.bing.com/th/id/OIP.DqQp2MTPz9G8kcWeHoAj8gAAAA?rs=1&pid=ImgDetMain"
                    alt=""
                  />
                  Maria
                </td>
                <td>González</td>
                <td>mariagonzalez@example.com</td>
                <td>activo</td>
              </tr>

              <tr>
                <td>3 </td>
                <td>
                  <img
                    src="https://th.bing.com/th/id/OIP.j5liSvLK18lsGRTja6ZR0QHaJQ?rs=1&pid=ImgDetMain"
                    alt=""
                  />
                  Maria
                </td>
                <td>González</td>
                <td>mariagonzalez@example.com</td>
                <td>activo</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Aquí va el contenido principal */}
      </div>
    </div>
  );
};

export default Principal;
