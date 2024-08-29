import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "../app/table";
import LoginUser from "../app/login";
import Principal from "../app/dashboard";
import Create from "../components/create";
import Update from "../components/update";
import History from "../components/historial";
import LoginClie from "../app/login-clie";
import PageHome from "../app/home-page";
import Register from "../app/register";
// import Nav from "../components/navabar";
// import HeroReserva from "../components/components1/hero/heroreserva";
// import Reserva from "../app/reserva";
// import Clientes from "../components/components/";
import Users from "../components/user";
import Ventas from "../components/ventas";
import Proveedores from "../components/proveedores";

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
        <Route path="/usuario" element={<Users />} />
        <Route path="/Proveedores" element={<Proveedores />} />
        <Route path="/ventas" element={<Ventas />} />

        {/* <Route path="/cliente" element={<Clientes />} /> */}

        {/* Estas son las rutas frontend del cliente. */}
        <Route path="/" element={<PageHome />} />
        <Route path="/login-clie" element={<LoginClie />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/nav" element={<Nav />} /> */}
        {/* <Route path="/hero" element={<HeroReserva />} /> */}
        {/* <Route path="/reserva" element={<Reserva />} /> */}
        <Route
          path="*"
          element={
            <>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "90vh",
                }}
              >
                not found this path{" "}
              </h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default Path;
