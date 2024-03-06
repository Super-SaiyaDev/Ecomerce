import React, {useState} from "react";
import '../css/slidervbar.css'

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
            Dashboard
          </li>
          <li
            className={activeMenu === "Perfil" ? "active" : ""} 
            onClick={() => handleMenuClick("Perfil")}
          >
            Usuario
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            Propiedad
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            visitas
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            ventas
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            Compra
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            Postventa
          </li>
          <li
            className={activeMenu === "Configuración" ? "active" : "" }
            onClick={() => handleMenuClick("Configuración")}
          >
            Reportes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sliderbar;
