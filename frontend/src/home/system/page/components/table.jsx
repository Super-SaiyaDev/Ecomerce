import React, { useState, useEffect } from "react";
import axios from "axios";

const Tabla = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api")
      .then((res) => setDatos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const editarDataBase = (id) => {
    axios
      .put(`http://localhost:3000/api/editar/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  const eliminarDataBase = (id) => {
    axios
      .delete(`http://localhost:3000/api/eliminar/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <table>
      <caption>Datos de prueba</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Id Rol</th>
          <th>ROL</th>
          <th>permiso</th>
          <th>id permiso</th>
          <th>activo</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((index,key) => (
          <tr key={key}>
            <td>{index.id}</td>
            <td>{index.nombre}</td>
            <td>{index.usuario}</td>
            <td>{index.id_rol}</td>
            <td>{index.rol}</td>
            <td>{index.id_permiso}</td>
            <td>{index.permiso}</td>
            <td>{index.activo}</td>
            <td>
              <button onClick={() => editarDataBase(key.id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => eliminarDataBase(key.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;