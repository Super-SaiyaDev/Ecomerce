import React from 'react'
import AboutCard from '../about/components/aboutCard'
import { PiHandshakeBold } from "react-icons/pi";
import { TbEyeSearch } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import './css/about.css'

const Aboutme = () => {
  return (
   <div className='about-section'>
    
    <div className="about-groupt-card">
    <AboutCard titulo='Mision' icono1= <PiHandshakeBold /> />
    <AboutCard  titulo='Vision' icono2 = <TbEyeSearch />/>
    <AboutCard  titulo='Valores'icono3 = <FaInfoCircle /> />
    </div>

   </div>
  )
}

export default Aboutme