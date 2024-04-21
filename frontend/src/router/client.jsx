import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginClie from "../Client/logins/login-clie/login-clie";
import PageHome from "../Client/page/home page/home-page";
import Register from "../Client/logins/register/register";
import Nav from "../Client/page/reserva/components/navbar/nav";
import HeroReserva from "../Client/page/reserva/components/hero/heroreserva";

export const ClientRoutes = () => (
  <>
    <Route path="/" element={<PageHome />} />
    <Route path="/login-clie" element={<LoginClie />} />
    <Route path="/register" element={<Register />} />
    <Route path="/nav" element={<Nav />} />
    <Route path="/hero" element={<HeroReserva />} />
  </>
);

export default ClientRoutes;
