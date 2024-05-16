import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const handlerDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
    if (response.status === 200) {
      window.location.reload();
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

function DataTable({ data, rows, columns }) {
  const rowsPerPage = 5;
  const [currentTable, setCurrentTable] = useState(0);

  // Divide data into pages
  const tables = [];
  for (let i = 0; i < data.length; i += rowsPerPage) {
    tables.push(data.slice(i, i + rowsPerPage));
  }

  // Render a row for a data item
  const renderRow = (item, key) => (
    <tr key={key}>
      {rows.map((cell, key) => (
        <td key={key}>{item[cell]}</td>
      ))}
      <td>
        <Link to={`/update/${item.IdUsers}`}>
          <button>
            <RiEdit2Fill />
          </button>
        </Link>
      </td>
      <td>
        <button onClick={() => handlerDelete(item.IdUsers)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, key) =>  (
              <th key={key}>{column}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tables[currentTable]?.length > 0 ? (
            tables[currentTable].map(renderRow)
          ) : (
            <tr>
              <td style={{ textAlign: "center", color: "white" }} colSpan={columns.length + 2}>
                No hay datos  
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="container-btn-next">
        {tables.map((_, index) => (
          <button className="btn-next" key={index} onClick={() => setCurrentTable(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataTable;