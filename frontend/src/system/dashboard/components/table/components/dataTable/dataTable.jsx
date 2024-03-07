import React from 'react';
import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

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

function DataTable({ data, columns}) {
  return (
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
        {data.map((item, key) => (
          <tr key={key}>
            {columns.map((column, key) => (
              <td key={key}>{item[column.toLowerCase()]}</td>
            ))}
            <td>
              <Link to={`/update/${item.id_usuario}`}>
                <button>
                  <RiEdit2Fill />
                </button>
              </Link>
            </td>
            <td>
              <button onClick={() => handlerDelete(item.id_usuario)}>
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;