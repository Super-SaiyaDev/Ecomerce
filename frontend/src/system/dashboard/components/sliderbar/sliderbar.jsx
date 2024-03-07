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
            className={activeMenu === "usuario" ? "active" : ""} 
            onClick={() => handleMenuClick("usuario")}
          >
            Usuario
          </li>
          <li
            className={activeMenu === "propiedad" ? "active" : "" }
            onClick={() => handleMenuClick("propiedad")}
          >
            Propiedad
          </li>
          <li
            className={activeMenu === "visitas" ? "active" : "" }
            onClick={() => handleMenuClick("visitas")}
          >
            visitas
          </li>
          <li
            className={activeMenu === "ventas" ? "active" : "" }
            onClick={() => handleMenuClick("ventas")}
          >
            ventas
          </li>
          <li
            className={activeMenu === "compra" ? "active" : "" }
            onClick={() => handleMenuClick("compra")}
          >
            Compra
          </li>
          <li
            className={activeMenu === "postventa" ? "active" : "" }
            onClick={() => handleMenuClick("postventa")}
          >
            Postventa
          </li>
          <li
            className={activeMenu === "Reportes" ? "active" : "" }
            onClick={() => handleMenuClick("Reportes")}
          >
            Reportes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sliderbar;
