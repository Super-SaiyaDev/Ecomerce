import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./css/create.css";

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre: "",
    usuario: "",
    clave: "",
    rol_id: "",
  });

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

  return (
    <>
      <div className="container-create">
        <form onSubmit={handlerSubmit} action="">
          <div className="title-create">
            <h1>crear usuario</h1>
          </div>
          <div className="input-groupt-cr">
            <div className="input-feild-cr">
              <label className="label-cr" htmlFor="">
                nombre
              </label>
              <input
                className="input-cr"
                type="text"
                onChange={(e) =>
                  setValues({ ...values, nombre: e.target.value })
                }
              />
            </div>

            <div className="input-feild-cr">
              <label className="label-cr" htmlFor="">
                usuario
              </label>
              <input
                className="inputs"
                type="text"
                onChange={(e) =>
                  setValues({ ...values, usuario: e.target.value })
                }
              />
            </div>

            <div className="input-feild-cr">
              <label className="label-cr" htmlFor="">
                clave
              </label>
              <input
                className="inputs"
                type="text"
                onChange={(e) =>
                  setValues({ ...values, clave: e.target.value })
                }
              />
            </div>

            <div className="input-feild-cr">
              <label className="label-cr" htmlFor="">
                rol
              </label>
              <select
                className="inputs"
                name="rol"
                onChange={(e) => {
                  setValues({ ...values, rol_id: e.target.value });
                }}
              >
                <option value="1">Admin</option>
                <option value="2">Super</option>
                <option value="3">Basic</option>
              </select>
            </div>

            <div className="btn-create">
              <button>create</button>
              <button className="btn-redirect">
                <Link className="lnk-redirect" to={"/table"}>
                  Atras
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
