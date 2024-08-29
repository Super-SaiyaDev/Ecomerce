import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/table.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function History({}) {
  const [datos, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clientes/reactivar")
      .then((response) => {
        console.log(response.data.body);
        setData(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerReactivate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/clientes/reactivar/${id}`
      );
      if (response.status === 200) {
        location.reload();
        console.log(response);
      } else {
        console.log(response.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [isInputFocused, setInputFocused] = useState(false);
  const columns = ["id", "nombre", "usuario", "clave", "activo"];

  const rowsPerPage = 8; // Cambia esto al número de filas que quieres por tabla
  const [currentTable, setCurrentTable] = useState(0);
  const tables = [];
  for (let i = 0; i < datos.length; i += rowsPerPage) {
    tables.push(datos.slice(i, i + rowsPerPage));
  }

  return (
    <>
      <div className="content">
        <div className="content-T">
          <div className="header-table">
            <div className="title-table">
              <h1>Users Management</h1>
            </div>

            <div className="navigate-table">
              <div className="btn-navigate">
                <button>
                  <Link to="/table">
                    <IoMdPersonAdd /> Backward
                  </Link>
                </button>
              </div>

              <div className="input-feild-s">
                <i
                  className={`lbl-search ${isInputFocused ? "desactived" : ""}`}
                >
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
            <table>
              <thead>
                <tr>
                  {columns.map((column, key) => (
                    <th key={key}>{column}</th>
                  ))}
                  <th>Reactivated</th>
                </tr>
              </thead>
              <tbody>
                {datos.length > 0 ? (
                  tables[currentTable].map((item, key) => (
                    <tr key={key}>
                      {columns.map((column, key) => (
                        <td key={key}>{item[column.toLowerCase()]}</td>
                      ))}
                      <td>
                        <button onClick={() => handlerReactivate(item.id)}>
                          <RiEdit2Fill />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      style={{ textAlign: "center" }}
                      colSpan={columns.length + 2}
                    >
                      No datos
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
              {datos.length > 0 &&
                tables.map((_, index) => (
                  <button onClick={() => setCurrentTable(index)}>
                    {index + 1}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default History;
