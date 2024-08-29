import { useState} from "react";
import "../../../css/cuadrocompra.css";
import { GoChevronDown } from "react-icons/go";
import Modal from "react-bootstrap/Modal";
import { IoCloseSharp } from "react-icons/io5";
import CuadroModal from "../modal 3/CuadroModal";


const CuadroCompra = () => {

  const [com, setCom] = useState(false);

  const comClose = () => setCom(false);
  const comShow = () => setCom(true);

  const [cant, setCant] = useState(false);

  const cantClose = () => setCant(false);
  const cantShow = () => setCant(true);

  const [pers, setPer] = useState(localStorage.getItem("per") || "");
  const [adss, setAds] = useState(localStorage.getItem("ads") || "");
  const [niñs, setNiñ] = useState(localStorage.getItem("nño") || "");
  const [bbss, setBb] = useState(localStorage.getItem("bbs") || "");
  const [mass, setMas] = useState(localStorage.getItem("mas") || "");

  const total =
    parseInt(pers) + parseInt(adss) + parseInt(bbss) + parseInt(niñs) || 0;

  return (
    <div className="cuadro">
      <div className="prices">
        <div className="price">
          <h1>$5,600 USD</h1>
          <p>noche</p>
        </div>
        <a href="">1reseña</a>
      </div>

      <div className="caracteristicas">
        <div className="horario">
          <button className="llegada">
            <p>llegada</p>
            <input type="date" name="" id="" className="inpdate" />
          </button>
          <button className="salida">
            <p>salida</p>
            <input type="date" name="" id="" className="inpdate" />
          </button>
        </div>
        <button className="huespe">
          <div className="cantida">
            <p>HUESPEDES</p>
            <p>
              {total} huespedes {parseInt(mass) || 0} mascotas
            </p>
          </div>
          <button onClick={cantShow} className="hue">
            <GoChevronDown />
          </button>
        </button>
      </div>

      {/* Primer Modal*/}
      <Modal
        show={cant}
        onHide={cantClose}
        centered
        backdrop={"static"}
        className="ModalCant"
      >
        <Modal.Header className="Modalheas">
          <h1>Cantidad de personas</h1>
          <button onClick={cantClose}>
            <IoCloseSharp />
          </button>
        </Modal.Header>
        <Modal.Body className="ModalHu">
          <form className="hues">
            <div className="in">
              <label htmlFor="">Adultos</label>
              <input
                type="number"
                max={14}
                min={0}
                name=""
                id="per"
                onChange={(e) => {
                  setPer(e.target.value);
                  localStorage.setItem("per", e.target.value);
                }}
              />
            </div>

            <div className="in">
              <label htmlFor="">Adolecentes</label>
              <input
                type="number"
                max={10}
                min={0}
                name=""
                id="ads"
                onChange={(e) => {
                  setAds(e.target.value);
                  localStorage.setItem("ads", e.target.value);
                }}
              />
            </div>

            <div className="in">
              <label htmlFor="">Niños</label>
              <input
                type="number"
                max={7}
                min={0}
                name=""
                id="nño"
                onChange={(e) => {
                  setNiñ(e.target.value);
                  localStorage.setItem("nño", e.target.value);
                }}
              />
            </div>

            <div className="in">
              <label htmlFor="">Bebes</label>
              <input
                type="number"
                max={5}
                min={0}
                name=""
                id="bbs"
                onChange={(e) => {
                  setBb(e.target.value);
                  localStorage.setItem("bbs", e.target.value);
                }}
              />
            </div>

            <div className="in">
              <label htmlFor="">Mascotas</label>
              <input
                type="number"
                max={2}
                min={0}
                name=""
                id="mas"
                onChange={(e) => {
                  setMas(e.target.value);
                  localStorage.setItem("mas", e.target.value);
                }}
              />
            </div>
          </form>
          <button onClick={cantClose} className="btn-modal">Guardar</button>
        </Modal.Body>


      </Modal>

      <button className="reserva" onClick={comShow}>
        Reserva
      </button>

      {/* este es el otro modal */}
      <Modal
        show={com}
        onHide={comClose}
        centered
        backdrop={"static"}
        className="ModalCOM"
      >
        <Modal.Header className="Modalhea">
          <button onClick={comClose}>
            <IoCloseSharp />
          </button>
        </Modal.Header>
        <Modal.Body>
          <CuadroModal />
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

        <div className="separ"></div>

        <div className="total">
          <p>Total sin incluir impuestos</p>
          <p>$31,953 USD</p>
        </div>
      </div>
    </div>
  );
};

export default CuadroCompra;
