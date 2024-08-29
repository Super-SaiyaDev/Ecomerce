import React from "react";
import Table from "../app/table";
import NavbarSystem from "../components/navabar";
import Sliderbar from "../components/sliderbar";

const Proveedores = () => {
  const rows = ["ID_proveedor", "nombre", "email", "telefono", "direccion"];

  const columns = [
    "Cod. Proveedor",
    "nombre",
    "email",
    "telefono",
    "direccion",
  ];

  const api = {
    url: "http://localhost:3000/api/proveedores",
  };

  const inputs = [
    { lblName: "nombre", type: "text", name: "nombre" },
    { lblName: "email", type: "email", name: "email" },
    { lblName: "telefono", type: "text", name: "telefono" },
    { lblName: "direccion", type: "text", name: "email" },
  ];

  return (
    <>
      <NavbarSystem />
      <div>
        <Sliderbar/>
      </div>
      <Table rows={rows} columns={columns} api={api} input={inputs}/>
    </>
  );
};

export default Proveedores;
