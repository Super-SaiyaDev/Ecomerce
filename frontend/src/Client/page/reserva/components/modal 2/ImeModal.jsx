import React from 'react'
import img1 from './img1.jpg'
import './imemodal.css'

function ImeModal() {
  return (
    <div className='todd'>
      <div className="arriba">
        <h1>TODAS LAS IMAGENES</h1>
        <div className="separ"></div>
      </div>
      <div className="abajo">
      <h1>EXTERIOR</h1>
        <div className="exterio">
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
        
        <h1>INTERIOR</h1>
        <div className="exterio">
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImeModal
