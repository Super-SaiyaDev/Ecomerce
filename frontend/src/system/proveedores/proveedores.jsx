import React from "react";
import Table from "../dashboard/components/table/table";
import NavbarSystem from "../dashboard/components/navbar/navabar";
import Sliderbar from "../dashboard/components/sliderbar/sliderbar";

const Proveedores = () => {
  const rows = ["ID_proveedor", "Nombre", "email", "telefono", "direccion"];

  const columns = [
    "Cod. Proveedor",
    "Nombre",
    "email",
    "telefono",
    "direccion",
  ];

  const api = {
    url: "http://localhost:3000/api/proveedores",
  };

  return (
    <>
      <NavbarSystem />
      <Table rows={rows} columns={columns} api={api} />
      <div>
        <Sliderbar/>
      </div>
    </>
  );
};

export default Proveedores;
