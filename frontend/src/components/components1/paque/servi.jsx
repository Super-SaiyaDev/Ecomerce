import React from 'react'
import '../../../css/servi.css'

const Servi = (props) => {
  return (
    <div className="services">
        {props.ico}
        <p>{props.serc}</p>
    </div>
  )
}

export default Servi