import React from 'react'
import '../styles/panel.css'
import { MdEmojiObjects } from "react-icons/md";
import { HiArrowTrendingUp } from "react-icons/hi2";

const Panels = (props) => {
  return (

    <div className="panel-group">
      <div className='card-panel'>
          <div className='card'>

          <h3 className='titulo'> <MdEmojiObjects /> {props.titulo}</h3>
          <h1 className='cant'>{props.cant}</h1>
          <span className='subtilulo'> <HiArrowTrendingUp /> {props.subtitulo} </span>
          <span className='ear'> {props.ear}</span>

          </div>
      </div>
    </div>
  )
}

export default Panels