import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./css/citas.css";

const Cita = () => {
  return (
    <>
      <div className="container-cita">
        <div className="cita">
          <h1>Agenda tu cita</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur nostrum sed dolor, corrupti officiis soluta deserunt,
            sunt voluptates amet cupiditate vel similique veniam corporis
            excepturi labore. Laudantium itaque blanditiis perspiciatis.
          </h3>
          <div className="btn-citas">
            <button>
              <a
                href="https://wa.me/18099550303"
                target="_blank"
                rel="noreferrer"
              />
              <i className="fab fa-whatsapp">
                <FaWhatsapp></FaWhatsapp>{" "}
              </i>
              <span> 809-918-9836</span>
            </button>
            <button>
              <a
                href="https://wa.me/18099550303"
                target="_blank"
                rel="noreferrer"
              />
              <i className="fab fa-whatsapp">
                <FaInstagram></FaInstagram>{" "}
              </i>
              <span>Json House</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cita;
