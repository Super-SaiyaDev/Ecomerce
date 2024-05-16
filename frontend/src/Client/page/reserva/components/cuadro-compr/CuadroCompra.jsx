import { useState } from 'react';
import './cuadrocompra.css'
import { GoChevronDown } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";
import CuadroModal from '../modal 3/CuadroModal';


const CuadroCompra = () => {

    const [com, setCom] = useState(false);

    const comClose = () => setCom(false);
    const comShow = () => setCom(true)



  return (
    <div className='cuadro'>
        <div className="prices">
            <div className="price">
                <h1>$5,600 USD</h1>
                <p>noche</p>
            </div>
            <a href="">1reseña</a>
        </div>

        <div className="caracteristicas">
            <div className="horario">
                <button className='llegada'>
                    <p>llegada</p>
                    <p>21/2/24</p>
                </button>
                <button className='salida'>
                    <p>salida</p>
                    <p>1/2/24</p>
                </button>
            </div>
            <button className='huespe'>
                <div className="cantida">
                <p>HUESPEDES</p>
                <p>X huesped</p>
                </div>
                <GoChevronDown />
            </button>
        </div>

        <button className='reserva' onClick={comShow}>Reserva</button>

        <Modal show={com} onHide={comClose} centered backdrop={"static"} className='ModalCOM'>
          <Modal.Header className='Modalhea'>
            <button onClick={comClose}><IoCloseSharp/></button>
          </Modal.Header>
          <Modal.Body>             
            <CuadroModal/>
          </Modal.Body>
        </Modal>

        <div className="cargos">
            <p>No se hara ningun cargo por el momento</p>

            <div className="tarifas">
                <div className="tarifa1">
                    <p>$5,600 USD x 5noches</p>
                    <p>$28,000 USD</p>
                </div>
                <div className="tarifa2">
                    <p>Tarifa por servicio</p>
                    <p>$3,953 USD</p>
                </div>
            </div>

            <div className='separ'></div>

            <div className="total">
                <p>Total sin incluir impuestos</p>
                <p>$31,953 USD</p>
            </div>
        </div>
    </div>
  )
}

export default CuadroCompra