import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre: "",
    usuario: "",
    clave: "",
    activo: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/clientes/" + id
        );
        const data = response.data.body[0];
        console.log(data);
        setValues({
          ...values,
          nombre: data.nombre,
          usuario: data.usuario,
          clave: data.clave,
          activo: data.estado,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/api/clientes/" + id, values)
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
                value={values.nombre}
                onChange={(e) =>
                  setValues({ ...values, nombre: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">usuario</label>
              <input
                className="inputs"
                type="text"
                value={values.usuario}
                onChange={(e) =>
                  setValues({ ...values, usuario: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">clave</label>
              <input
                className="inputs"
                type="text"
                value={values.clave}
                onChange={(e) =>
                  setValues({ ...values, clave: e.target.value })
                }
              />
            </div>

            <div className="input-feild">
              <label htmlFor="">activo</label>
              <input
                className="inputs"
                type="text"
                value={values.activo}
                onChange={(e) =>
                  setValues({ ...values, activo: e.target.value })
                }
              />
            </div>

            <div className="btn-create">
              <button>update</button>
              <Link to={"/table"}>Atras</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
