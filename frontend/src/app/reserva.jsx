import React from "react";
import CuadroCompra from "../components/components1/cuadro-compr/CuadroCompra";
import Primero from "../components/components1/main1/Primero";
import HeroReserva from "../components/components1/hero/heroreserva";
import NavReserva from "../components/components1/navbar/nav";
import Navbar from "../components/menu-1";
import "../css/reserva.css"; 
import Footer from "../components/footer";

const Reserva = () => {
  return (
    <div className="supbod">
      <nav>
        <Navbar />
        <NavReserva />
        {/* className="pnav" */}
      </nav>
      <div className="bod33">
        <header>
          <HeroReserva />
        </header>
        <main>
          <Primero />
          <div className="cont_cuadro">
            <CuadroCompra />
          </div>
        </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Reserva;
