import React from 'react'
import NavbarSystem from '../components/navabar'
import Sliderbar from '../components/sliderbar'
import Table from '../app/table'

const Ventas = () => {

    const rows = [
        "IDVenta",
        "IDContrato",
        "FechaVenta",
      ];
    
      const columns = [
        "IDVenta",
        "IDContrato",
        "FechaVenta",
      ];

      const api = {
        url: "http://localhost:3000/api/ventas",
      }

    

  return (
    <>
    <NavbarSystem />
    <Sliderbar></Sliderbar>
    <Table rows={rows} columns={columns} api={api}/>
    </>
  )
}

export default Ventas