import React from 'react'
import Servi from '../paque/servi'
import './servimodal.css'
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { IoWifiSharp } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { PiTelevisionBold } from "react-icons/pi";
import { TbBathFilled } from "react-icons/tb";
import { MdBalcony } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";


const ServiModal = () => {
  return (
    <div className='stodd'>
        <div className="sarriba">
            <h1>SERVICIOS</h1>
            <div className="separ"></div>
        </div>
        <div className="sabajo">
          <Servi className="ser" ico={<LiaUmbrellaBeachSolid />} serc="Vista al océano"/>
          <Servi className="ser" ico={<TbBathFilled />} serc="Jacuzzi"/>
          <Servi className="ser" ico={<IoWifiSharp />} serc="Wifi"/>
          <Servi className="ser" ico={<TbAirConditioning />} serc="Aire acondicionado"/>
          <Servi className="ser" ico={<PiSwimmingPoolBold />} serc="Piscina"/>
          <Servi className="ser" ico={<FaKitchenSet />} serc="Cocina"/>
          <Servi className="ser" ico={<MdWork />} serc="Zona de trabajo"/>
          <Servi className="ser" ico={<PiTelevisionBold />} serc="TV"/>
          <Servi className="ser" ico={<MdBalcony />} serc="Patio o balcon"/>
          <Servi className="ser" ico={<LuParkingCircle />} serc="Estacionamiento"/>
        </div>
    </div>
  )
}

export default ServiModal