import React from "react";
import Sliderbar from "../sliderbar/sliderbar";
import Table from "../table/table";

const Clientes = () => {
  const rows = [
    "id_cliente",
    "nombre",
    "email",
    "telefono",
    "direccion",
    "fecha_registro",
  ];

  const columns = [
    "id_cliente",
    "nombre",
    "email",
    "telefono",
    "direccion",
    "fecha_registro",
  ];

  const inputs = [
    { lblName: "Nombre", type: "text", name: "nombre" },
    { lblName: "Email", type: "email", name: "email" },
    { lblName: "Telefono", type: "text", name: "telefono" },
    { lblName: "Direccion", type: "text", name: "direccion" },
    { lblName: "fecha_registro", type: "date", name: "fecha_registro" },
  ];

  const api = {
    url: "http://localhost:3000/api/clientes",
  };

  return (
    <>
      <Sliderbar />
      <Table rows={rows} columns={columns} api={api} input={inputs} />
    </>
  );
};

export default Clientes;
