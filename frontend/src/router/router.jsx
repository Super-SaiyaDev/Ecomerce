import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from "../system/dashboard/components/table/table";
import LoginUser from "../system/login/login";
import Principal from "../system/dashboard/dashboard";
import Create from "../system/dashboard/components/table/components/create/create";
import Update from "../system/dashboard/components/table/components/update/update";
import History from "../system/dashboard/components/table/components/historial";
import LoginClie from "../Client/logins/login-clie/login-clie";
import PageHome from "../Client/page/home page/home-page";
import Register from "../Client/logins/register/register";
import Nav from "../Client/page/reserva/components/navbar/nav";
import HeroReserva from "../Client/page/reserva/components/hero/heroreserva";
import Reserva from "../Client/page/reserva/reserva";
import Categorys from "../Client/page/home page/components/categorys/categorys";
import Clientes from "../system/dashboard/components/clientes/clientes";

import Proveedores from "../system/proveedores/proveedores";


const Path = () => {
  return (
    <Router>
      <Routes>
        {/* Estas son las rutas frontend del dashboard. */}
        <Route path="/home" element={<Principal />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/table" element={<Table />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/history" element={<History />} />
        <Route path="/clientes" element={<Clientes />} />

        <Route path="/Proveedores" element={<Proveedores />} />
        

        {/* Estas son las rutas frontend del cliente. */}
        <Route path="/" element={<PageHome />} />
        <Route path="/login-clie" element={<LoginClie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/hero" element={<HeroReserva />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route
            path="*"
            element={
              <>
                <h1 style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' ,'textAlign': 'center', 'minHeight': '90vh'}}>not found this path </h1>
               
              </>
            }
          ></Route>
      </Routes>
    </Router>
  );
};

export default Path;