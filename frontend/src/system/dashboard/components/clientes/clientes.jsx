import React from 'react'
import Table from '../table/table'

const Clientes = () => {

    const rows = [
        "client_id",
        "email",
        "name",
         "phone_number",
         "address",
         "date_registered",
    ]

    const columns =[
        "client_id",
        "email",
        "name",
         "phone_number",
         "address",
         "date_registered",
    ]

    const api = {
        url: "http://localhost:3000/api/clientes",
    }

  return (
    <>
        <Table rows={rows} columns={columns} api={api}/>
    </>
  )
}

export default Clientes