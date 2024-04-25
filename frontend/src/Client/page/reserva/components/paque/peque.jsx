import React from 'react'
import './peque.css'

const Peque = (props) => {
  return (
    <div className='paque'>
        {props.icon}
        <div className="letras">
            <p className='tit'>{props.title}</p>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Peque