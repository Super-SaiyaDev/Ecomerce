import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [datos, setData] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .put("http://localhost:3000/api/clientes/" + id)
      .then((response) => {
        console.log(response.data.body);
        setData(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/clientes/", values)
      .then((data) => {
        console.log(data);
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    presupuesto: "",
  });
  return (
    <>
      <div className="container">
        <form onSubmit={handlerSubmit} action="">
          <div className="input-groupt">
            <div className="input-feild">
              <label htmlFor="">nombre</label>
              <input
                className="inputs"
                type="text"
                value={datos.nombre}
                onChange={(e) =>
                  setValues({ ...values, nombre: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">apellido</label>
              <input
                className="inputs"
                type="text"
                value={datos.apellido}
                onChange={(e) =>
                  setValues({ ...values, apellido: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">telefono</label>
              <input
                className="inputs"
                type="text"
                value={datos.telefono}
                onChange={(e) =>
                  setValues({ ...values, telefono: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">email</label>
              <input
                className="inputs"
                type="text"
                value={datos.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">presupuesto</label>
              <input
                className="inputs"
                type="text"
                value={datos.presupuesto}
                onChange={(e) =>
                  setValues({ ...values, presupuesto: e.target.value })
                }
              />
            </div>

            <div className="btn-create">
              <button>create</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
