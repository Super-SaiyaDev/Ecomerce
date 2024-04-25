import React from 'react'
import Peque from '../paque/peque'
import './primero.css'
import Servi from '../paque/servi';
import { FaPencilRuler } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { IoWifiSharp } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { PiTelevisionBold } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdCleaningServices } from "react-icons/md";
import { IoAirplane } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { MdBalcony } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import img1 from "../main1/img1.jpg";




var punto = ".";

const Primero = () => {
  return (
    <div className="info">
      <div className="nombre_casa">
        <h1>Estadía de lujo en Cabrera, Maria Trinidad Sanchez, República Dominicana</h1>
        <p>Más de 16 huéspedes {punto} 8 habitaciones {punto} 8 camas {punto} 8,5 baños</p>
      </div>

      <div className="separ"></div>

      <div className="mencion">
        <Peque icon={ <FaPencilRuler />} title='Diseñado por' text='Rangr studio'/>
        <Peque icon={ <IoBookSharp />} title='Mencionado en' text='italia enro 2013'/>
      </div>

      <div className="separ"></div>

      <div className="espacio">
        <div className="tex">
          <h1>Descripcion</h1>
          <p>Con vistas a una pequeña isla, esta villa frente al mar disfruta de su prestigiosa parcela a lo largo de la costa, a unos 30 minutos de Las Terrenas. Las vistas al mar en Villa Raphael son abundantes. Para echar un vistazo más de cerca, camina hasta la bañera natural que se llena de agua del mar. De vuelta en la terraza, te encantará descansar junto a la piscina y comer al aire libre. Después de cenar, camina hasta la playa para dar un paseo a la luz de la luna.</p>
          <button>mostrar mas</button>
        </div>

        <div className="immg">
          <h1>Hospitalidad con <p>LUXURY RETREATS</p></h1>

          <div className="mm">
            <img className='im1' src={img1} alt="" />
            <img className='im2' src={img1} alt="" />
          </div>

          <div className="mm2">
            <img className='im3' src={img1} alt="" />
            <img className='im4' src={img1} alt="" />
            <img className='im5' src={img1} alt="" />
          </div>

          <button className='mos_fts'>Muestra todas las fotos</button>
        </div>
      </div>

      <div className="separ"></div>

      <div className="camas">
        <h1></h1>

        <div className="cuadrocama">

        </div>
      </div>

      <div className="separ"></div>

      <div className="serv">
        <h1>Lo que este lugar ofrece</h1>
        <div className="servicios">
          <Servi className='servicio' ico={<LiaUmbrellaBeachSolid />} serc="Vista al océano"/>
          <Servi className='servicio' ico={<TbBathFilled />} serc="Jacuzzi"/>
          <Servi className='servicio' ico={<IoWifiSharp />} serc="Wifi"/>
          <Servi className='servicio' ico={<TbAirConditioning />} serc="Aire acondicionado"/>
          <Servi className='servicio' ico={<PiSwimmingPoolBold />} serc="Piscina"/>
          <Servi className='servicio' ico={<FaKitchenSet />} serc="Cocina"/>
          <Servi className='servicio' ico={<MdWork />} serc="Zona de trabajo"/>
          <Servi className='servicio' ico={<PiTelevisionBold />} serc="TV"/>
          <Servi className='servicio' ico={<MdBalcony />} serc="Patio o balcon"/>
          <Servi className='servicio' ico={<LuParkingCircle />} serc="Estacionamiento"/>
        </div>
        <button>Mostrar servicios</button>
      </div>

      <div className="separ"></div>

      <div className="adii">
        <div className="txx">
          <h1>Servicios adicionales</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, atque repellendus minima inventore nostrum</p>
          <div className="servicios">
          <Servi className='servicio' ico={<IoAirplane />} serc="Traslado al aereopuerto"/>
          <Servi className='servicio' ico={<MdCleaningServices />} serc="Limpieza"/>
          <Servi className='servicio' ico={<CgSmartHomeRefrigerator />} serc="Refrigerador lleno"/>
          </div>
          <p className='p2'>¿No encuentras algo que te gustaria pedir?</p>
          <button>Envia un mensaje al diseñador de viajes</button>
        </div>
      </div>

      <div className="separ"></div>

      <div className="calend">
      </div>
    </div>
  )
}

export default Primero