import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/create.css";

const Create = ({ api, setModalIsOpen, inputs }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post(api.url, values)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-frm-create">
      <form onSubmit={handlerSubmit}>
        <div className="title-create">
          <h1>crear usuario</h1>
        </div>
        <div className="input-groupt-cr">
          {inputs.map((input, index) => (
            <div className="input-feild-cr" key={index}>
              <label className="label-cr">{input.lblName}</label>
              <input
                className="input-cr"
                type={input.type}
                required
                onChange={(e) =>
                  setValues({ ...values, [input.name]: e.target.value })
                }
              />
            </div>
          ))}
          <div className="btn-cr">
            <button className="btn-create" type="submit">
              crear
            </button>
            <button
              className="btn-redirect"
              type="button"
              onClick={() => setModalIsOpen(false)}
            >
              cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;