import React from 'react'
import './cuadrocompra.css'
import { GoChevronDown } from "react-icons/go";

const CuadroCompra = () => {
  return (
    <div className='cuadro'>
        <div className="prices">
            <div className="price">
                <h1>$5,600 USD</h1>
                <p>noche</p>
            </div>
            <a href="">1reseña</a>
        </div>

        <div className="caracteristicas">
            <div className="horario">
                <button className='llegada'>
                    <p>llegada</p>
                    <p>21/2/24</p>
                </button>
                <button className='salida'>
                    <p>salida</p>
                    <p>1/2/24</p>
                </button>
            </div>
            <button className='huespe'>
                <div className="cantida">
                <p>HUESPEDES</p>
                <p>X huesped</p>
                </div>
                <GoChevronDown />
            </button>
        </div>

        <button className='reserva'>Reserva</button>

        <div className="cargos">
            <p>No se hara ningun cargo por el momento</p>

            <div className="tarifas">
                <div className="tarifa1">
                    <p>$5,600 USD x 5noches</p>
                    <p>$28,000 USD</p>
                </div>
                <div className="tarifa2">
                    <p>Tarifa por servicio</p>
                    <p>$3,953 USD</p>
                </div>
            </div>

            <div className='separ'></div>

            <div className="total">
                <p>Total sin incluir impuestos</p>
                <p>$31,953 USD</p>
            </div>
        </div>
    </div>
  )
}

export default CuadroCompra