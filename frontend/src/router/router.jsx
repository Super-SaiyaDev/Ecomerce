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
        <Route path="/register" element={<Register />} />
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
