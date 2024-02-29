import React, {useState} from "react";
import './css/slidervbar.css'

function Sliderbar() {
  const [activeMenu, setActiveMenu] = useState("Inicio");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>Menú</h3>
        <ul className="ul">
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
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            Configuración
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sliderbar;
