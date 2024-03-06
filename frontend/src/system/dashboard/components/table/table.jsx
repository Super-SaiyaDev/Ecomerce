import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/table.css";
import { IoSearchOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Table() {
  const [isInputFocused, setInputFocused] = useState(false);

  const [datos, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clientes")
      .then((response) => {
        console.log(response.data.body);
        setData(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/clientes/${id}`)
      .then((response) => {
        location.reload();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="content">
      <div className="content-T">
        <div className="header-table">
          <div className="title-table">
            <h1>Users Management</h1>
          </div>

          <div className="navigate-table">
            <Link to="/create">
              <button>
                <IoMdPersonAdd /> New User
              </button>
            </Link>

            <div className="search">
              <i className={`lbl-search ${isInputFocused ? "desactived" : ""}`}>
                <IoSearchOutline />
              </i>
              <input
                className="input-search"
                type="text"
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>telefono</th>
              <th>email</th>
              <th>presupuesto</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((items, key) => (
              <tr key={key}>
                <td>{items.id}</td>
                <td>{items.nombre}</td>
                <td>{items.usuario}</td>
                <td>{items.clave}</td>
                <td>{items.activo}</td>
                <td>
                  <Link to={`/update/${items.id}`}>
                    <button>
                      <RiEdit2Fill />
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handlerDelete(items.id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Aquí va el contenido principal */}
    </div>
  );
}

export default Table;
