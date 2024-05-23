import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../create/css/create.css";

const Update = ({ apiUrl, fields, initialValues, setModalIsOpen }) => {
  const [values, setValues] = useState(initialValues);

  const fetchData = async () => {
    if (!values.id) return; // Si values.id no está definido, no hagas nada
    try {
      console.log(values.id);
      const response = await axios.get(apiUrl + values.id);
      setValues(response.data); // Asegúrate de que estás estableciendo el estado con los datos correctos
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [values.id]); // Cada vez que values.id cambie, fetchData se ejecutará de nuevo

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .put(apiUrl + values.id, values)
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
      <div className="container-frm-create">
        <form onSubmit={handlerSubmit}>
          <div className="title-create">
            <h1>Actualizar usuario</h1>
          </div>
          <div className="input-groupt-cr">
            {fields.map((field, index) => (
              <div className="input-feild-cr" key={index}>
                <label className="label-cr">{field.label}</label>
                <input
                  className="input-cr"
                  type="text"
                  value={values[field.name]}
                  onChange={(e) =>
                    setValues({ ...values, [field.name]: e.target.value })
                  }
                  required
                />
              </div>
            ))}
            <div className="btn-cr">
              <button className="btn-create" type="submit">
                Actualizar
              </button>
              <button
                className="btn-redirect"
                type="button"
                onClick={() => setModalIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
