
import React from 'react'
import NavbarSystem from '../app/navabar'
import Sliderbar from '../app/sliderbar'
import Table from '../app/table'

const Users = () => {

    const rows = [
        "id_usuario",
        "nombre_usuario",
        "contrasena",
        "id_rol",
        "email",
        "ultimo_inicio_sesion",
      ];
    
      const columns = [
        "id_usuario",
        "nombre_usuario",
        "contrasena",
        "id_rol",
        "email",
        "ultimo_inicio_sesion",
      ];

      const api = {
        url: "http://localhost:3000/api/usuario",
      }

      const inputs = [
        { lblName: "nombre_usuario", type: "text", name: "nombre_usuario" },
        { lblName: "contrasena", type: "password", name: "contrasena" },
        { lblName: "id_rol", type: "text", name: "id_rol" },
        { lblName: "email", type: "email", name: "email" },
        { lblName: "ultimo_inicio_sesion", type: "date", name: "ultimo_inicio_sesion" },
      ];
    

  return (
    <>
    <NavbarSystem />
    <Sliderbar></Sliderbar>
    <Table rows={rows} columns={columns} api={api} input={inputs}/>
    </>
  )
}

export default Users