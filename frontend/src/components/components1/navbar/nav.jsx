import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../../css/nav.css'

const NavReserva = () => {
  return (
    <nav className="barra">
        <div className="logo">
            <BsFillHouseHeartFill className='lo'/>
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
                <button className="sub"> Json House</button>
                <button className="int"><Link className='lin' to={"/infohause"}><TfiWorld /></Link></button>
                <div className="logi">
                    <button className="lup2"><Link className='lin' to={"/"}><TfiMenuAlt /></Link></button>
                    <button className="lup2"><Link className='lin' to={"/login-clie"}><FaUserCircle /></Link></button>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default NavReserva
