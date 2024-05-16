
import React from 'react'
import Table from '../dashboard/components/table/table'


const Proveedores = () => {

    const rows = [
        "ID_proveedor",
        "Nombre",
        "email",
        "telefono",
        "direccion",
    ];
	

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
    <h1>Proveedores</h1>
        <Table rows={rows} columns={columns} api={api} />
    </>
    
  )
}


export default Proveedores

