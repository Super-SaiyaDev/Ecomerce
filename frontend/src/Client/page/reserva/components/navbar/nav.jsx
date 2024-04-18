import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import './nav.css'

const NavReserva = () => {
  return (
    <nav className="barra">
        <div className="logo">
            <h1>Json House</h1>
        </div>
        <div className="funt">
            <div className="buscr">
                <button className="boton">Cualquier lugar</button>
                <div className="horizontal"></div>
                <button className="boton">Cualquier casa</button>
                <div className="horizontal"></div>
                <button className="boton">¿Cuantos?</button>
                <button className="lup"><IoSearch /></button>
            </div>
            <div className="log">
                <button className="sub">Pon tu casa en Json House</button>
                <button className="int"><TfiWorld /></button>
                <div className="logi">
                    <button className="lup2"><TfiMenuAlt /></button>
                    <button className="lup2"><FaUserCircle /></button>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default NavReserva
