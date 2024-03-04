import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    presupuesto: "",
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/clientes", values)
      .then((data) => {
        console.log(data);
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
