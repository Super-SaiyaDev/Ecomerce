import React, { useState } from "react";
import "../css/sidebar.css";
import { IoExitOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import axios from "axios";

function Sliderbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Inicio");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/user/logout");
      console.log("logout success");
      navigate("/login");
    } catch (error) {
      console.log("logout error"), error;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul className="ul">
          <li
            className={activeMenu === "Inicio" ? "active" : ""}
            onClick={() => handleMenuClick("Inicio")}
          >
            <Link className="lnk-sidebar" to="/home">
              <RxDashboard />
              Dashboard
            </Link>
          </li>
          <li
            className={activeMenu === "usuario" ? "active" : ""}
            onClick={() => handleMenuClick("usuario")}
          >
            <Link className="lnk-sidebar" to="/usuario">
              <FaUser />
              Usuario
            </Link>
          </li>
          
          <li
            className={activeMenu === "cliente" ? "active" : ""}
            onClick={() => handleMenuClick("cliente")}
          >
            <Link className="lnk-sidebar" to="/Cliente">
              <FaUsers />
              Clientes
            </Link>
          </li>
          <li
            className={activeMenu === "propiedad" ? "active" : ""}
            onClick={() => handleMenuClick("propiedad")}
          >
            <Link className="lnk-sidebar" to="Reportes">
              <FaHouse />
              Propiedad
            </Link>
          </li>
          <li
            className={activeMenu === "Proveedores" ? "active" : ""}
            onClick={() => handleMenuClick("Proveedores")}
          >
            <Link className="lnk-sidebar" to="/Proveedores">
              <FaHouse />
              Proveedores
            </Link>
          </li>
          <li
            className={activeMenu === "visitas" ? "active" : ""}
            onClick={() => handleMenuClick("visitas")}
          >
            <Link className="lnk-sidebar" to="Reportes">
              <FaCalendarAlt />
              Reservas
            </Link>
          </li>
          <li
            className={activeMenu === "ventas" ? "active" : ""}
            onClick={() => handleMenuClick("ventas")}
          >
            <Link className="lnk-sidebar" to="/ventas">
              <FaMoneyCheck />
              ventas
            </Link>
          </li>
          <li
            className={activeMenu === "compra" ? "active" : ""}
            onClick={() => handleMenuClick("compra")}
          >
            <Link className="lnk-sidebar" to="Reportes">
              <FaShoppingCart />
              Compras
            </Link>
          </li>
          <li
            className={activeMenu === "Reportes" ? "active" : ""}
            onClick={() => handleMenuClick("Reportes")}
          >
            <Link className="lnk-sidebar" to="Reportes">
              <TbReportSearch />
              Reportes
            </Link>
          </li>
        </ul>
        <div className="content-btn-logout">
          <button onClick={handleLogout} className="btn-logout">
            <IoExitOutline /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sliderbar;
