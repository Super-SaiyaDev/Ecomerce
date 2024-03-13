import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const handlerDelete = async (id, setData) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/clientes/${id}`
    );
    if (response.status === 200) {
      location.reload();na
      console.log(response);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

function DataTable({ data, columns }) {
  const rowsPerPage = 8; // Cambia esto al número de filas que quieres por tabla
  const [currentTable, setCurrentTable] = useState(0);
  const tables = [];
  for (let i = 0; i < data.length; i += rowsPerPage) {
    tables.push(data.slice(i, i + rowsPerPage));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, key) => (
              <th key={key}>{column}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            tables[currentTable].map((item, key) => (
              <tr key={key}>
                {columns.map((column, key) => (
                  <td key={key}>{item[column.toLowerCase()]}</td>
                ))}
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button>
                      <RiEdit2Fill />
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handlerDelete(item.id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center" }} colSpan={columns.length + 2}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {data.length > 0 &&
          tables.map((_, index) => (
            <button key={index} onClick={() => setCurrentTable(index)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}

export default DataTable;
