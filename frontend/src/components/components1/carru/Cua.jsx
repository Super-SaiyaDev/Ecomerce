import React from 'react'
import '../../../css/cua.css'
import { MdOutlineBed } from "react-icons/md";

function Cua() {
  return (
    <div className='cua_cuadro'>
      <div className="ca_ico">
      <MdOutlineBed/>
      </div>
      <div className="letr_cama">
        <p>habitacion 1</p>
        <p>Cama tal , otra</p>
      </div>
    </div>
  )
}

export default Cua
