import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "../system/dashboard/components/table/table";
import LoginUser from "../system/login/login";
import Principal from "../system/dashboard/dashboard";
import Create from "../system/dashboard/components/table/components/create/create";
import Update from "../system/dashboard/components/table/components/update/update";
import History from "../system/dashboard/components/table/components/historial";

export const DashboardRoutes = () => (
  <>
    <Route path="/home" element={<Principal />} />
    <Route path="/login" element={<LoginUser />} />
    <Route path="/table" element={<Table />} />
    <Route path="/create" element={<Create />} />
    <Route path="/update/:id" element={<Update />} />
    <Route path="/history" element={<History />} />
  </>
);

export default DashboardRoutes;