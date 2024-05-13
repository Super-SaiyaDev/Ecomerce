import React from 'react'
import AboutCard from '../about/components/aboutCard'
import './css/about.css'

const Aboutme = () => {
  return (
   <div className='about-section'>
    
    <div className="about-groupt-card">
    <AboutCard titulo='Mision'/>
    <AboutCard  titulo='Vision'/>
    <AboutCard  titulo='Valores'/>
    </div>

   </div>
  )
}

export default Aboutme