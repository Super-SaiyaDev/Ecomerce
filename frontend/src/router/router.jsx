import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "../system/dashboard/components/table/table";
import LoginUser from "../system/login/login";
import Principal from "../system/dashboard/dashboard";
import LoginClie from "../Client/logins/login-clie/login-clie";
import PageHome from "../Client/page/home page/home-page";
import Register from "../Client/logins/register/register";
import Create  from "../system/dashboard/components/table/components/create/create"
import Update from "../system/dashboard/components/table/components/update/update";
import History from "../system/dashboard/components/table/components/historial";
import Nav from "../Client/page/reserva/components/navbar/nav";
import HeroReserva from "../Client/page/reserva/components/hero/heroreserva";
const Path = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/home" element={<Principal />} />
        <Route path="/table" element={<Table />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="/" element={<PageHome />} />
        <Route path="/login-clie" element={<LoginClie />} />
        <Route path="/history" element={<History />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/hero" element={<HeroReserva />} />
        <Route
          path="*"
          element={
            <>
              <h1>not found this path </h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default Path;
