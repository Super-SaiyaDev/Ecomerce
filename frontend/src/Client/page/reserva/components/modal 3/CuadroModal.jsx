import React from 'react'
import './cuadromodal.css'
import tar from './tar.jpg'


function CuadroModal() {
  return (
    <div className='ctodd'>
        <div className='comp'>
            <h1>Casa</h1>
            <div className='casachar'>
                <img src={tar} alt="" />
                <p>LUXURY RETREATS</p>
            </div>
            <h1 className='preci'>$20,000</h1>
        </div>

        <div className="sepdd"></div>

        <div className="tarj">
            <div className="tarjeta">
                <div className="ttop">
                    <h1>VISA</h1>
                </div>
                <div className='datostarj'>
                    <div className="num">
                        <p className='lett'>CARD NUMBER</p>
                        <p className='cero'>0000 0000 0000 0000</p>
                    </div>
                    <div className="abaj">
                    <div className='expi'>
                        <p className='lett'>EXPIRATION</p>
                        <p className='cero'>00 / 0000</p>
                    </div>
                    <div className="cvc">
                        <p className='lett'>CVC</p>
                        <p className='cero'>000</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="dt">
                <input placeholder='0000 0000 0000 0000' type="text" />
                <div className='mast'>
                    <input type="text" placeholder='00 / 0000' className='in1' />
                    <input type="text"  placeholder='000' className='in2'/>
                </div>
            </div>
            <button className='pag'>PAGAR</button>
        </div>
    </div>
  )
}

export default CuadroModal
