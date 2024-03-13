import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DataTable from "./components/dataTable/dataTable";
import "../css/table.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Table = ({}) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const [datos, setData] = useState([{}]);

  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(`http://localhost:3000/api/clientes/`);
      const data = response.data.body;
      setData(data);
    };

    fechData();
  }, []);

  const columns = ["id", "nombre", "usuario", "clave", "activo"];

  return (
    <div className="content">
      <div className="content-T">
        <div className="header-table">
          <div className="title-table">
            <h1>Users Management</h1>
          </div>

          <div className="navigate-table">
            <div className="btn-navigate">
              <button>
                <Link to="/create">
                  <IoMdPersonAdd /> New User
                </Link>
              </button>

              <button>
                <Link to="/history">
                  <IoMdPersonAdd /> Historial
                </Link>
              </button>
            </div>

            <div className="input-feild-s">
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

        <div className="table-responsive">
          <DataTable data={datos} columns={columns} />
        </div>

        {/* <table>
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
        </table> */}
      </div>
      {/* Aquí va el contenido principal */}
    </div>
  );
};

export default Table;
