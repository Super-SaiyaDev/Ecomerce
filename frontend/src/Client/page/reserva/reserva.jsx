import React from 'react'
import CuadroCompra from './components/cuadro-compr/CuadroCompra'
import Primero from './components/main1/Primero'
import HeroReserva from './components/hero/heroreserva'
import NavReserva from './components/navbar/nav'
import Navbar from '../home page/components/navbar/menu-1'
import './reserva.css'
import Footer from '../home page/components/footer/footer'

const Reserva = () => {
  return (
    <div className="supbod">
      <nav>
        <Navbar className="pnav"/>
        <NavReserva />
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
      <Footer />
    </footer>
    </div>
  )
}

export default Reserva