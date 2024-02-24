import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Table from "../components/table";
import LoginUser from "../system/login/login";
import Principal from "../system/dashboard/dashboard";
import LoginClie from "../home/login-clie/login-clie";
import PageHome from "../home/page/home page/home-page";

const Path = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/home" element={<Principal />} />
        <Route path="/" element={<PageHome/>}/>
        <Route path="/login-clie" element={<LoginClie />} />
      </Routes>
    </Router>
  );
};

export default Path;
