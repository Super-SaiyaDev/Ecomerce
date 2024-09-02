import React from 'react'
import '../../../css/diseñoviaje.css'

function DiseñoViaje() {
  return (
    <div>
      <div className="top">
        <h1>Diseña tu viaje</h1>
        <div className="separ"></div>
      </div>
      <div className="cuerpoo">
        <div className='fodi'>
        <label htmlFor="correo">Correo del diseñador</label>
        <input type="text" placeholder='Correo del diseñador'/>
        </div>
        <div className='fodi2'>
        <label htmlFor="descripcion">Descripcion</label>
        <textarea placeholder='Descripcion'/>
        </div>
      </div>
    </div>
  )
}

export default DiseñoViaje