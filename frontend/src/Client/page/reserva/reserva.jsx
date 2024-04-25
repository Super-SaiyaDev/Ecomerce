import React from 'react'
import CuadroCompra from './components/cuadro-compr/CuadroCompra'
import Primero from './components/main1/Primero'
import HeroReserva from './components/hero/heroreserva'
import NavReserva from './components/navbar/nav'
import './reserva.css'

const Reserva = () => {
  return (
    <div className="supbod">
      
    <div className="bod33">
          <header>
      <nav>
        <NavReserva />
      </nav>
      <HeroReserva />
    </header>
    <main>
      <Primero />
      <CuadroCompra />
    </main>
    </div>
    </div>
  )
}

export default Reserva