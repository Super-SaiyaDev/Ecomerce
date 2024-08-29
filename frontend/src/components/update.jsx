import React, { useState, useEffect } from "react";
//? no lo estoy usando  import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/create.css";

const Update = ({ id, apiUrl, fields, initialValues, setModalIsOpen }) => {
  const [values, setValues] = useState(...initialValues, id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!values.id) return;
    setLoading(true);
    try {
      const response = await axios.get(apiUrl + values.id);
      setValues(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [values.id]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .put(apiUrl + values.id, values)
      .then((data) => {
        console.log(data);
        setModalIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

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
